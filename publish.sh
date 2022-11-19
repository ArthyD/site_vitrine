#!/bin/sh

git checkout -b gh-pages
ng build --output-path docs --base-href /site_vitrine/
git add --all
git commit -m "automatic commit"
git push