# -*- coding: utf-8 -*-
from plone.app.layout.viewlets import ViewletBase


class RatingManagerViewlet(ViewletBase):

    # def rating_is_active(self):
    #     field = self.context.getField('active_rating')
    #     if not field:
    #         return False
    #     return field.get(self.context)

    def render(self):
        return self.index()
