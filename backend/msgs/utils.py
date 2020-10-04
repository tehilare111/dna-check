
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


def update_messages_for_relevant_users(sender_unit, reporterUnit):
    '''
        Update all messages in the relevant users 
    '''
    units_to_update_msg = get_superior_units(reporterUnit)
    units_to_update_msg.remove(sender_unit)
    print(units_to_update_msg)

    mb = Users.objects.get(username="mb")
    print(mb.unreadedMessages)