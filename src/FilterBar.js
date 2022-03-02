import React from 'react'

export default function FilterBar(props) {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    if (!props.filterIsHidden) {
        return (
            <div className="container slate-900">
                <nav className="flex flex-row gap-5">
                    {props.categories.map((category, index) =>
                        <div key={category} className="checkbox">
                            <input 
                                type="checkbox" 
                                id={`custom-checkbox-${category}`} 
                                name={category} 
                                value={category}
                                checked={props.checkedState[index]}
                                onChange={() => props.handleChange(index)} 
                            />
                            <label className="text-sm m-1" htmlFor={category}> {capitalize(category)}</label>
                        </div>
                    )}
                </nav>
            </div>
          )
    }
    return <></>
  
}
