# -*- coding: utf-8 -*-
from collective.editablemenu import _
from camcomskin.padova.interfaces import IEditableSecondaryMenuSettings
from plone.app.registry.browser import controlpanel
from collective.editablemenu.browser.menu_support_view import SubMenuDetailView


class EditableSecondaryMenuSettingsEditForm(controlpanel.RegistryEditForm):
    """Media settings form.
    """
    schema = IEditableSecondaryMenuSettings
    id = "EditableSecondaryMenuSettingsForm"
    label = _(u"Editable Menu Settings")


class EditableSecondaryMenuSettingsView(controlpanel.ControlPanelFormWrapper):
    """Sitesearch settings control panel.
    """
    form = EditableSecondaryMenuSettingsEditForm


class SecondaryMenuSupportView(SubMenuDetailView):
    """
    """
    registry = "camcomskin.padova.interfaces.IEditableSecondaryMenuSettings.menu_tabs"
