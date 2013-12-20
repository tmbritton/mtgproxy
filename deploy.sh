#!/bin/bash
# Deploy Grunt-built dist directory to gh-pages branch.

git subtree push --prefix dist origin gh-pages
