from django.conf.urls import url 
from users import views 
 
urlpatterns = [
    url(r'^create-User/$',views.customer_create),
    # get username
    url(r'^CheckLogin/$',views.CheckLogin),
    url(r'^get_group_permissions_List/(?P<unit>.*)$',views.groups_permissions_list),
    url(r'^update_permissions_user/(?P<personalnumber>[0-9a-zא-תA-Z]+)$',views.update_permissions_users)
    #url(r'^GetUsersList/$',views.Users_list),
]