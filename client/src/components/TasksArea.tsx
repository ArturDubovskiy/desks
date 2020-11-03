import { Button, makeStyles, Modal, Grid } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { TasksAreaProps } from '../interfaces/homePage'
import { TasksForm } from './TasksForm'

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

export const TasksArea: FC<TasksAreaProps> = ({ tasks, createTask }) => {
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
      <Grid container spacing={1} direction="column">
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
          <ul>
            {tasks.length
              ? tasks.map((task: any) => {
                  return <li key={task.id}>{task.name}</li>
                })
              : null}
          </ul>
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
