import styled from 'styled-components';

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 100%;
  border: solid 1px #D3D3D3;
  background-color: white;

  & > button {
    outline: none;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .filter__types {
    margin: 0.2rem;
    height: 2.0rem;
    width: 4.8rem;
    border-radius: 20px;
  }

  .filter__dropdown {
    position: relative;
    height: 100%;
    width: 1.9rem;
    margin-right: 0.4rem;
    transform: ${({ filterFlag }) => filterFlag && 'rotate( 180deg )'};

    .filter__dropdown--icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .button__active {
    border: 2px solid black;
  }
`;

export default { MenuWrapper };