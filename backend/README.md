#Court Finder Backend

## Usage

### 환경 셋팅

* 아래 명령어를 통해 dependency 설치

* ~~~bash
  npm install
  ~~~

### 시작하기

* 개발 환경에서는 아래 명령어로 nodemon 실행

* ~~~bash
  npm run dev
  ~~~

* 배포 환경에서는 pm2 로 실행

* ~~~bash
  npm start
  ~~~



## Description

1. logger로 morgan 사용. 'NODE_ENV'가 production이면 combined 모드를 사용해서 자세한 로그 기록.
2. 'NODE_ENV'는 cross-env를 통해 동적 할당.