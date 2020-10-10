from django.conf.urls import url 
from management import views
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [
    # management request
    url(r'get-units/(?P<unit>.*)$', views.get_units_tree),
    url(r'^units-management/(?P<unit>.*)$', views.units_tree_modify),
    url(r'^constants-fields/$', views.constants_fields),
    url(r'^get_array_units/$',views.units_tree_register),
    url(r'^constants-fields-and-units/$',views.constans_fields_and_units)
]
