import { Button, Grid, makeStyles, Theme } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createDesk,
  createDeskError,
  deleteDeskStart,
  loadDesks,
  deleteDeskError,
  editDeskStart,
} from '../actions/deskActions'
import { loadTasks } from '../actions/tasksActions'
import DeskForm from '../components/DeskForm'
import SelectForm from '../components/SelectForm'
import ErrorAlert from '../components/ErrorAlert'
import { DeskFormInterface, DeskRespItem } from '../interfaces/homePage'

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
  const dispatch = useDispatch()
  const classes = useStyles()
  const [visible, setVisible] = useState<string>('none')
  const [edit, setEdit] = useState<boolean>(false)
  const [deskID, setDeskID] = useState<string>('')
  const [desk, setDesk] = useState(null)
  const desks = useSelector((state: any) => state.desks.desks)
  const tasks = useSelector((state: any) => state.tasks.tasks)
  const desksState = useSelector((state: any) => state.desks)

  useEffect(() => {
    dispatch(loadDesks())
    // Hadrcoded value for test functionality
    dispatch(loadTasks(45))
  }, [dispatch])

  useEffect(() => {
    if (desks.length) {
      setDeskID(desks.slice(-1)[0].id)
      setDesk(desks.slice(-1)[0])
    }
  }, [desks])

  const toggleVisibility = (edit: boolean): void => {
    setEdit(edit)
    visible === 'none' ? setVisible('block') : setVisible('none')
  }

  const createDeskHandler = (form: DeskFormInterface): void => {
    dispatch(createDesk(form))
  }

  const onDeskSelectHandler = (id: string) => {
    setDeskID(id)
    let desk = desks.find((el: DeskRespItem) => el.id === id)
    setDesk(desk)
  }

  const closeFormHandler = (): void => {
    setVisible('none')
    dispatch(createDeskError(''))
  }

  const deleteDeskHandler = (): void => {
    dispatch(deleteDeskStart(deskID))
    setDeskID(desks.slice(-1)[0].id)
  }

  const editDeskHandler = (form: DeskFormInterface): void => {
    dispatch(editDeskStart({ id: deskID, ...form }))
  }

  return (
    <div className="home-page-wrapper">
      <div className={classes.root}>
        <Grid container spacing={1} direction="column">
          {desks.length ? (
            <Grid item lg={3} sm={6} xs={12}>
              <SelectForm desks={desks} value={deskID} onSelectDesk={onDeskSelectHandler} />
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={4} xs={12}>
                <Button
                  className={classes.createBtn}
                  variant="outlined"
                  color="primary"
                  onClick={() => toggleVisibility(false)}
                >
                  Create desk
                </Button>
              </Grid>
              {desks.length ? (
                <>
                  <Grid item lg={3} sm={4} xs={12}>
                    <Button
                      className={classes.createBtn}
                      variant="outlined"
                      color="primary"
                      onClick={() => toggleVisibility(true)}
                    >
                      Edit desk
                    </Button>
                  </Grid>
                  <Grid item lg={3} sm={4} xs={12}>
                    <Button
                      className={classes.createBtn}
                      variant="outlined"
                      color="primary"
                      onClick={deleteDeskHandler}
                    >
                      Delete desk
                    </Button>
                  </Grid>
                </>
              ) : null}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div style={{ display: `${visible}` }}>
              <DeskForm
                desk={desk}
                loading={desksState.loading}
                editDesk={editDeskHandler}
                edit={edit}
                createDesk={createDeskHandler}
                error={desksState.errorCreateDesk}
                close={closeFormHandler}
              />
            </div>
          </Grid>
          {desksState.errorDeleteDesk ? (
            <ErrorAlert
              error={desksState.errorDeleteDesk}
              onClose={() => dispatch(deleteDeskError(''))}
            />
          ) : null}
          <Grid item xs={12}>
            <div>
              <ul>
                {desks.length
                  ? desks.map((desk: DeskRespItem) => {
                      return <li key={desk.id}>{desk.name}</li>
                    })
                  : null}
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage
