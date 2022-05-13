from rest_framework import serializers

from .models import Resource, SiteMode


class SiteModeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SiteMode
        fields = [
            'pk', 'name'
        ]


class ResourceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Resource
        fields = [
            'pk', 'title', 'description', 'url', 'organization', 'modes'
        ]