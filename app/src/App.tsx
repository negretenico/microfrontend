import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from  'header/Header'
import Card from 'product_card/Card'
import './index.scss'
const data =       {
  "product_name": "Rev",
  "brand": "Yodoo",
  "price": 447.4,
  "size": "Large",
  "color": "Fuscia",
  "material": "Nylon",
  "weight": 0.78,
  "gender": "Women",
  "sport_type": "Boxing",
  "availability": false,
  "image_url": "http://dummyimage.com/164x225.png/5fa2dd/ffffff"
}
const App = () => (
  <div>
    <Header/>
    <Card {...data}/>
  </div>

)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)