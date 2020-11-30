from django.conf.urls import url 
from draft_forms import views 
 
urlpatterns = [
    # control table drafts requests
    url(r'^draft-forms/(?P<event_type>[א-ת\-\/ ]*)$', views.draft_forms_list),
    # requests to a specific draft form in the db table
    url(r'^drafts-event-forms/(?P<reference>[0-9]*)$', views.DraftEventFrom.as_view()),
    url(r'^delete-from-drafts-when-sent/(?P<reference>[0-9]*)$', views.DraftEventFrom.deleteFromDraftsWhenFormIsSent),
]
