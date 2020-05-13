from django.conf.urls import url 
from customers import views 
 
urlpatterns = [ 
    url(r'^customers/$', views.customer_list),
    url(r'^customers/(?P<pk>[0-9]+)$', views.customer_detail),
    url(r'^customers/age/(?P<age>[0-9]+)/$', views.customer_list_age),
    url(r'^event_forms/$', views.new_event_form),
    url(r'^create-User/',views.customer_insert),
    url(r'^get_users_username/(?P<username>[0-9a-zא-תA-Z]+)$',views.customer_detail_Users_username),
    url(r'^get_users_personalnumber/(?P<personalnumber>[0-9a-zא-תA-Z]+)$',views.customer_detail_Users_Personal_number),
]
