from Products.Five import BrowserView

class UfficiListView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def get_offices(self):
        item_list = self.context.queryCatalog()
        check_list = [x.portal_type == 'Ufficio' for x in item_list]

        if not all(check_list):
            return []

        return item_list

    def get_phone(self,item):
         return item.getObject().phone

    def get_email(self,item):
         return item.getObject().email

    def get_pec(self,item):
         return item.getObject().pec

    def get_url(self,item):
         return item.getObject().absolute_url()
