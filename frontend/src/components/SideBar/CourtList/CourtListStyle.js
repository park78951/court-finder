import styled from 'styled-components';

const CourtListWrapper = styled.div`
  & > a {
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }
`;

export default { CourtListWrapper };