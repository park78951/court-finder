import styled from 'styled-components';

const CustomInput = styled.input`
  position: relative;
  outline: 0;
  border: 1px solid #D3D3D3;
  width: ${({ size }) => size === 'medium' ? '48%' : '100%'};
  height: 3rem;
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