import React from 'react'
import CustomDropDown from '../../lib/CustomDropDown';
import { 
  formOptionList, 
  defaultStyle,
} from '../../config';
import styled from 'styled-components';

const AdditionFormWrapper = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 15px;
  padding: 20px 50px;
  overflow: scroll;

  p {
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 20px 0 10px 0;
  }
  
  input {
    outline: 0;
    border-width: 0 0 2px;
    border-color: ${({ underlineColor }) => underlineColor ? underlineColor : '#D3D3D3' };
    width: 100%;
    height: 40px;
    font-size: 1.1rem;
    ::placeholder {
      color: #D0D0D0;
    }
  }

  .dropdown_input {
    display: flex;
    justify-content: space-between;

    input {
      width: 200px;
    }
  }
`

const PlaceAddition = () => {
  const { INDOOR_OR_OUTDOOR, PLAYER_LEVEL, TRANSPORTATION } = formOptionList;
  const { linearColor } = defaultStyle

  return (
    <AdditionFormWrapper underlineColor={ linearColor } >
      <h1>장소추가</h1>
      <form>
        <p>장소명</p>
        <input placeholder='ex) 해운대 농구코트' />
        <p>실내외 여부</p>
        <CustomDropDown optionValues={ INDOOR_OR_OUTDOOR } />
        <p>방문 농구인 Level</p>
        <CustomDropDown optionValues={ PLAYER_LEVEL } />
        <p>유/무료 여부</p>
        <input placeholder='ex) 유료' />
        <p>교통편</p>
        <div className='dropdown_input'>
          <CustomDropDown optionValues={ TRANSPORTATION } />
          <input placeholder='ex) 3004번 / 2호선' />
        </div>

      </form>
      
    </AdditionFormWrapper>
  )
}

export default PlaceAddition;