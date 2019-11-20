# Court Finder Korea


## Introduction
네이버, 구글, 카카오맵에 농구장을 쳐도 내가 아는 농구장은 대부분 나오지 않았습니다. 뿐만 아니라, 실내 농구장을 사용하고 싶은 유저들은 정보를 얻기 위해 주변인이나 카페의 정보를 샅샅이 뒤져 일일히 전화해야만 하는 불편함이 싫었습니다. 

Court Finder Korea를 만든 목적은 이러한 불편함을 해소하기 위함입니다. 쉽게 농구장을 찾고 유저들과 농구장의 정보를 공유하여 목적에 맞는 농구를 할 수 있는 서비스를 제공하고 싶습니다.

## Features
- 서울열린데이터광장에서 제공하는 데이터를 기반으로 서울시에 한해 농구장 검색 가능
- Map에서 해당 위치를 Marker로 확인 가능
- 농구장 상세 정보 제공 (이름, 주소, 전화번호, Website 주소 등)

## Tech
- Javascript (ES2015+)
- React Hooks
- State Management by Hooks API with Context API (Before Modification)
- Routing with react-router-dom
- Styled-components for the css style
- State Management by Redux with Redux Thunk (Currently)

## Challenge
- UI Component의 재사용을 위한 설계 및 구현
- UX 향상을 위한 검색 요청 중 Loader Component, 데이터 요청 실패시 Refetch Component 구현

## Things to do
- [ ] Express를 사용한 서버 연결
- [ ] DB를 사용한 유저 베이스 장소 추가 기능 구현
- [ ] 로그인 기능 구현
- [ ] 사진 및 유저 리뷰 추가 기능 구현
- [ ] 검색 필터기능 구현
- [ ] Rendering 최적화
- [ ] Test Code 추가
- [x] Redux를 사용한 상태관리로 변경
