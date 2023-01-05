import React from 'react'
import FormControl from '@mui/material/FormControl'
import { InputLabel, MenuItem, Select } from '@mui/material'


export const SelectMenu = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}
