#!/bin/sh

# package install
npm install --prefix ./backend
npm install --prefix ./frontend

# ssr server build & start
npm start --prefix ./frontend