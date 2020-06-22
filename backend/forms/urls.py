from django.conf.urls import url 
from forms import views 
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [
    # control table requests
    url(r'^forms/(?P<event_type>[א-ת\-\/ ]*)/$', views.forms_list),
    # requests to load values from server - time/determined fields
    url(r'^event_forms/values$', views.new_event_form),
    # requests for a new form creation
    url(r'^event_forms/$', views.NewEventFrom.as_view()),
    # requests to a specific form in the db table
    url(r'^event_forms/(?P<reference>[0-9]+)$', views.NewEventFrom.as_view()),
    url(r'^media/(?P<path>.+)$', views.download_file),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
