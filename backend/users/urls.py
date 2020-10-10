from django.conf.urls import url 
from users import views 
 
urlpatterns = [
    url(r'^create_user/$',views.create_user),
    # get username
    url(r'^check_login/$',views.check_login),
    url(r'^get_group_permissions_List/(?P<unit>.*)/(?P<token>.*)$',views.groups_permissions_list),
    url(r'^update_permissions_user/(?P<personalnumber>[somr][0-9]{7})$',views.update_permissions_users),
    #url(r'^GetUsersList/$',views.Users_list),
    #delete user request
    url(r'^delete_user/(?P<personalNumber>[somr][0-9]{7})$', views.delete_user),
]