# Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
# See License.txt for license information.
FROM ubuntu:14.04

#
# Install SQL
#

RUN groupadd -r mysql && useradd -r -g mysql mysql
RUN apt-get update
RUN apt-get install -y openssl curl emacs24-nox perl
RUN apt-key adv --keyserver pool.sks-keyservers.net --recv-keys A4A9406876FCBD3C456770C88C718D3B5072E1F5
ENV MYSQL_MAJOR 5.6
ENV MYSQL_VERSION 5.6.25
RUN echo "deb http://repo.mysql.com/apt/debian/ wheezy mysql-${MYSQL_MAJOR}" > /etc/apt/sources.list.d/mysql.list
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get -y install mysql-client

WORKDIR /mattermost

# Copy over files
COPY mattermost.tar.gz /
RUN tar -zxvf /mattermost.tar.gz --strip-components=1
ADD config_docker.json /
ADD docker-entry.sh /

RUN chmod +x /docker-entry.sh
ENTRYPOINT /docker-entry.sh

# Create default storage directory
RUN mkdir /mattermost-data/

# Ports
EXPOSE 80
