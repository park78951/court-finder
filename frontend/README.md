# Court Finder Frontend

## Tech
- Javascript (ES2015+)
- React Functional Components with Hooks
- Routing with react-router-dom (Previously)
- Next.js for Server Side Rendering (Currently)
- Styled-components for the css style
- Axios to get data asynchronously
- State Management by Hooks API with Context API (Previously)
- State Management by Redux with Redux Saga (Currently)
- Webpack and Babel to tranpile javascript codes and bundle modules
- Google Map API with react-google-maps/api library
- Authentication management with Kakao SDK (OAuth2.0)
- lodash

## Challenge
- SPA에서의 SSR과 CSR의 차이를 이해하고 Backend Server와의 통신을 고려해 AWS에 배포
  - SSR을 위한 Client Server 구축
  - 배포시 Backend와 Frontend서버를 SSR과 CSR에서 어떻게 통신할 것인지를 고려하였고 하나의 EC2에서 서로 다른 PORT를 사용하여 적용하기로 결정
- JSON Web Token을 사용한 인증 처리에서 현재 배포 상태와 쿠키의 흐름에 대한 이해
- Kakao 로그인 기능 추가를 위한 OAuth에 대한 이해

## Things done
- [x] Rendering 최적화(계속 진행 중)
- [x] 검색 필터기능 구현 (지역별)
- [x] useReducer와 useContext에서 Redux를 사용한 상태관리로 변경
- [x] Redux Saga를 사용한 비동기 데이터 통신 진행
- [x] 검색 List에 대한 Pagination 구현
- [x] 검색마다 가장 멀리있는 Marker의 거리에 따른 Map Center 조정
- [x] 검색 정보 클릭시 해당 위치로 zoom in 후 빠져나갈 때 zoom out 기능 추가
- [x] 검색 정보 클릭시 유저가 식별하기 쉽도록 해당 Marker만 변경
- [x] 기존 Client Side Rendering에서 Server Side Rendering으로 변경
- [x] Test Code 추가
- [x] 회원가입 & 로그인 기능 구현 (Kakao OAuth)

## Things to do
- [ ] 사진 및 유저 리뷰 추가 기능 구현
- [ ] 검색 필터기능 구현 (추천별)