#!/bin/sh
if [ $1 = "dev" -o $1 = "prod1" ]; then
    # setup
    apt-get -y update
    apt-get -y upgrade
    apt-get -y install cmake libpq-dev nkf unzip 
    pip -q install pipenv
    download_mizarfiles
    git clone -b ${COMMENT_COMMIT_BRANCH} ${COMMENT_REPOSITORY_URL} ${MIZFILE_DIR}/emwiki-contents
    pipenv sync
    pipenv run python ./emwiki/manage.py build_htmlizedmml
    pipenv run python ./emwiki/manage.py build_mmlreference
    pipenv run python ./emwiki/manage.py build_search_data

fi

if [ $1 = "dev" -o $1 = "prod2" ]; then
    # データベースが立った後の処理
    pipenv run python ./emwiki/manage.py migrate
    pipenv run python ./emwiki/manage.py load_articles
    pipenv run python ./emwiki/manage.py load_symbols
fi


