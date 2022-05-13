from django.urls import include, path

from rest_framework import routers

from mainsite.api_views import CurrentModeView, ResourceViewSet


urlpatterns = [
    path('v1/current-mode/', CurrentModeView.as_view(), name='current_mode'),
]

router = routers.DefaultRouter(trailing_slash=False)
router.register('v1/resource', ResourceViewSet)


urlpatterns = router.urls + urlpatterns
