#! /usr/bin/env bash

repo='deadmemories'
build='dist'

rm -rf $build/
vite build
git clone git@github.com:sstefanofm/$repo.git
mv $repo/.git* $build/
rm -rf $repo/
cp -rf README.md $build/
cd $build/
git add ./
git commit
cd ../
printf "\n\e[32mBuild is ready. cd into $build/ and push the changes :D\e[37m\n\n"