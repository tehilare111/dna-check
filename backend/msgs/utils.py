
from msgs.models import Msgs
from users.models import Users 
from management.utils import get_superior_units


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
    if Msgs.objects.filter(reference=reference).exists():
        event_form_msgs = Msgs.objects.get(reference=reference)
        event_form_msgs.delete()


def update_message_for_relevant_users(sender_unit, reporterUnit, reference):
    '''
        Update all messages in the relevant users 
    '''
    units_to_update_msg = get_superior_units(reporterUnit)
    units_to_update_msg.remove(sender_unit)

    users_to_update_msg = Users.objects.filter(unit__in=units_to_update_msg)
    for user in users_to_update_msg:
        user.unreadedMessages[str(reference)] = user.unreadedMessages.get(str(reference), 0) + 1
        user.save()

def update_user_read_msg(personal_number, reference):
    try:
        user = Users.objects.get(personalNumber=personal_number)
        del user.unreadedMessages[str(reference)]
        return True
    except:
        return False