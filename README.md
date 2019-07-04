# Ionic monorepo demo

## Requirements

This demo supposes you're already able to launch Ionic projects.

- Node 10
- Global up to date `ionic` CLI: `npm install ionic -g`
- [Android setup](https://ionicframework.com/docs/installation/android)
- [iOS setup](https://ionicframework.com/docs/installation/ios)

## Getting started

- `https://github.com/cyrilletuzi/ionic-monorepo`
- `cd ionic-monorepo`
- `npm install`

## Running `hello-app` project

- `npm run start:hello`

It should display:
- "shared-tools works" (checks the lib is working)
- an Ionic button (checks Ionic is working)
- "Welcome to hello-app!" (checks Angular is working)
- no Cordova integration in this project

## Running `world-app` project

- Run
  - browser: `npm run start:world`
  - Android: `npm run start:world:android`
  - iOS: `npm run start:world:ios`

- Build:
  - browser: `npm run build:world`
  - Android: `npm run build:world:android`
  - iOS: `npm run build:world:ios`

Be sure to add `--project world-app` to any Ionic command you run directly. 

It should display:
- "shared-tools works" (checks the lib is working)
- an Ionic button (checks Ionic is working)
- "Welcome to hello-app!" (checks Angular is working)
- on Android/iOS: a splash screen when loading (checks Cordova is working)

## How to reproduce

You can see the steps by following
[the commits](https://github.com/cyrilletuzi/ionic-monorepo/commits/master).

