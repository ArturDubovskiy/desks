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
import { createTask, deleteTaskStart, loadTasks, toggleTaskStatus } from '../actions/tasksActions'
import DeskForm from '../components/DeskForm'
import SelectForm from '../components/SelectForm'
import ErrorAlert from '../components/ErrorAlert'
import {
  Desk,
  DeskFormInterface,
  DeskRespItem,
  DesksState,
  StoreState,
} from '../interfaces/interfaces'
import { TasksArea } from '../components/TasksArea'
import { Task } from '../interfaces/interfaces'

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
  const currentDesk = useSelector<StoreState, DeskRespItem | undefined>(
    (state) => state.desks.activeDesk
  )
  const tasks = useSelector<StoreState, Task[]>((state) => state.tasks.tasks)
  const desksState = useSelector<StoreState, DesksState>((state) => state.desks)

  useEffect(() => {
    dispatch(loadDesks())
  }, [dispatch])

  useEffect(() => {
    if (desksState.desks.length && !action) {
      dispatch(loadTasks(desksState.desks.slice(-1)[0].id))
    }
  }, [desksState, dispatch, action])

  const toggleVisibility = (action: string): void => {
    setAction(action)
    visible === 'none' ? setVisible('block') : setVisible('none')
  }

  const createDeskHandler = (form: DeskFormInterface): void => {
    dispatch(createDesk(form))
  }

  const onDeskSelectHandler = (id: number) => {
    const desk = desksState.desks.find((el: Desk) => el.id === id)
    if (desk) {
      dispatch(loadTasks(desk.id))
    }
    dispatch(setCurrentDesk(desk))
  }

  const closeFormHandler = (): void => {
    setVisible('none')
    dispatch(createDeskError(''))
  }

  const deleteDeskHandler = (): void => {
    if (currentDesk) {
      dispatch(deleteDeskStart(currentDesk.id))
    }
  }

  const editDeskHandler = (form: DeskFormInterface): void => {
    if (currentDesk) {
      dispatch(editDeskStart({ id: currentDesk.id, ...form }))
    }
  }

  const createTaskHandler = (data: any): void => {
    if (currentDesk) {
      dispatch(createTask({ data, deskId: currentDesk.id }))
    }
  }

  const deleteTaskHandler = (id: number): void => {
    if (currentDesk) {
      dispatch(deleteTaskStart({ deskId: currentDesk.id, taskId: id }))
    }
  }

  const toogleTaskDoneHandler = (task: Task): void => {
    if (currentDesk) {
      dispatch(
        toggleTaskStatus({
          deskId: currentDesk.id,
          taskId: task.id,
          body: { isDone: !task.isDone },
        })
      )
    }
  }

  return (
    <div className="home-page-wrapper">
      <div className={classes.root}>
        <Grid container spacing={1} direction="column">
          {desksState.desks.length && currentDesk ? (
            <Grid item lg={3} sm={6} xs={12}>
              <SelectForm
                desks={desksState.desks}
                value={currentDesk.id}
                onSelectDesk={onDeskSelectHandler}
              />
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
              {desksState.desks.length ? (
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
            <TasksArea
              tasks={tasks}
              createTask={createTaskHandler}
              toogleTask={toogleTaskDoneHandler}
              deleteTask={deleteTaskHandler}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage
