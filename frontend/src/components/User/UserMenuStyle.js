import styled from 'styled-components';

const UserMenuWrapper = styled.div`
  position: absolute;
  right: -10px;
  margin-top: 1rem;
  width: 10rem;
  background-color: #F5F5F5;
  border-radius: 0.2rem;
  
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: #F5F5F5 transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -12.5px; 
    right: 15px; 
  }

  & > .popover-menu__contnent {
    padding: 0 1rem;
    cursor: pointer;

    & > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 2.3rem;
      font-size: 1rem;
      border-bottom: 1px solid #696969;

      & > div {
        display: flex;
        align-items: center;
      }
    }

    & > div:last-child {
      border: none;
    }
  }
`;

export default { UserMenuWrapper };