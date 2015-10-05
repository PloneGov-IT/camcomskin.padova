# -*- coding: utf-8 -*-
from collective.editablemenu import _
from collective.editablemenu import logger
from collective.editablemenu.browser.interfaces import IControlpanelSchema
from collective.editablemenu.browser.interfaces import MenuEntrySubitem
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
from collective.editablemenu.browser.controlpanel import EditableMenuEditForm
from collective.editablemenu.browser.menu_support_view import SubMenuDetailView
from camcomskin.padova.interfaces import ISecondaryMenuControlpanelSchema


class EditableSecondaryMenuEditForm(EditableMenuEditForm):

    fields = field.Fields(ISecondaryMenuControlpanelSchema)
    fields['navigation_folder'].widgetFactory = ContentTreeFieldWidget
    fields['additional_columns'].widgetFactory = MultiContentTreeFieldWidget
    menu_tabs = "camcomskin.padova.interfaces.IEditableSecondaryMenuSettings.menu_tabs"
    ignoreContext = True
    control_panel_view = "@@editable-secondarymenu-settings"


EditableSecondaryMenuSettingsView = wrap_form(
    EditableSecondaryMenuEditForm,
    index=ViewPageTemplateFile('templates/menu_controlpanel.pt'))


class SecondaryMenuSupportView(SubMenuDetailView):
    """
    """
    registry = "camcomskin.padova.interfaces.IEditableSecondaryMenuSettings.menu_tabs"
