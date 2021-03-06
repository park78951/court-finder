export const courtState = {
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

export const uiToggler = {
  isSidebarHidden: false,
  isOpenNicknameChanger: false,
  isAddReviewFormOpen: false,
  isUserMenuOpen: false,
  isDeleteReviewModalOpen: false,
  isModalOpen: false,
};

export const userState = {
  userId: null,
  nickname: null,
  isLoggingIn: false,
  isLoggedIn: false,
  isLogginOut: false,
  errorMsg: '',
};

export const reviewState = {
  allReviews: [],
  myReview: null,
  currentPage: 1,
  allReviewError: null,
  myReviewError: null,
  uploadReviewError: null,
  deleteReviewError: null,
  hasMoreReviews: false,
  isLoading: false,
};