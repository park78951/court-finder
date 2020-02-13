#!/bin/sh

# package install
npm install --prefix /home/ec2-user/backend
npm install --prefix /home/ec2-user/frontend

# ssr server build & start
sudo npm run build --prefix /home/ec2-user/build/frontend
