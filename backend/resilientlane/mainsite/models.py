from django.db import models
from django.utils.translation import gettext as _


class SiteMode(models.Model):
    def __str__(self):
        return self.name
    
    name = models.CharField(_("name"), max_length=50)


class Organization(models.Model):
    class Meta:
        ordering = ["name"]

    name = models.CharField(_("name"), max_length=100)
    short_name = models.CharField(_("short name"), max_length=20, blank=True, null=True)
    url = models.URLField(_("url"), blank=True, null=True)

    def get_name(self):
        return self.short_name if self.short_name else self.name
    get_name.short_description = 'Name'

    def __str__(self):
        return self.name


class Resource(models.Model):
    title = models.CharField(_("title"), max_length=200)
    description = models.TextField(_("description"), blank=True, null=True)
    url = models.URLField(_("url"), blank=True, null=True)
    organization = models.ForeignKey("mainsite.Organization", on_delete=models.CASCADE, blank=True, null=True)
    modes = models.ManyToManyField("mainsite.SiteMode")