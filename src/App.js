import React from 'react'
import './App.css'

export default function App() {
  
  return (
    <>
      <h1 className='text-center'>Horizontal Sroll</h1>
      <h3 className='ms-2'>Category 1</h3>
      <div className='h-scroll-parent'>
        <div className='h-scroll-child' style={{backgroundColor: 'red'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'orange'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'yellow'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'green'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'blue'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'indigo'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'violet'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'red'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'orange'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'yellow'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'green'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'blue'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'indigo'}}></div>
        <div className='h-scroll-child' style={{backgroundColor: 'violet'}}></div>
      </div>
    </>
  )
}
