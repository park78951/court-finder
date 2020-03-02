export const searchInfo = {
  searchedCourts: [],
  isSearching: false,
  isError: false,
  totalCourts: null,
  currentPage: null,
  selectedCourt: null,
  mouseoverList: null,
  userInput: null,
  filterInput: {
    city: "",
    district: "",
  },
};

export const initUIToggleInfo = {
  isSidebarHidden: false,
  isOpenNicknameChanger: false,
};

export const userInfo = {
  userId: null,
  nickname: null,
  isLogginIn: false,
  isLoggedIn: false,
  isLogginOut: false,
  isUserMenuOpen: false,
  errorMsg: '',
};

export const initPosts = {
  isAddFormOpen: false,
  allReviews: [],
  myReview: null,
  currentPage: 1,
  allReviewError: null,
  myReviewError: null,
};

export const prevSearchItems = {};
export const prevSearchItem = {};