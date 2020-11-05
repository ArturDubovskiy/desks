import React, { FC } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  makeStyles,
  Theme,
  IconButton,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { TaskCardProps } from '../interfaces/homePage'

const useStyles = makeStyles((theme: Theme) => ({
  cardBody: {
    textAlign: 'center',
    wordWrap: 'break-word',
    marginBottom: theme.spacing(1),
  },
  actionButton: {
    width: '50%',
  },
  undoneTask: {
    background: 'rgba(0,0,0,0.2)',
  },
  doneBtn: {
    color: 'green',
  },
  delBtn: {
    color: 'red',
  },
  undoneBtn: {
    color: 'red'
  },
  doneTask: {
    background: 'rgba(0, 255, 0, 0.2)',
  },
}))

export const TaskCard: FC<TaskCardProps> = ({ task, toogleTask, deleteTask }) => {
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
      <CardActions>
        {task.isDone ? (
          <Button onClick={() => toogleTask(task)} className={classes.actionButton}>
            <HighlightOffIcon className={classes.undoneBtn} />
          </Button>
        ) : (
          <Button onClick={() => toogleTask(task)} className={classes.actionButton}>
            <CheckCircleOutlineIcon className={classes.doneBtn} />
          </Button>
        )}
        <Button onClick={() => deleteTask(task.id)} className={classes.actionButton}>
          <DeleteIcon className={classes.delBtn} />
        </Button>
      </CardActions>
    </Card>
  )
}
