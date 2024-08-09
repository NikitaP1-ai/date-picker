import React from 'react'

type Prop = {
  defaultDate: string; changeDate: (updated: Date) => void; labelText: string;
}

export default function DatePicker({defaultDate, changeDate, labelText}:Prop) {
  const initialDate = defaultDate || new Date().toISOString().split('T')[0];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    changeDate(newDate);
  }
  return (
    <div> 
      <label htmlFor="Date Picker">{labelText}</label>
      <input type="date" id="Date Picker" name="Date Picker" defaultValue = {initialDate} onChange={handleChange}/>
    </div>
  )
}

