from django.conf.urls import url 
from forms import views 
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [
    # control table requests
    url(r'^forms/(?P<event_type>[א-ת\-\/ ]*)$', views.forms_list),
    # requests to load values from server - time/determined fields
    url(r'^event_forms/values$', views.new_event_form),
    # requests for a new form creation
    url(r'^event_forms/$', views.NewEventFrom.as_view()),
    # requests to a specific form in the db table
    url(r'^event_forms/(?P<reference>[0-9]+)$', views.NewEventFrom.as_view()),
    url(r'^media/(?P<path>.+)$', views.download_file),
    # create username
    url(r'^create-User/',views.customer_create),
    # get username
    url(r'^get_users_username/(?P<username>[0-9a-zא-תA-Z]+)$',views.customer_detail_Users_username),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
