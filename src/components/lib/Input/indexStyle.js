import styled from 'styled-components';

const CustomInput = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: #D3D3D3;
  width: ${({ size }) => size === 'medium' ? '48%' : '100%'};
  height: 40px;
  font-size: 1.1rem;
  padding-left: 10px;
  ::placeholder {
    color: #D0D0D0;
  }
`;

CustomInput.defaultProps = {
  size: 'large'
};

export default { CustomInput };