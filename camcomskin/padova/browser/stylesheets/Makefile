SCSS=./sass/cciaapd.scss
SCSSPR=./sass/cciaapd_print.scss
CSS=./cciaapd.css
CSSPR=./cciaapd_print.css
OPTIONS=--sourcemap=none --precision 10
MINI=-t compressed

all: css print

allmini: cssmini printmini

css:
	sass $(OPTIONS) $(SCSS) $(CSS)

print:
	sass $(OPTIONS) $(SCSSPR) $(CSSPR)

cssmini:
	sass $(OPTIONS) $(MINI) $(SCSS) $(CSS)

printmini:
	sass $(OPTIONS) $(MINI) $(SCSSPR) $(CSSPR)
