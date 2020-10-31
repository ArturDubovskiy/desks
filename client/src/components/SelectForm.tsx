import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React, { ChangeEvent, FC } from 'react'
import { SelectFormProps } from '../interfaces/homePage'

const SelectForm: FC<SelectFormProps> = ({ desks, value, onSelectDesk }) => {
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    onSelectDesk(event.target.value as string)
  }

  return (
    <FormControl variant="filled" style={{ minWidth: 150, width: '100%' }}>
      <InputLabel>Select desk</InputLabel>
      <Select value={value} onChange={handleChange}>
        {desks.map((item: any) => {
          return (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default SelectForm
