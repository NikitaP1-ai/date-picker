import React from 'react'
type Prop = {
  defaultDate: string; changeDate: (updated: Date) => void; labelText: string;
}
export default function DatePicker({defaultDate, labelText}:Prop) {
  return (
    <div> 
      <label htmlFor="birthday">{labelText}</label>
      <input type="date" id="birthday" name="birthday" defaultValue = {defaultDate}/>
    </div>
  )
}
