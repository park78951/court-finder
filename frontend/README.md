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
- lodash

## Challenge
- Lazy Loading 적용시 `<Suspense>` 컴포넌트의 `fallback` props에 loader를 적용시켰을 때 기존의 loader와 충돌 발생 문제 대응 [issue#14](https://github.com/park78951/court-finder/issues/7)
- Google Map API를 사용하면서 UX 개선 방안을 모색
  - 코트 정보 배열 List를 기반으로 렌더링 된 Marker(API Component) 중 선택한 위치의 Marker만 변경하고 다른 Marker들의 Re-rendering을 막고자 하는 방법에 대한 고민 (Re-rendring시 모든 Marker 깜빡이는 문제 해결)
  - Google Map API에서 Marker간의 거리 계산 및 거리에 따른 Map Center 및 Zoom 변경.
- Infinite Scroll과 Pagination 중 **Pagination UI** 구현
  - 현재 서비스의 특성에 맞는 UI에 대해 고민하며 Infinite Scroll을 통한 데이터 추가 누적이 필요 없다고 판단하여 Pagination 선택 
  - 최대한 다른 컴포넌트들과의 의존성을 줄이기 위해 설계시 전달받아야 할 props 데이터와 자체적으로 사용해야 할 Hooks API에 대해 고민
  - 불규칙적인 페이지 갯수에 현재 페이지를 표시하기 위한 방법에 대한 고민. 현재는 동적으로 `nth-child`를 설정해 스타일을 적용.
  - 재 검색이 이뤄졌을 때 Pagination을 초기화 하는 방법으로 useEffect를 통한 Lifecycle과의 관계를 고민.

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

## Things to do
- [ ] 회원가입 & 로그인 기능 구현
- [ ] 사진 및 유저 리뷰 추가 기능 구현
- [ ] Test Code 추가
- [ ] 검색 필터기능 구현 (추천별)