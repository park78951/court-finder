#!/bin/sh

# package install
npm install --prefix /home/ec2-user/build/backend
npm install --prefix /home/ec2-user/build/frontend

# ssr server build & start
sudo npm run build --prefix /home/ec2-user/build/frontend
