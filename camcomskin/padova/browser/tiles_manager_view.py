# -*- coding: utf-8 -*-
from plone.app.blocks.interfaces import IBlocksTransformEnabled
from redturtle.tiles.management.browser import tiles_view
from zope.interface import implementer


@implementer(IBlocksTransformEnabled)
class CCPDTilesView(tiles_view.BaseView):

    """
    La vista specifica usata per le tile delle Pagine (portal_type Document)
    """
