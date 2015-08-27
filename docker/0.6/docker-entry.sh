#!/bin/bash
# Copyright (c) 2015 Spinpunch, Inc. All Rights Reserved.
# See License.txt for license information.

mkdir -p web/static/js

echo "127.0.0.1 dockerhost" >> /etc/hosts
/etc/init.d/networking restart

# evaluate env vars into our config
perl -p -e 's/\$\{([^}]+)\}/defined $ENV{$1} ? $ENV{$1} : $&/eg' < /config_docker.json > /config_grnds.json

echo starting platform
cd /mattermost/bin
./platform -config=/config_grnds.json
