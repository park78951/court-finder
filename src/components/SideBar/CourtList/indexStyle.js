import styled from 'styled-components';

const CourtListWrapper = styled.div`
  flex: 1;
  border: solid 1px #D3D3D3;
  overflow: hidden;
  height: auto;

  & > a {
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }

  &:hover {
    overflow-y: scroll;

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
  }
`;

export default { CourtListWrapper };