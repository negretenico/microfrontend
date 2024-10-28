import React from 'react'
import '../index.scss'
type CardProps =Partial<{
    product_name: string
    brand: string
    price: number
    size: string
    color: string
    material: string
    weight: number
    gender: string
    sport_type: string
    availability: boolean
    image_url: string}> 
  
export default function Card(props: CardProps) {
  return (
<div className="max-w-60 max-h-xs rounded overflow-hidden shadow-lg">
  <img style={{
    height: '10rem'
  }} className="w-full" src={props?.image_url} alt={props.product_name}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-center">{props.product_name}</div>
    <p className="text-gray-700 text-base text-center">
        {`$${props.price}`}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.gender}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.sport_type}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.brand}</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.material}</span>
  </div>
</div>
  )
}
