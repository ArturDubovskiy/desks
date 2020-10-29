import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { useState, ChangeEvent, FC } from 'react'
import { ISelectFormProps } from '../interfaces/homePage'

const SelectForm: FC<ISelectFormProps> = ({ desks, value }) => {
  const [desk, setDesk] = useState(value)

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setDesk(event.target.value as string)
  }
  return (
    <FormControl variant="filled" style={{ minWidth: 150, width: '100%' }}>
      <InputLabel>Select desk</InputLabel>
      <Select value={desk} onChange={handleChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {desks.map((desk: any) => {
          return <MenuItem value={desk.id}>{desk.name}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}

export default SelectForm
