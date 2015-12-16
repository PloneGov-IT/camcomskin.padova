# -*- coding: utf-8 -*-
from Acquisition import aq_inner
from plone.app.layout.viewlets.common import ViewletBase
from plone import api
from collective.contentleadimage.browser.viewlets import LeadImageViewlet as BaseLeadImageViewlet
from collective.contentleadimage.config import IMAGE_FIELD_NAME


class SecondaryMenuViewlet(ViewletBase):
    """
    """

    @property
    def menu_tabs(self):
        support_view = api.portal.get().restrictedTraverse(
            "@@secondary_menu_support_view",
            None)
        if not support_view:
            return []
        tabs = support_view.get_menu_tabs()
        for tab in tabs:
            tab_details = support_view.get_menu_subitems(
                tab_id=tab.get('index'))
            static_items = tab_details.get('static_items')
            if not static_items:
                continue
            menu_structure = '<div class="submenuWrapper">'
            for submenu in static_items:
                menu_structure += '<div class="submenuItem %s"> %s </div>' % (submenu.get('id'), submenu.get('text'))
            tab['menu_structure'] = menu_structure
        return tabs


class LeadImageViewlet(BaseLeadImageViewlet):

    def descTag(self, css_class='tileImage'):
        """ returns img tag """
        context = aq_inner(self.context)
        field = context.getField(IMAGE_FIELD_NAME)
        if field is not None and field.get_size(context) != 0:
            scale = self.prefs.desc_scale_name
            return field.tag(
                context,
                scale=scale,
                css_class=css_class,
                title="immagine",
                alt="immagine")
        return ''
