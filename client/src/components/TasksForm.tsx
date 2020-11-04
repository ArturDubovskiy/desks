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
import React, { FC, useState } from 'react'
import { TaskFormProps } from '../interfaces/homePage'

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

export const TasksForm: FC<TaskFormProps> = ({ onSend }) => {
  const classes = useStyles()
  const [form, setForm] = useState({
    name: '',
    priority: 1,
  })

  const changeHandler = (event: any): void => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const submitFormHandler = (event: any): void => {
    event.preventDefault()
    onSend(form)
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            value={form.name}
            onChange={changeHandler}
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
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Medium</MenuItem>
              <MenuItem value={3}>High</MenuItem>
              <MenuItem value={4}>Very High</MenuItem>
              <MenuItem value={5}>Critical</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.sendBtn}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={() => onSend(form)}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
