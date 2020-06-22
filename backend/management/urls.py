from django.conf.urls import url 
from management import views
from management import utils 
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [
    # management request
    url(r'^units-management/(?P<token>.*)$', views.units_tree_management),
    url(r'^constants-fields/$', views.constants_fields),
    url(r'^get_array_units/$',views.units_tree_register),

]
