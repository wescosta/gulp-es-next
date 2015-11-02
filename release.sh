#!/bin/bash

VERSION=$(readJsonProp 'package.json' 'version')

echo $VERSION

function build {
	echo "Building app"
	npm run build
}

function publish {
	echo "Publishing into npm"
	npm publish ./dist
}

function tag {
	echo "Tagging in git"

	TAG_NAME="v$VERSION"
	echo $TAG_NAME
	git tag "$TAG_NAME" -m "Release $TAG_NAME" && git push origin "$TAG_NAME" && git tag -l
}

function release {
	build
	publish
	tag
}

# readJsonProp(jsonFile, property)
# - restriction: property needs to be on a single line!
function readJsonProp {
  echo $(sed -En 's/.*"'$2'"[ ]*:[ ]*"(.*)".*/\1/p' $1)
}

release