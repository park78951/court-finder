#!/bin/sh

# package install
npm install --prefix /home/ec2-user/backend
npm install --prefix /home/ec2-user/frontend

# ssr server build & start
npm start --prefix /home/ec2-user/frontend
