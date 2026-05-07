
import { useState } from 'react'
import Accordion from './components/Accordion'
import CountryTask from './components/CountryTask'
import Header from './components/Header'
import ImageSlider from './components/ImageSlider'
import Signup from './components/SIgnup'
import StateVariables from './components/StateVariables'
import TodoApp from './components/TodoApp'

export default function App(){
  
  return (
    <>
    <Header title="React Interview" bg="red" />
    <CountryTask/>
    {/* <StateVariables name="Abhi" /> */}
    {/* <ImageSlider/> */}
    {/* <Signup/> */}
    {/* <TodoApp/> */}
    {/* <Accordion/> */}
    </>
  )
}
