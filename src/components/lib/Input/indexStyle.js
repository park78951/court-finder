import styled from 'styled-components';

const CustomInput = styled.input`
  outline: 0;
  border-width: 0 0 2px;
  border-color: #D3D3D3;
  width: ${({ size }) => size === 'medium' ? '50%' : '100%'};
  height: 40px;
  font-size: 1.1rem;
  ::placeholder {
    color: #D0D0D0;
  }
`;

CustomInput.defaultProps = {
  type: 'text'
};

export default { CustomInput };