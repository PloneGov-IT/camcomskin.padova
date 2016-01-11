# -*- coding: utf-8 -*-
from collective.editablemenu import _
from collective.editablemenu import logger
from camcomskin.padova.interfaces import IEditableSecondaryMenuSettings
from plone import api
from plone.formwidget.contenttree import ContentTreeFieldWidget
from plone.formwidget.contenttree import MultiContentTreeFieldWidget
from plone.memoize import view
from plone.z3cform.layout import wrap_form
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile
from z3c.form import button, form, field
from zope.component import getMultiAdapter
from zope.component import getMultiAdapter
from zope.interface import Interface
from zope.schema import Date, Choice
from plone.app.textfield.value import RichTextValue
from zope import schema
import z3c.form.field
from z3c.form.interfaces import HIDDEN_MODE
from plone.app.registry.browser import controlpanel

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
