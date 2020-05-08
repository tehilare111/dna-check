from django.conf.urls import url 
from customers import views 
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [ 
    url(r'^customers/$', views.customer_list),
    url(r'^customers/(?P<pk>[0-9]+)$', views.customer_detail),
    url(r'^customers/age/(?P<age>[0-9]+)/$', views.customer_list_age),
    # url(r'^event_forms/file$', views.new_event_form_file),
    url(r'^event_forms/file$', views.NewEventFrom.as_view()),
    url(r'^event_forms/(?P<reference>[0-9]+)$', views.NewEventFrom.as_view()),
    # Not Used right now
    url(r'^event_forms/$', views.new_event_form),
    url(r'^media/(?P<path>.+)$', views.download_file),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)