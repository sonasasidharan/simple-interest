

import './App.css';
import TextField  from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [pamount,setPamount]=useState(0)
    const [rate,setRate]=useState(0)
    const [time,setTime]=useState(0)
    const [result,setResult]=useState(0)


    const [validpamount,setValidpamount]=useState(false)
     const [Validrate,setValidrate]=useState(false)
      const [validtime,setValidtime]=useState(false)


    const validinput=(e)=>{
      const{name,value}=e.target
      // console.log(name,value)
      if(value.match(/^[0-9]*.?[0-9]+$/)){  if (name=='pamount'){
        setPamount(value)
        setValidpamount(true)
      }
      else if(name=='rate'){
        setRate(value)
        setValidrate(true)
      }
      else{
        setTime(value)
        setValidtime(true)
      }
    }
  
  else{
      if (name=='pamount'){
        setPamount(0)
        setValidpamount(false)
      }
      else if(name=='rate'){
        setRate(0)
        setValidrate(false)
      }
      else{
        setTime(0)
        setValidtime(false)
      }
    }
  }

    // console.log(pamount,rate,time)
    // console.log(validpamount,Validrate,validtime)

const resetForm=()=>{
  setPamount(0) 
  setRate(0)
  setTime(0)
  setResult(0)

  setValidpamount(false)
  setValidrate(false)
  setValidtime(false)
  setvalidresult(0)

}

  
  

   

    const submitted=(e)=>{
      e.preventDefault()
      console.log(pamount,rate,time)
      const res=(pamount*rate*time)/100
      console.log(res)
      setResult(res)
     

    }


  return (
    <>
  <div className='w-5 bg-dark d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
    <div className='bg-light w-50 shadow-rounded p-5'>
      <h4>simple interest calculator</h4>
      <div className='d-flex justifu-content-center p-5 border shadow mt-3' style={{background:'yellow'}}>
      ₹ {result}
      </div>
      <form onSubmit={(e)=>{submitted(e)}}>   
        <div className='mt=2 p-2'>
        <TextField id="outlined-basic" name='pamount' value={pamount} onChange={(e)=>{validinput(e)}} style={{width:'100%'}} label=" ₹ principal amount" variant="outlined" />
        {
          !validpamount &&
          <>
          <div className='text-danger'> invalid principal amount</div>
          </>
        }
        </div>
        <div className='mt=2 p-2' >
        <TextField id="outlined-basic" name='rate'  value={rate} onChange={(e)=>{validinput(e)}}style={{width:'100%'}} label="% Rate" variant="outlined" />
       {
          !Validrate &&

          
          <div className='text-danger'> invalid rate</div>
          
        }
        </div>
        <div className='mt=2 p-2'>
        <TextField id="outlined-basic"  name='time' value={time}  onChange={(e)=>{validinput(e)}} style={{width:'100%'}} label=" Time" variant="outlined" />
       
       {
          !validtime &&
          <>
          <div className='text-danger'> invalid duration</div>
          </>
        } </div>
        <Stack spacing={2} direction="row">
      <Button variant="contained" disabled={validpamount&&Validrate&&validtime?false:true} type='submit '  className='bg-dark' style={{height:'50px',width:'50%'}}>submit</Button>
      <Button variant="contained" className='bg-info'  onClick={resetForm} style={{height:'50px',width:'50%'}}>reset</Button>
    </Stack>
      </form>
    </div>
  </div>
    </>
  )
}

export default App
