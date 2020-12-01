from django.conf.urls import url 
from management import views
from django.conf import settings
from django.conf.urls.static import static
 
urlpatterns = [
    # management request
    url(r'^units-management/$', views.units_tree_management),
    url(r'^constants-fields/$', views.constants_fields),
    url(r'^add-constant-fields/$', views.add_constant_fields),
    url(r'^delete-constant-field/$', views.delete_constant_field),
    url(r'^edit-constant-field/$', views.edit_constant_field),
    url(r'^get_array_units/$',views.units_tree_register),
    url(r'^constants-fields-and-units/$',views.constans_fields_and_units)
]
