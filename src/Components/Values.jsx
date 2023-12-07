import React from 'react'
import { useState } from 'react'
import Display from './Display'
import './value.css'
const Values = () => {
    const [Expression,setExpression] = useState('')

    function HandelExp(e){
        setExpression(Expression + e.target.value)
    }

    function HandelAC(){
        setExpression('')
    }

    function HandelEqual(){
        setExpression(eval(Expression))
    }

    function HandelDel(){
        let tempExp = Expression;
        if(typeof(tempExp) != 'string'){
            tempExp = tempExp.tostring()
        }
        setExpression(tempExp.substring(0 , tempExp.length-1))
    }
  return (
    <div className='body'>
        <Display exp={Expression}/>
      <div className='r1'>
        <button onClick={HandelAC} className='b1'>AC</button>
        <button onClick={HandelDel} className='b1'>DEL</button>
        <button onClick={(e)=>HandelExp(e)} value='/'>/</button>
      </div>
      <div>
      <button onClick={(e)=>HandelExp(e)} value='7'>7</button>
      <button onClick={(e)=>HandelExp(e)} value='8'>8</button>
      <button onClick={(e)=>HandelExp(e)} value='9'>9</button>
      <button onClick={(e)=>HandelExp(e)} value='*'>*</button>
      </div>
      <div>
      <button onClick={(e)=>HandelExp(e)} value='4'>4</button>
      <button onClick={(e)=>HandelExp(e)} value='5'>5</button>
      <button onClick={(e)=>HandelExp(e)} value='6'>6</button>
      <button onClick={(e)=>HandelExp(e)} value='+'>+</button>
      </div>
      <div>
      <button onClick={(e)=>HandelExp(e)} value='1'>1</button>
      <button onClick={(e)=>HandelExp(e)} value='2'>2</button>
      <button onClick={(e)=>HandelExp(e)} value='3'>3</button>
      <button onClick={(e)=>HandelExp(e)} value='-'>-</button>
      </div>
      <div>
      <button onClick={(e)=>HandelExp(e)} value='.'>.</button>
      <button onClick={(e)=>HandelExp(e)} value='0' >0</button>
      <button onClick={HandelEqual} value='+' className='b2'>=</button>
      </div>
    </div>
  )
}

export default Values
