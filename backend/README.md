#Court Finder Backend

## Local에서 사용 방법

### 환경 설정

* 아래 명령어를 통해 dependency 설치

* ~~~bash
  npm install
  ~~~
  
* MySQL 설치

  * 윈도우는 https://dev.mysql.com/downloads/installer 에서 다운로드 받아서 설치

* base directory에 .env 생성해서 MYSQL_PASSWORD 환경변수 설정

  ~~~json
  MYSQL_PASSWORD=password
  ~~~

* Mysql 접속해서 courtFinder database 생성

* ~~~mysql
  CREATE SCHEMA courtFinder;
  ~~~

* 콘솔창에서 아래 명령어를 입력.

* ~~~bash
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
  ~~~

### 서버 실행 하기

* 개발 환경에서는 아래 명령어로 nodemon 실행

* ~~~bash
  npm run dev
  ~~~

* 배포 환경에서는 pm2 로 실행

* ~~~bash
  npm start
  ~~~

### API docs

* 서버 실행 상태에서 localhost:3000/docs로 이동

## Description

1. logger로 morgan 사용. 'NODE_ENV'가 production이면 combined 모드를 사용해서 자세한 로그 기록.
2. 'NODE_ENV'는 cross-env를 통해 동적 할당.
3. ORM 은 sequelize 를 사용. 추후 migration을 위해 sequelize-cli에 맞는 database 환경 구축.
4. 초기 database는 기존에 사용하던 서울 농구장 정보를 토대로 만듬.
5. 농구장 데이터 확장시 city table 생성하여 연결할 예정.
6. paranoid option을 주어서 database backup 환경 구축.

7. swagger 를 통한 api docs 공유, server test 도 swagger로 해볼까 고민중.