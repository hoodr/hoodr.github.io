#! /bin/bash

# Shell script to automate build pipeline stuff

echo "Running build"

git checkout react-source
git pull origin react-source
npm install
npm run build
git checkout master

CURRENT_BUILD="$(($(head -n 1 current_build.txt) + 1))"

echo "$CURRENT_BUILD" > 'current_build.txt'

# build/{month}-{day}-{year}/{build-number}
DATE=$(date +"%m-%d-%Y")
BRANCH_NAME="build/${DATE}/$CURRENT_BUILD"

echo "checking out new build branch: $BRANCH_NAME"

git checkout -b "$BRANCH_NAME"

declare -a arr=(
    "asset-manifest.json"
    "index.html"
    "favicon.ico"
    "logo512.png"
    "logo192.png"
    "manifest.json"
    "robots.txt"
)

for i in "${arr[@]}"
do
   echo "deleting $i"
   rm "$i"
done

echo "Removing existing static dir"
rm -r static/

# move all files in build one level up
echo "Copying files from new build"
cd build && mv static ../ && mv * ../

echo "Success"

# move back to top level and remove empty build dir
echo "Removing build"
cd ../ && rmdir build

# Add files, commit, and push to branch
echo "Adding files and building commit"
git add .
COMMIT_MSG=Build
git commit -m "Build#$CURRENT_BUILD $DATE"

echo "Pushing commit to origin $BRANCH_NAME"
git push origin "$BRANCH_NAME"

echo "Success... exiting"
exit 0
