import {
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  FormControl,
  Button,
} from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'
import { TaskFormProps } from '../interfaces/interfaces'
import { progressesOptions, priorityOptions } from '../utils/constants'

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    padding: theme.spacing(2),
    border: '1px solid rgba(63, 81, 181, 0.5)',
    borderRadius: '4px',
    background: 'white',
  },
  formControl: {
    width: '100%',
  },
  sendBtn: {
    width: '100%',
  },
}))

interface FormState {
  name: string
  priority: number
  progress: number
}

export const TasksForm: FC<TaskFormProps> = ({ onSend, formData }) => {
  const classes = useStyles()
  const [edit, setEdit] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [form, setForm] = useState<FormState>({
    name: '',
    priority: 1,
    progress: 1,
  })

  useEffect(() => {
    setEdit(false)
    if (Object.keys(formData).length) {
      setForm(formData)
      setEdit(true)
    }
  }, [])

  const changeHandler = (event: any): void => {
    setErrorMsg('')
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submitFormHandler = (event: any): void => {
    event.preventDefault()
    if (form.name) {
      onSend(form, edit)
    } else {
      setErrorMsg('Title cant be empty')
    }
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Grid container spacing={1} direction="column">
        <h1>Create task</h1>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            autoComplete="off"
            value={form.name}
            onChange={changeHandler}
            error={Boolean(errorMsg)}
            helperText={errorMsg}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel>Priority</InputLabel>
            <Select
              name="priority"
              fullWidth
              label="Priority"
              value={form.priority}
              onChange={changeHandler}
            >
              {priorityOptions.map((el) => (
                <MenuItem value={el.key} key={el.key}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel>Progress</InputLabel>
            <Select
              name="progress"
              fullWidth
              label="Progress"
              value={form.progress}
              onChange={changeHandler}
            >
              {progressesOptions.map((el) => (
                <MenuItem key={el.key} value={el.key}>
                  {el.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.sendBtn}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={submitFormHandler}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
