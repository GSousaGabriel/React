import './App.css';
import { useCallback, useState } from 'react'

import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput';
import DemoOutput2 from './components/Demo/DemoOutput2';

function App() {
  const [showParagraph, setShowParagraph]= useState(false)
  const [allowToggle, setAllowToggle]= useState(false)

  const onClickHandler= useCallback(event=>{
    if(allowToggle){
      setShowParagraph(prevState=>{
        return !prevState
      })
    }
  }, [allowToggle])

  const allowToggleHandler= ()=>{
    setAllowToggle(true)
  }

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <DemoOutput2 show={false}/>
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={onClickHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
