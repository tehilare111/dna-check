from django.conf.urls import url 
from users import views 
 
urlpatterns = [
    url(r'^create-User/$',views.customer_create),
    # get username
    url(r'^CheckLogin/$',views.CheckLogin),
]