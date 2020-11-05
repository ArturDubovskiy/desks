import { Button, makeStyles, Modal, Grid } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { TasksAreaProps } from '../interfaces/homePage'
import { TasksForm } from './TasksForm'
import { TasksTable } from './TasksTable'

const useStyles = makeStyles((theme) => ({
  modal: {
    top: '50%',
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    position: 'absolute',
    width: 400,
  },
  createBtn: {
    width: '100%',
  },
}))

export const TasksArea: FC<TasksAreaProps> = ({ tasks, createTask, toogleTask, deleteTask }) => {
  const [open, setOpen] = useState<boolean>(false)
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const sendHandler = (data: any): void => {
    setOpen(false)
    createTask(data)
  }

  return (
    <div>
      <Grid container spacing={3} direction="column">
        <Grid item lg={3} sm={4} xs={12}>
          <Button
            className={classes.createBtn}
            variant="outlined"
            color="primary"
            onClick={handleOpen}
          >
            Create Task
          </Button>
        </Grid>
        <Grid item xs={12}>
          {tasks.length ? <TasksTable toogleTask={toogleTask} onDeleteTask={deleteTask} tasks={tasks} /> : null}
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <TasksForm onSend={(data) => sendHandler(data)}></TasksForm>
        </div>
      </Modal>
    </div>
  )
}
