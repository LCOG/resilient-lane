from django.contrib import admin

from .models import Organization, Resource, SiteMode


@admin.register(SiteMode)
class SiteModeAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ("get_name", "url")


@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ("title", "organization")
    list_filter = ("modes",)
