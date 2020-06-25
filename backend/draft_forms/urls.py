from django.conf.urls import url 
from draft_forms import views 
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [
    # control table xl export requests
    # url(r'^forms/xl/(?P<event_type>[א-ת\-\/ ]*)$', views.download_xl_file),
    
    # control table requests
    url(r'^draft_forms/$', views.forms_list),
    # requests for a new form creation
    url(r'^draft_event_forms/$', views.NewEventFrom.as_view()),
    # requests to a specific form in the db table
    url(r'^draft_event_forms/(?P<reference>[0-9]+)$', views.NewEventFrom.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
