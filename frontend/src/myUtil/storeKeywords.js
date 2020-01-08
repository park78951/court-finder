const storeKeywords = (keywordType, state, setState) => (
  ({ target }) => {
    const value = target.value === '선택해주세요' ? '' : target.value;
    
    setState({
      ...state,
      [keywordType]: value
    });
  }
);

export default storeKeywords;