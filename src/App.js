import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AllShopItems from './pages/AllShopItems'
import Navbar from './components/Navbar';
import logo from './icons/logoipsum.svg';
import arrow from './icons/down-arrow.svg';

function App() {

  // const [shopItems, setShopItems] = useState(null);
  // const [currentShopItems, setCurrentShopItems] = useState(null)
  // const [filterIsHidden, setFilterIsHidden] = useState(true);
  const [categories, setCategories] = useState([]);
  // const [currentCategories, setCurrentCategories] = useState([]);
  // const [checkedState, setCheckedState] = useState([]);

  // // API CALL
  // // FETCH ALL PRODUCTS
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/')
  //   .then(res => res.json())
  //   .then(json => setShopItems(json))
  // }, [])

  // FETCH CATEGORIES
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => setCategories(json))
  }, [])

  // // FILTER FUNCTIONS
  // // SET CATEGORIES FILTER
  // useEffect(() => {
  //   setCheckedState(new Array(categories.length).fill(true))
  // }, [categories])

  // // SET CURRENT SHOP ITEMS
  // useEffect(() => {
  //   setCurrentShopItems(shopItems)
  // }, [shopItems])

  // // ROTATE SVG
  // const rotateArrow = () => {
  //   const innerArrow = document.getElementById('svg-arrow');
  //   innerArrow.setAttribute('transform', 'rotate(180)')
  // }

  // CAPITALIZE NAMES
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  // // SHOW OR HIDE FILTER
  // const hideCategories = () => {
  //   if (filterIsHidden) {
  //     setFilterIsHidden(false);
  //     rotateArrow();
  //   }
  //   if (!filterIsHidden) {
  //     setFilterIsHidden(true);
  //     rotateArrow();
  //   }
  // }

  // // FILTERS ITEMS W CHECKBOXES
  // const handleChange = (position) => {
  //   // UPDATE CHECKED STATE
  //   const updatedCheckedState = checkedState.map((item, index) => 
  //     index === position ? !item : item
  //   )
  //   setCheckedState(updatedCheckedState);
  //   console.log(updatedCheckedState);

  //   // // RETURN SELECTED CATEGORIES
  //   const updatedCategories = categories.map((item, index) =>
  //       !updatedCheckedState[index] ? null : item
  //     )
  //   setCurrentCategories(updatedCategories);
  //   console.log(updatedCategories);

  //   //FILTER SHOP Items
  //   const filteredItems = shopItems.filter(item => updatedCategories.includes(item.category));
  //   setCurrentShopItems(filteredItems);
  //   console.log(filteredItems);
  // }

  


  return (
      
    <div className="App container-fluid text-center bg-white">
      <header className="App-header">
        
          <div className="logo-container w-screen bg-slate-900 py-4 flex justify-center">
            <Link to="/">
              <img width={250}  src={logo} alt="Logo" />
            </Link>
          </div>

        <Navbar 
          categories={categories}
          capitalize={capitalize}
        />

        <div className="shop-section container">

          {/* <AllShopItems 
            filterIsHidden={filterIsHidden}
            categories={categories}
            checkedState={checkedState}
            handleChange={handleChange}
            hideCategories={hideCategories}
            arrow={arrow}
            capitalize={capitalize}
            shopItems={shopItems}
            currentCategories={currentCategories}
            currentShopItems={currentShopItems}
          /> */}
          <Outlet />
          
          {/* <FilterBar 
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
          /> */}

        </div>
        
      </header>
    </div>
  );
}

export default App;
