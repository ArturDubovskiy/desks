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
  setCurrentDesk,
} from '../actions/deskActions'
import { createTask, loadTasks } from '../actions/tasksActions'
import DeskForm from '../components/DeskForm'
import SelectForm from '../components/SelectForm'
import ErrorAlert from '../components/ErrorAlert'
import { DeskFormInterface, DeskRespItem } from '../interfaces/homePage'
import { TasksArea } from '../components/TasksArea'

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
  const [action, setAction] = useState<string>('')
  const currentDesk = useSelector((state: any) => state.desks.activeDesk)
  const desks = useSelector((state: any) => state.desks.desks)
  const tasks = useSelector((state: any) => state.tasks.tasks)
  const desksState = useSelector((state: any) => state.desks)

  useEffect(() => {
    dispatch(loadDesks())
  }, [dispatch])

  useEffect(() => {
    if (desks.length && !action) {
      dispatch(loadTasks(desks.slice(-1)[0].id))
    }
  }, [desks, dispatch, action])

  const toggleVisibility = (action: string): void => {
    setAction(action)
    visible === 'none' ? setVisible('block') : setVisible('none')
  }

  const createDeskHandler = (form: DeskFormInterface): void => {
    dispatch(createDesk(form))
  }

  const onDeskSelectHandler = (id: string) => {
    let desk = desks.find((el: DeskRespItem) => el.id === id)
    dispatch(setCurrentDesk(desk))
    dispatch(loadTasks(desk.id))
  }

  const closeFormHandler = (): void => {
    setVisible('none')
    dispatch(createDeskError(''))
  }

  const deleteDeskHandler = (): void => {
    dispatch(deleteDeskStart(currentDesk.id))
  }

  const editDeskHandler = (form: DeskFormInterface): void => {
    dispatch(editDeskStart({ id: currentDesk.id , ...form }))
  }

  const createTaskHandler = (data: any) => {
    dispatch(createTask({data, deskId: currentDesk.id}))
  }

  return (
    <div className="home-page-wrapper">
      <div className={classes.root}>
        <Grid container spacing={1} direction="column">
          {(desks.length && currentDesk) ? (
            <Grid item lg={3} sm={6} xs={12}>
              <SelectForm desks={desks} value={currentDesk.id} onSelectDesk={onDeskSelectHandler} />
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={4} xs={12}>
                <Button
                  className={classes.createBtn}
                  variant="outlined"
                  color="primary"
                  onClick={() => toggleVisibility('create')}
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
                      onClick={() => toggleVisibility('edit')}
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
                desk={currentDesk}
                loading={desksState.loading}
                editDesk={editDeskHandler}
                edit={action === 'edit' ? true : false}
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
            <TasksArea tasks={tasks} createTask={createTaskHandler}></TasksArea>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage
