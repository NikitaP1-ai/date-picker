import React from 'react'

type Prop = {
  defaultDate: string; changeDate: (updated: Date) => void; labelText: string;
}

export default function DatePicker({defaultDate, changeDate, labelText}:Prop) {

  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    changeDate(newDate);
  }
  return (
    <div> 
      <label htmlFor="Date Picker">{labelText}</label>
      <input type="date" id="date-picker" name="Date Picker" defaultValue = {defaultDate} onChange={handleChange}/>
    </div>
  )
}

