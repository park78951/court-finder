#!/bin/sh

sudo npx next build

sudo chmod -R 777 ./.next
sudo chmod -R 777 ./node_modules
sudo chmod -R 777 ./log
