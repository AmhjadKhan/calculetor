import React, { useState } from 'react'
import './App.css'

const App =() => {

  const [result,setResult] = useState('')

  const clickHandeler = (event) =>{
    setResult(result.concat(event.target.value))
  }
  const clearDisplay = () =>{
    setResult('')
  }

  const calCulate = () => {
    setResult(eval(result).toString())
  }

  return (
    <div>
      <div className="calc">
        <input type='button' placeholder='000' id='answer'  value={result}/>
        <input type='button' value="9" className='button' onClick={clickHandeler}/>
        <input type='button' value="8" className='button' onClick={clickHandeler}/>
        <input type='button' value="7" className='button' onClick={clickHandeler}/>
        <input type='button' value="6" className='button' onClick={clickHandeler}/>
        <input type='button' value="5" className='button' onClick={clickHandeler}/>
        <input type='button' value="4" className='button' onClick={clickHandeler}/>
        <input type='button' value="3" className='button' onClick={clickHandeler}/>
        <input type='button' value="2" className='button' onClick={clickHandeler}/>
        <input type='button' value="1" className='button' onClick={clickHandeler}/>
        <input type='button' value="0" className='button' onClick={clickHandeler}/>
        <input type='button' value="." className='button' onClick={clickHandeler}/>
        <input type='button' value="+" className='button' onClick={clickHandeler}/>
        <input type='button' value="-" className='button' onClick={clickHandeler}/>
        <input type='button' value="*" className='button' onClick={clickHandeler}/>
        <input type='button' value="/" className='button' onClick={clickHandeler}/>
        <input type='button' value="%" className='button' onClick={clickHandeler}/>
        <input type='button' value="clear" className='button button1' onClick={clearDisplay}/>
        <input type='button' value="=" className='button button1' onClick={calCulate}/>
      </div>
    </div>
  )
}

export default App
