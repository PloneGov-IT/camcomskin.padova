# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import os

version = '1.0.0'

setup(name='camcomskin.padova',
      version=version,
      description="CCIAAPD Plone Theme",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?:action=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='web zope plone theme',
      author='RedTurtle Technology',
      author_email='sviluppoplone@redturtle.it',
      url='https://bitbucket.org/redturtle/camcomskin.padova',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['camcomskin'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          # -*- Extra requirements: -*-
          'collective.contentleadimage',
          'collective.editablemenu',
          'collective.portletpage',
          'Products.ContentWellPortlets == 4.3.0',
          'redturtle.portlet.collection',
          'redturtle.smartlink',
          'rer.portlet.advanced_static',
          'rer.portlet.er_navigation',
          'sc.social.like',
          'z3c.jbot',
          # Non metto come dipendenza direttamente pd.prenotazioni, perché
          # sennò non funziona l'override delle traduzioni, e z3c.pdftemplate
          # serve per l'override di una vista "prenotazione_print_pdf"
          'z3c.pdftemplate'
      ],
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
