import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from  'header/Header'
import Layout from 'layout/Layout'
import './index.scss'
const App = () => (
  <div>
    <Header/>
    <div className='overflow-y-auto'>
      <Layout/>
    </div>
  </div>

)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)