import React from 'react'

export default function FilterToggle(props) {
  return (
    <div>
        <button 
            className="toggle-hide text-sm font-bold flex border-0 rounded bg-blue-900 p-2 mb-2" 
            onClick={props.hideCategories}>
              <p className="px-2">{props.filterIsHidden? 'Show' : 'Hide'} filters</p>  
              <img id="svg-arrow" width={15} src={props.arrow} alt="arrow" /> 
          </button>
    </div>
  )
}
