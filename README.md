# Court Finder Korea
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
![github Readme](https://user-images.githubusercontent.com/37759759/71223442-5d043c00-2317-11ea-8646-8d174857a531.gif)

## Introduction
네이버, 구글, 카카오맵에 농구장을 쳐도 내가 아는 농구장은 대부분 나오지 않았습니다. 뿐만 아니라, 실내 농구장을 사용하고 싶은 유저들은 정보를 얻기 위해 주변인이나 카페의 정보를 샅샅이 뒤져 일일히 전화해야만 하는 불편함이 싫었습니다. 

Court Finder Korea를 만든 목적은 이러한 불편함을 해소하기 위함입니다. 쉽게 농구장을 찾고 유저들과 농구장의 정보를 공유하여 목적에 맞는 농구를 할 수 있는 서비스를 제공하고 싶습니다.

## Features
- 서울열린데이터광장에서 제공하는 데이터를 기반으로 서울시에 한해 농구장 검색 가능
  - 현재 필터 가능 부분: 지역별 (데이터 증가에 따른 추후 필터 기능 추가 예정)
  - 특정 명칭을 입력하면 관련 명칭 또는 주소의 농구장 검색 가능
  - 예) 한강, 용산 등
  - 현재는 client에 저장된 json 파일로 데이터를 가져오고 있지만, 추후 Backend 서버 구축 후 API를 통한 data fetching 예정
- Map에서 해당 위치를 Marker로 확인 가능
- 농구장 상세 정보 제공 (이름, 주소, 전화번호, Website 주소 등)

## Tech
- Javascript (ES2015+)
- React Hooks
- Routing with react-router-dom
- Styled-components for the css style
- State Management by Hooks API with Context API (Before Modification)
- State Management by Redux with Redux Saga
- Webpack and Babel to tranpile javascript codes and bundle modules

## Challenge
- UI Component의 재사용을 위한 설계 및 구현
- UX 향상을 위한 검색 요청 중 Loader Component, 데이터 요청 실패시 Refetch Component 구현
- Lazy Loading 적용시 `<Suspense>` 컴포넌트의 `fallback` props에 loader를 적용시켰을 때 기존의 loader와 충돌 발생 문제 대응 [issue#14](https://github.com/park78951/court-finder/issues/7)

## Things to do
- [ ] Express를 사용한 서버 연결
- [ ] DB를 사용한 유저 베이스 장소 추가 기능 구현
- [ ] 로그인 기능 구현
- [ ] 사진 및 유저 리뷰 추가 기능 구현
- [x] 검색 필터기능 구현 (계속 진행 중)
- [x] Rendering 최적화(계속 진행 중)
- [ ] Test Code 추가
- [x] Redux를 사용한 상태관리로 변경
- [x] Redux Saga를 사용한 상태관리 중 비동기처리 진행

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/park78951"><img src="https://avatars2.githubusercontent.com/u/37759759?v=4" width="100px;" alt=""/><br /><sub><b>Sangkyu Park</b></sub></a><br /><a href="https://github.com/park78951/court-finder/commits?author=park78951" title="Code">💻</a> <a href="#content-park78951" title="Content">🖋</a> <a href="#ideas-park78951" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!