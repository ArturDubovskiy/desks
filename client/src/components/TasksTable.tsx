import { Grid, makeStyles, Theme } from '@material-ui/core'
import React, { FC } from 'react'
import { TasksTableProps } from '../interfaces/interfaces'
import { TaskCard } from './TaskCard'

const useStyles = makeStyles((theme: Theme) => ({
  category: {
    border: '1px solid rgba(63, 81, 181, 0.5);',
    borderRadius: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  header: {
    width: '100%',
    textAlign: 'center',
    color: '#3f51b5',
  },
  container: {
    justifyContent: 'space-evenly',
  },
  [theme.breakpoints.up('lg')]: {
    container: {
      justifyContent: 'space-evenly',
    },
    category: {
      boxShadow: '5px 10px 8px 10px #888888',
    },
  },
  [theme.breakpoints.down('md')]: {
    container: {
      justifyContent: 'flex-start',
    },
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      justifyContent: 'flex-start',
    },
  },
}))

export const TasksTable: FC<TasksTableProps> = ({
  tasks,
  onDeleteTask,
  toogleTask,
  onEditTask,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item lg={2} md={4} sm={6} xs={12} className={classes.category}>
          <h1 className={classes.header}>Backlog</h1>
          {tasks.map((task) => {
            if (task.progress === 1) {
              return (
                <TaskCard
                  key={task.id}
                  editTask={onEditTask}
                  toogleTask={toogleTask}
                  deleteTask={onDeleteTask}
                  task={task}
                />
              )
            }
            return null
          })}
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12} className={classes.category}>
          <h1 className={classes.header}>TODO</h1>
          {tasks.map((task) => {
            if (task.progress === 2) {
              return (
                <TaskCard
                  editTask={onEditTask}
                  key={task.id}
                  toogleTask={toogleTask}
                  deleteTask={onDeleteTask}
                  task={task}
                />
              )
            }
            return null
          })}
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12} className={classes.category}>
          <h1 className={classes.header}>In progress</h1>
          {tasks.map((task) => {
            if (task.progress === 3) {
              return (
                <TaskCard
                  editTask={onEditTask}
                  key={task.id}
                  toogleTask={toogleTask}
                  deleteTask={onDeleteTask}
                  task={task}
                />
              )
            }
            return null
          })}
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12} className={classes.category}>
          <h1 className={classes.header}>On review</h1>
          {tasks.map((task) => {
            if (task.progress === 4) {
              return (
                <TaskCard
                  editTask={onEditTask}
                  key={task.id}
                  toogleTask={toogleTask}
                  deleteTask={onDeleteTask}
                  task={task}
                />
              )
            }
            return null
          })}
        </Grid>
        <Grid item lg={2} md={4} sm={6} xs={12} className={classes.category}>
          <h1 className={classes.header}>Done</h1>
          {tasks.map((task) => {
            if (task.progress === 5) {
              return (
                <TaskCard
                  editTask={onEditTask}
                  key={task.id}
                  toogleTask={toogleTask}
                  deleteTask={onDeleteTask}
                  task={task}
                />
              )
            }
            return null
          })}
        </Grid>
      </Grid>
    </div>
  )
}
