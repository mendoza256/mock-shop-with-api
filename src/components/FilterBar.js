import React from 'react';
import FilterItems from './FilterItems'
import FilterToggle from './FilterToggle'

export default function FilterBar(props) {
  return (
    <div className="flex flex-col items-center mt-4">
        <FilterToggle 
            hideCategories={props.hideCategories}
            categories={props.categories}
            filterIsHidden={props.filterIsHidden}
            arrow={props.arrow}
        />
        <FilterItems 
            filterIsHidden={props.filterIsHidden}
            categories={props.categories}
            checkedState={props.checkedState}
            handleChange={props.handleChange}
            capitalize={props.capitalize}
        />
    </div>
  )
}
