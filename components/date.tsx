import React from 'react'
type Prop = {
  defaultDate: string; changeDate: (updated: Date) => void; labelText: string;
}
export default function DatePicker({defaultDate, labelText}:Prop) {
  return (
    <div> 
      <label htmlFor="Date Picker">{labelText}</label>
      <input type="date" id="Date Picker" name="Date Picker" defaultValue = {defaultDate}/>
    </div>
  )
}

