export const searchInfo = {
  searchedCourts: [],
  isSearching: false,
  isError: false,
  userInput: null,
  totalCourts: null,
  currentPage: null,
};

export const selectionInfo = {
  selectedCourt: null,
  listOverCourt: null,
};

export const additionInfo = {
  addedInfo:{}
};

export const initUIToggleInfo = {
  isSidebarHidden: false,
  courtAdditionFlag: false,
};

export const initFilterInfo = {
  filterInput: {}
};

export const initSubmitList = {
  curPage: 1,
  locationName: null,
  web: null,
  phone: null,
  feeAmount: {
    amount: null,
    time: null
  },
  indoorOutdoor: null,
  availableTime: {
    open: null,
    close: null
  },
  transportation: {
    method: null,
    detail: null,
    stop: null
  },
  parkingLot: null,
  tags: []
};

export const prevSearchItems = {};
export const prevSearchItem = {};