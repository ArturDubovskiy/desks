import { Button } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDesks } from '../actions/homeActions'
import SelectForm from '../components/SelectForm'

const HomePage = () => {
  const [visible, setVisible] = useState('none')
  const desks = useSelector((state: any) => state.desks)
  const dispatch = useDispatch()
  const result = useSelector((state) => console.log(state))

  useEffect(() => {
    dispatch(loadDesks())
  }, [loadDesks])

  const toggleVisibility = () => {
    visible === 'none' ? setVisible('block') : setVisible('none')
  }

  return (
    <div className="home-page-wrapper">
      <Button variant="outlined" color="primary" onClick={toggleVisibility}>
        Create desk
      </Button>
      <SelectForm></SelectForm>
      <div className="create-desk-form" style={{ display: `${visible}` }}>
        Form stub
      </div>
      <div>
        {/* <ul>
          {desks.map((desk: any) => {
            return <li key={desk.id}>{desk.name}</li>
          })}
        </ul> */}
      </div>
    </div>
  )
}

export default HomePage
