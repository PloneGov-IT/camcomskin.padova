# -*- coding: utf-8 -*-
from plone import api
from plone.app.vocabularies.catalog import CatalogSource as CatalogSourceBase
from plone.autoform import directives
from plone.formwidget.contenttree import MultiContentTreeFieldWidget
from plone.formwidget.contenttree import UUIDSourceBinder
from plone.supermodel.model import Schema
from plone.tiles import PersistentTile
from zope import schema
from zope.interface import implementer


class CatalogSource(CatalogSourceBase):
    """Navigation tile specific catalog source to allow targeted widget"""


class IPrenotazioniTile(Schema):
    """
    """

    title = schema.TextLine(
        title=u'Titolo',
        description=u'Il titolo da mostrare in testata della tile',
        default=u'',
        required=True,
    )

    folders = schema.List(
        title=u'Sportelli prenotazione',
        description=u'Seleziona una lista di sportelli prenotazione che '
        u'offrono lo stesso servizio.',
        value_type=schema.Choice(
            title=u"Selection",
            source=UUIDSourceBinder(portal_type=('PrenotazioniFolder')),
        ),
        required=True,
    )
    directives.widget(folders=MultiContentTreeFieldWidget)


@implementer(IPrenotazioniTile)
class PrenotazioniTile(PersistentTile):
    def title(self):
        return self.data.get('title', u'')

    def results(self):
        res = []
        for uid in self.data.get('folders', []):
            infos = self.get_folder_infos(uid)
            if infos:
                res.append(infos)
        return res

    def get_folder_infos(self, uid):
        folder = api.content.get(UID=uid)
        if not folder:
            return {}
        return {'title': folder.Title(), 'url': folder.absolute_url()}

