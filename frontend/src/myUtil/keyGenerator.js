const keyGenerator = () => {
  let increasingNum = 0;
  return (data) => {
    increasingNum++;
    return `${data}_${Date.now()}_${increasingNum}`;
  };
};

export default keyGenerator();