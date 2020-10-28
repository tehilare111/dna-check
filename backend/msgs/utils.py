
from msgs.models import Msgs
from users.models import Users 
from management.utils import get_superior_units
from draft_forms.models import DraftFormsTable
from forms.models import FormsTable


def new_event_msgs(reference, reporterUnit):
    '''
        Create new msgs row in the database, related to a specific event form
    '''
    if not Msgs.objects.filter(reference=reference).exists():
        event_form_msgs = Msgs(reference=reference, reporterUnit=reporterUnit)
        event_form_msgs.save()


def delete_event_messages(reference):
    '''
        Delete specific event form msgs row in the database 
    '''
    # The second condition means xor - if the event appears only in one of the DB, 
    # It means it doesn't exist in the second db, and therefore the event msgs can be deleted
    if Msgs.objects.filter(reference=reference).exists() and (FormsTable.objects.filter(reference=reference).exists() ^ DraftFormsTable.objects.filter(reference=reference).exists()):
        event_form_msgs = Msgs.objects.get(reference=reference)
        event_form_msgs.delete()


def update_message_for_relevant_users(sender_unit, reporterUnit, reference):
    '''
        Update all messages in the relevant users 
    '''
    units_to_update_msg = get_superior_units(reporterUnit)

    users_to_update_msg = Users.objects.filter(unit__in=units_to_update_msg)
    # remove sender_user from this units_to_update_msg users array - so the message wont update for him
    # Will be possible after merging with constatnts-fields redesign(Sender User object is accessible more easly in this branch)
    for user in users_to_update_msg:
        user.unreadedMessages[str(reference)] = user.unreadedMessages.get(str(reference), 0) + 1
        user.save()
        

def update_user_event_deleted(reference, reporterUnit):
    '''
        Update all users to delete this event reference from their unreaded msgs
    '''
    # If the event appaers in the two DB, it means it shouldn't been deleted - the users still needs to by notified about 
    # its ureaded msgs
    if (FormsTable.objects.filter(reference=reference).exists() and DraftFormsTable.objects.filter(reference=reference).exists()):
        return False

    users_to_delete_event = Users.objects.filter(unit__in=get_superior_units(reporterUnit))
    for user in users_to_delete_event:
        if str(reference) in user.unreadedMessages:
            del user.unreadedMessages[str(reference)]
            user.save()