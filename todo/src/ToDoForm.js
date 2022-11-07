import React from 'react'
import { useState } from 'react'

function ToDoForm() {
    const [input, setInput] = useState('')

  return (
    <div>
        <form>
            <label for='input'>Add to List</label>
            <input type='text' name='input' id='input'></input>
            <input type='submit'></input>
        </form>

    </div>
  )
}

export default ToDoForm