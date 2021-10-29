#!/bin/sh

start=`date +%s`
# install dependencies
export BUILD="BUILD"
yarn install
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Dependencies were installed"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Dependencies could not be installed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

# prepare the build
yarn build:svg
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "SVG's created"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "SVG's failed!!!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

# build the library for exporting
yarn build
if [ $? -eq 0 ]
then
    echo "**********************************************************"
    echo "Library has been built"
    echo "**********************************************************"
else
    echo "**********************************************************"
    echo "Library build failed!" >&2
    echo "**********************************************************"
    cat ../yarn-error.log
    exit 1
fi

end=`date +%s`
echo Execution time was `expr $end - $start` seconds.
