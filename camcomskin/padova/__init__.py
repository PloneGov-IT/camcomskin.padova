# -*- extra stuff goes here -*-
from plone.portlets.retriever import PortletRetriever
from zope.i18nmessageid import MessageFactory

from .monkey import _myGetPortlets

_ = MessageFactory('camcomskin.padova')


def initialize(context):
    """Initializer called when used as a Zope 2 product."""

    PortletRetriever.getPortlets = _myGetPortlets
