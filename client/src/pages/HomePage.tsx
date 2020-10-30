import { Button, Grid, makeStyles, Paper, Theme } from '@material-ui/core'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { Store } from 'redux'
import { addDesk, loadDesks } from '../actions/deskActions'
import DeskForm from '../components/DeskForm'
import SelectForm from '../components/SelectForm'
import { IDeskForm, IDeskFormProps } from '../interfaces/homePage'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  createBtn: {
    width: '100%',
  },
}))

const HomePage: FC = () => {
  const [visible, setVisible] = useState('none')
  const desks = useSelector((state: any) => state.desks.desks)
  const dispatch = useDispatch()
  const classes = useStyles()
  const [desk, setDesk] = useState('')
  const state = useSelector((state: any) => state)

  useEffect(() => {
    dispatch(loadDesks())
  }, [loadDesks])

  const toggleVisibility = (): void => {
    visible === 'none' ? setVisible('block') : setVisible('none')
  }

  const createDesk = (form: IDeskForm): void => {
    dispatch(addDesk(form))
    // Check for errors on creating new desk if ok
    setDesk(desks.slice(-1)[0].id)
  }

  return (
    <div className="home-page-wrapper">
      <div className={classes.root}>
        <Grid container spacing={3} direction="column">
          {desks?.length && (
            <Grid item xs={6}>
              <SelectForm desks={desks} value={desk}></SelectForm>
            </Grid>
          )}
          <Grid item lg={3} sm={6} xs={12}>
            <Button
              className={classes.createBtn}
              variant="outlined"
              color="primary"
              onClick={toggleVisibility}
            >
              Create desk
            </Button>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: `${visible}` }}>
              <DeskForm loading={false} createDesk={createDesk}></DeskForm>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div>
              <ul>
                {desks.map((desk: any) => {
                  return <li key={desk.id}>{desk.name}</li>
                })}
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage
