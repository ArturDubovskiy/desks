import { Grid, makeStyles, Theme, IconButton } from '@material-ui/core'
import React, { FC, useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import SendIcon from '@material-ui/icons/Send'
import Alert from '@material-ui/lab/Alert'
import { DeskFormInterface, DeskFormProps } from '../interfaces/homePage'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
    padding: theme.spacing(1),
    border: '1px solid rgba(63, 81, 181, 0.5)',
    borderRadius: '4px',
  },
  submit: {
    color: 'white',
    background: 'rgb(14, 168, 0)',
    '&:hover': {
      background: 'rgba(14, 168, 0, 0.7)',
    },
  },
  close: {
    color: 'white',
    background: 'rgb(255, 0, 0)',
    '&:hover': {
      background: 'rgba(255, 0, 0, 0.7)',
    },
  },
}))

const DeskForm: FC<DeskFormProps> = ({
  loading,
  createDesk,
  error,
  edit,
  close,
  desk,
  editDesk,
}) => {
  const classes = useStyles()
  const [form, setForm] = useState<DeskFormInterface>({
    name: '',
  })
  const [errorMsg, setErrorMsg] = useState<string>('')

  const changeHandler = (event: any) => {
    setErrorMsg('')
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    setErrorMsg('')
    if (desk && edit) {
      setForm({ name: desk.name })
    } else {
      setForm({ name: '' })
    }
  }, [desk, edit])

  const onFormSubmit = (event: any) => {
    event.preventDefault()
    if (form.name) {
      if (desk && edit) {
        editDesk(form)
        close()
      } else {
        createDesk(form)
        setForm({ name: '' })
        close()
      }
    } else {
      setErrorMsg('Title cant be empty')
    }
  }

  return (
    <form className={classes.form} onSubmit={onFormSubmit}>
      <Grid container spacing={3} alignItems="center">
        <Grid item sm={8} xs={12} md={10}>
          <TextField
            fullWidth
            label="Desk name"
            name="name"
            value={form.name}
            onChange={changeHandler}
            error={Boolean(errorMsg)}
            helperText={errorMsg}
          />
        </Grid>
        <Grid item sm={2} xs={3} md={1}>
          <IconButton
            type="submit"
            color="secondary"
            disabled={loading}
            className={classes.submit}
            aria-label="add an alarm"
          >
            <SendIcon />
          </IconButton>
        </Grid>
        <Grid item sm={2} xs={3} md={1}>
          <IconButton
            onClick={close}
            color="secondary"
            className={classes.close}
            aria-label="add an alarm"
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        {error && (
          <Grid item sm={12}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}
      </Grid>
    </form>
  )
}

export default DeskForm
