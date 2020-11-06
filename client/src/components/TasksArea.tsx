import { Button, makeStyles, Modal, Grid } from '@material-ui/core'
import React, { FC, useState } from 'react'
import { TasksAreaProps } from '../interfaces/interfaces'
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

export const TasksArea: FC<TasksAreaProps> = ({
  tasks,
  createTask,
  toogleTask,
  deleteTask,
  editTask,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [formData, setFormData] = useState({})
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setFormData({})
    setOpen(false)
  }

  const sendHandler = (data: any, edit: boolean): void => {
    setOpen(false)
    setFormData({})
    if (edit) {
      editTask(data)
    } else {
      createTask(data)
    }
  }

  const getEditTaskData = (data: any) => {
    setFormData({
      id: data.id,
      name: data.name,
      priority: data.priority,
      progress: data.progress,
    })
    handleOpen()
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
          {tasks.length ? (
            <TasksTable
              toogleTask={toogleTask}
              onDeleteTask={deleteTask}
              onEditTask={getEditTaskData}
              tasks={tasks}
            />
          ) : null}
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <TasksForm onSend={sendHandler} formData={formData}></TasksForm>
        </div>
      </Modal>
    </div>
  )
}
