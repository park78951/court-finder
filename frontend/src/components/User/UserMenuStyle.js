import styled from 'styled-components';
import { defaultTheme } from '@styles';

const UserMenuWrapper = styled.div`
  position: absolute;
  right: -10px;
  margin-top: 1rem;
  width: 10rem;
  background-color: ${defaultTheme.BUTTON_BACKGROUND_FIRST};
  border-radius: 0.2rem;
  
  &:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 16px 20px 17.5px;
    border-color: ${defaultTheme.BUTTON_BACKGROUND_FIRST} transparent;
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
      border-bottom: 1px solid ${defaultTheme.BORDERLINE_SECOND};

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