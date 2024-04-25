
import { useState } from 'react'
import './App.css'
import InputComponent from './Components/InputComponent'
import { useEffect } from 'react'

function App() {
  // const inputTypes=["select", "radio", "checkbox", "text","number", "currency", "password"]

  const [placeholder,setPlaceholder]= useState("Test")
  const [inputTitle,SetInputTitle]= useState("Title")
  const [inputStyle,SetInputStyle]= useState("text")
  const [required,setRequired]= useState(true)
  const [disable,SetDisable]= useState(false)
  const [dataArr,SetdataArr]= useState([])

    //setPlaceholderName
    const setPlaceholderName = (e)=>{
      setPlaceholder(e.target.value)
  
    }
    //SetInputTitle
    const SetInputTitleName = (e)=>{
      SetInputTitle(e.target.value)
  
    }
    //SetInputStyle
    const SetInputStyleName = (e)=>{
      SetInputStyle(e.target.value)
  
    }
    //SetInputStyle
    const setRequiredName = (e)=>{

 
      // console.log(value)
      if(e.target.value=="YES" || e.target.value=="Y"){
        setRequired(true)

      }else{
        setRequired(false)
      }
  
    }
    const SetDisableName = (e)=>{
      const value = e.target.value.toLowerCase()
      if(value=="Yes" || value=="Y"){
        SetDisable(true)

      }
  
    }

    // const create = ()=>{

    // }
    // const edit = ()=>{

    // }
    // const disableFuntion = ()=>{
    //   SetDisable(true)
    //   console.log("first")

    // }

    const submit = ()=>{
        const arr =[]
        arr.push(inputStyle)
        arr.push(inputTitle)
        arr.push(placeholder)
        arr.push(required)
        arr.push(disable)
        SetdataArr((prev)=> [...prev,arr])
        console.log(arr)
    }

    useEffect(()=>{
      console.log(dataArr)
},[dataArr])
  return (
    <>
     <h1>Hello</h1>

     {/* User Inputs */}
     <div style={{display:'flex',justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center",flexWrap:"wrap"}}>
       <div>
        
     <input style={{margin:"10px"}} type="text" onChange={SetInputStyleName}/> Input Style 
     <input style={{margin:"10px"}} type="text" onChange={SetInputTitleName}/> Input Title 
     <input style={{margin:"10px"}} type="text" onChange={setPlaceholderName}/>Placeholder 
     <input style={{margin:"10px"}} type="text" onChange={setRequiredName}/>IS Required    
     <input style={{margin:"10px"}} type="text" onChange={SetDisableName}/>Is Disable YES/Y
       </div>

    </div>
        <button onClick={submit}>Create</button>
     <InputComponent dataArr={dataArr} />
    </>
  )
}

export default App
