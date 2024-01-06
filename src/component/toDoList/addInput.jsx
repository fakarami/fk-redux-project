import React from 'react'
import { Button } from 'react-bootstrap'

export default function AddInput() {
  return (
    <>
    <label>Add new Work:{" "} 
        <input type='text' />
    </label>
    <Button variant='outline-primary' className='m-1 p-1'>Add</Button>
    </>
  )
}
