import React, { FC, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import CloseIcon from '@material-ui/icons/Close'
import { ErrorAlertProps } from '../interfaces/interfaces'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const ErrorAlert: FC<ErrorAlertProps> = ({ error, onClose }) => {
  const classes = useStyles()
  const [open, setOpen] = useState<boolean>(true)

  const onCloseHandler = () => {
    setOpen(false)
    onClose()
  }
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <Collapse in={open}>
          <Alert
            severity="error"
            action={
              <IconButton aria-label="close" color="inherit" size="small" onClick={onCloseHandler}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {error}
          </Alert>
        </Collapse>
      </div>
    </Grid>
  )
}

export default ErrorAlert
