import React from 'react';
import { useState, useEffect } from 'react';
import DisplayShopItems from '../components/DisplayShopItems';
import FilterBar from '../components/FilterBar';
import arrow from '../icons/down-arrow.svg';


export default function AllShopItems() {

  const [filterIsHidden, setFilterIsHidden] = useState(true);
  const [checkedState, setCheckedState] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [shopItems, setShopItems] = useState(null);
  const [currentShopItems, setCurrentShopItems] = useState(null)



  // API CALL
  // FETCH ALL PRODUCTS
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then(json => setShopItems(json))
  }, [])

  // FETCH CATEGORIES
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])


  // ROTATE SVG
  const rotateArrow = () => {
    const innerArrow = document.getElementById('svg-arrow');
    innerArrow.setAttribute('transform', 'rotate(180)')
  }

  // CAPITALIZE NAMES
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
  // SHOW OR HIDE FILTER
  const hideCategories = () => {
    if (filterIsHidden) {
      setFilterIsHidden(false);
      rotateArrow();
    }
    if (!filterIsHidden) {
      setFilterIsHidden(true);
      rotateArrow();
    }
  }

  // SET CATEGORIES FILTER
  useEffect(() => {
    setCheckedState(new Array(categories.length).fill(true))
  }, [categories])

  const handleChange = (position) => {
    // UPDATE CHECKED STATE
    const updatedCheckedState = checkedState.map((item, index) => 
      index === position ? !item : item
    )
    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState);

    // // RETURN SELECTED CATEGORIES
    const updatedCategories = categories.map((item, index) =>
        !updatedCheckedState[index] ? null : item
      )
    setCurrentCategories(updatedCategories);
    console.log(updatedCategories);

    //FILTER SHOP Items
    const filteredItems = shopItems.filter(item => updatedCategories.includes(item.category));
    setCurrentShopItems(filteredItems);
    console.log(filteredItems);
  }

  return (
    <div>
      <FilterBar 
            filterIsHidden={filterIsHidden}
            categories={categories}
            checkedState={checkedState}
            handleChange={handleChange}
            hideCategories={hideCategories}
            arrow={arrow}
            capitalize={capitalize}
          />
          
          <DisplayShopItems
            shopItems={shopItems}
            currentCategories={currentCategories}
            currentShopItems={currentShopItems}
          />
    </div>
  )
}
