// Style your components here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const MemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  width: 90%;
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Open Sans';
`

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  width: 500px;
  padding: 5px 10px;
  border: 1px solid #7e858e;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const Label = styled.label`
  color: #7e858e;
  font-weight: 500;
  font-size: 16px;
`

export const Select = styled.select`
  width: 100%;
  padding: 5px 10px;
  margin-top: 10px;
`

export const ButtonContainer = styled.div`
  margin-top: 10px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px 17px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`

export const GeneratedMeme = styled.div`
  background-image: url(${props => props.backgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  width: 500px;
  height: 300px;
`

export const Paragraph = styled.p`
  font-size: ${props => props.fontStyle}px;
  color: #ffffff;
  font-family: 'Open Sans';
`

export const Container = styled.div`
 width;900px;
`

export const FormContainer = styled.div``
