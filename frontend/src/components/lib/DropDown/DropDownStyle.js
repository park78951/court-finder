import styled from 'styled-components';

const DropDown = styled.select`
  height: 2.5rem;
  width: ${({ size }) => size === 'large' ? '12rem' : '4rem'};
  border-radius: 5px;
  font-weight: bolder;
  font-size: 1rem;
  text-indent: 0.3rem;
`;

export default { DropDown };