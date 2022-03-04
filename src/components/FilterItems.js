import React from 'react'

export default function FilterItems(props) {
    

    if (!props.filterIsHidden) {
        return (
            <div className="flex flex-row gap-5 justify-center items-end">
                {props.categories.map((category, index) =>
                    <div key={category} className="checkbox">
                        <input 
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" 
                            id={`filter-${category}-0`} 
                            name={category} 
                            value={category}
                            checked={props.checkedState[index]}
                            onChange={() => props.handleChange(index)} 
                        />
                        <label className="ml-3 min-w-0 flex-1 text-gray-400 text-sm m-1" htmlFor={category}> {props.capitalize(category)}</label>
                    </div>
                )}
            </div>
          )
    }
    return <></>
  
}
