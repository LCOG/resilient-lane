from rest_framework import viewsets
from rest_framework.generics import RetrieveAPIView

from .models import Resource, SiteMode
from .serializers import ResourceSerializer, SiteModeSerializer


class CurrentModeView(RetrieveAPIView):
    serializer_class = SiteModeSerializer

    def get_object(self):
        return SiteMode.objects.first()


class ResourceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
