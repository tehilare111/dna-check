from django.conf.urls import url 
from management import views 
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [
    # management request
    url(r'^units-management/$', views.units_tree_management),
    url(r'^constants-fields/$', views.constants_fields),

]
