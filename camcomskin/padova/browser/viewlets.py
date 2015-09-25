# -*- coding: utf-8 -*-
from Acquisition import aq_inner
from plone.app.layout.viewlets.common import ViewletBase


class SecondaryMenuViewlet(ViewletBase):
    """
    """

    @property
    def menu_tabs(self):
        context = self.context.aq_inner
        support_view = context.restrictedTraverse("@@secondary_menu_support_view", None)
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
