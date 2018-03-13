# -*- coding: utf-8 -*-
from Acquisition import aq_inner
from collective.contentleadimage.browser.viewlets import LeadImageViewlet as BaseLeadImageViewlet  # noqa
from collective.contentleadimage.config import IMAGE_FIELD_NAME
from plone.app.layout.viewlets. content import ContentRelatedItems as BaseContentRelatedItems  # noqa
from plone.app.layout.viewlets. content import DocumentBylineViewlet as BaseDocumentBylineViewlet  # noqa
from Products.CMFCore.utils import getToolByName
from Products.Five.browser.pagetemplatefile import ViewPageTemplateFile

from plone.app.layout.viewlets import common as base
from plone import api


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


class DocumentBylineViewlet(BaseDocumentBylineViewlet):

    index = ViewPageTemplateFile("templates/document_byline.pt")

    def show(self):
        return True


class ContentRelatedItems(BaseContentRelatedItems):
    def related2brains(self, related):
        """Return a list of brains based on a list of relations. Will filter
        relations if the user has no permission to access the content.

        :param related: related items
        :type related: list of relations
        :return: list of catalog brains.

        Customization: if the related item doesn't exists anymore, path is None
        so don't try to make a catalog search (that raise and exception)
        """
        catalog = getToolByName(self.context, 'portal_catalog')
        brains = []
        for r in related:
            path = r.to_path
            if path:
                # the query will return an empty list if the user has no
                # permission to see the target object
                brains.extend(catalog(path=dict(query=path, depth=0)))
        return brains

