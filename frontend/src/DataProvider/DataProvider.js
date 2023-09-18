import React from 'react'
import { createContext,useState } from 'react'
import AllData from '../Data/AllData'

export const context = createContext();
 
export const DataProvider = (props) => {
    const [Data] = useState(AllData);
  return (
    <div>DataProvider</div>
  )
}
