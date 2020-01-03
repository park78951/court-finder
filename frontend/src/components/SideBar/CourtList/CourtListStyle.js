import styled from 'styled-components';
import { flexBox } from '../../../styles';

const CourtListWrapper = styled.div`
  border: solid 1px #D3D3D3;
  ${ flexBox.flex(1) };
  overflow-y: scroll;

  & > a {
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 5px;
    height: 50%;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
  }

  .info-window {
    margin-bottom: 2rem;
    .info-window__contents {
      margin: 0;
      padding: 0;
      font-size: 1.1rem;
      font-weight: bold;
    }
  }

`;

export default { CourtListWrapper };