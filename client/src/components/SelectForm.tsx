import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useState, ChangeEvent } from 'react'

const SelectForm = () => {
  const [age, setAge] = useState('')

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string)
  }
  return (
    <FormControl variant="filled" style={{ minWidth: 150, width: '100%' }}>
      <InputLabel>Select desk</InputLabel>
      <Select value={age} onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectForm
