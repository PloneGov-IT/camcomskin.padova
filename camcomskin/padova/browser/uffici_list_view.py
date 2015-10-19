from Products.Five import BrowserView

class UfficiListView(BrowserView):

    def __init__(self, context, request):
        self.context = context
        self.request = request

    def get_offices(self):
        return self.context.queryCatalog()

    def get_phone(self,item):
         return item.getObject().phone

    def get_email(self,item):
         return item.getObject().email

    def get_pec(self,item):
         return item.getObject().pec

    def get_url(self,item):
         return item.getObject().absolute_url()
