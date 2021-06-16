FROM python:3.8.5

ENV PYTHONUNBUFFERED 1

# Install 
RUN apt-get -y update && \
    apt-get -y upgrade && \
    apt-get -y install cmake libpq-dev && \
    pip -q install pipenv

# Checkout sourcecode
COPY . /emwiki/
WORKDIR /emwiki
RUN pipenv sync
ENTRYPOINT ["sh", "/emwiki/deploy/entrypoint.sh"]
