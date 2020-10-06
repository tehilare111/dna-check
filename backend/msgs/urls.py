from django.conf.urls import url 
from msgs import views 
 
urlpatterns = [
    url(r'^msgs/(?P<reference>[0-9]+)$',views.msgs),
    url(r'^msg-read/(?P<reference>[0-9]+)$',views.user_read_msg),
]
