import styled from 'styled-components';
import { defaultTheme } from '@styles';

const CustomInput = styled.input`
  position: relative;
  outline: 0;
  border: 1px solid ${defaultTheme.BORDERLINE};
  width: ${({ size }) => size === 'medium' ? '48%' : '100%'};
  height: 3rem;
  font-size: 1.1rem;
  padding-left: 10px;
  ::placeholder {
    color: ${defaultTheme.EXPLANATION};
  }
`;

CustomInput.defaultProps = {
  size: 'large'
};

export default { CustomInput };