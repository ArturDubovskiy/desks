import React, { FC } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { TaskCardProps } from '../interfaces/homePage'

const useStyles = makeStyles((theme: Theme) => ({
  cardBody: {
    textAlign: 'center',
    wordWrap: 'break-word',
    marginBottom: theme.spacing(1)
  },
  actionButton: {
    width: '100%',
  },
  actions: {
    background: 'rgba(255,0,0, 0.2)',
  },
  undoneTask: {
    background: 'rgba(0,0,0,0.2)',
  },
  doneTask: {
    background: 'rgba(0, 255, 0, 0.2)',
  },
}))

export const TaskCard: FC<TaskCardProps> = ({ task, deleteTask }) => {
  const classes = useStyles()

  return (
    <Card variant="outlined" raised className={classes.cardBody}>
      <CardContent className={task.isDone ? classes.doneTask : classes.undoneTask}>
        <Typography color="textSecondary" gutterBottom>
          {task.name}
        </Typography>
        <div>
          Created:{' '}
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
          }).format(new Date(task.created_at))}
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button onClick={() => deleteTask(task.id)} className={classes.actionButton} size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
