import React from 'react'

export default function ItemCard(props) {
  
  return (
    <div key={props.item.id} id={props.item.id} category={props.item.category} className="mt-6">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden hover:opacity-75 lg:h-80 lg:aspect-none">
            <img className="object-scale-down" src={props.item.image} alt={props.item.description} />
        </div>
        <div className="mt-4 flex justify-between">
            <div className="text-sm text-slate-500 dark:text-slate-100 text-left">{props.item.title}</div>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 text-right">${props.item.price.toFixed(2)}</span>
        </div>
    </div>
  )
}
