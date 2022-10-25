import React from 'react'
import useField from '../hooks/useField'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setNotification } from '../reducers/notificationReducer'
import userServices from '../services/user'

const Layout = styled.div`
  position: relative;
  width: 500px;
  min-width: 300px;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: collumn;
  inner-text: center;
`
const FormInnerDiv = styled.div`
  padding: 5px;
  text-align: right;
  > input {
    border: solid black;
    border-radius: 4px;
  }
`
const Button = styled.button`
  position: relative;
  background: white;
  border: solid black;
  border-radius: 4px;
`

const ChangePassword = ({ setVisible, display }) => {
  const dispatch = useDispatch()
  const oldPass = useField('password')
  const newPass1 = useField('password')
  const newPass2 = useField('password')

  const handleSubmit = async event => {
    event.preventDefault()
    if (newPass1.value !== newPass2.value) return dispatch(setNotification('passwords don\'t match', 10))
    try {
      const response = await userServices.updatePass({
        oldPass: oldPass.value,
        newPass: newPass2.value
      })
      dispatch(setNotification(response.message, 10))
      setVisible(false)
    } catch (error) {
      console.log(error)
      dispatch(setNotification('Password change failed.', 10))
    }

    oldPass.execute.clear()
    newPass1.execute.clear()
    newPass2.execute.clear()
  }

  return (
    <Layout display={display}>
      <form onSubmit={handleSubmit}>
        <FormInnerDiv>
          <b>Old Password: </b>
          <input {...oldPass} />
        </FormInnerDiv>
        <FormInnerDiv>
          <b>New Password: </b>
          <input {...newPass1} />
        </FormInnerDiv>
        <FormInnerDiv>
          <b>Retype New Password: </b>
          <input {...newPass2} />
        </FormInnerDiv>
        <FormInnerDiv>
          <Button type='submit'>Submit</Button>
        </FormInnerDiv>
      </form>
    </Layout>
  )
}

export default ChangePassword
