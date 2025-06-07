#!/usr/bin/env bash

# copy the config.yml to the host if it doesn't exist yet
if test -f /conf/config.yml; then
  cp /conf/config.yml /vroom-express/config.yml
else
  cp /vroom-express/config.yml /conf/config.yml
fi

# Create access.log if it doesn't exist
if ! test -f /conf/access.log; then
  touch /conf/access.log
fi

# 👉 Starte VROOM direkt (nicht npm/express)
vroom -c /conf/config.yml --bind 0.0.0.0
