import { Button, Grid, makeStyles, Theme } from '@material-ui/core'
import React, { FC, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { IDeskForm, IDeskFormProps } from '../interfaces/homePage'

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    padding: theme.spacing(1),
    border: '1px solid rgba(63, 81, 181, 0.5)',
    borderRadius: '4px',
  },
  submit: {
    width: '100%',
    color: 'white',
    background: 'rgb(14, 168, 0)',
    '&:hover': {
      background: 'rgba(14, 168, 0, 0.7)',
    },
  },
}))

const DeskForm: FC<IDeskFormProps> = ({ loading, createDesk }) => {
  const classes = useStyles()
  const [form, setForm] = useState<IDeskForm>({
    name: '',
  })
  const [errorMsg, setErrorMsg] = useState<string>('')

  const changeHandler = (event: any) => {
    setErrorMsg('')
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submitHandler = () => {
    if (form.name) {
      createDesk(form)
    } else {
      setErrorMsg('Title cant be empty')
    }
  }

  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={10}>
          <TextField
            fullWidth
            label="Desk name"
            name="name"
            onChange={changeHandler}
            error={Boolean(errorMsg)}
            helperText={errorMsg}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={submitHandler}
            className={classes.submit}
            disabled={loading}
            variant="outlined"
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default DeskForm
