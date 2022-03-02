import './App.css';
import { useState, useEffect } from 'react';
import ShopItems from './ShopItems.js';
import FilterBar from './FilterBar.js';
import logo from './icons/logoipsum.svg';

function App() {

  const [shopItems, setShopItems] = useState(null);
  const [currentShopItems, setCurrentShopItems] = useState(null)
  const [filterIsHidden, setFilterIsHidden] = useState(true);
  const [showOrHide, setShowOrHide] = useState("Show");
  const [categories, setCategories] = useState([]);
  const [currentCategories, setCurrentCategories] = useState([]);
  const [checkedState, setCheckedState] = useState([]);

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

  // SET CATEGORIES FILTER
  useEffect(() => {
    setCheckedState(new Array(categories.length).fill(true))
  }, [categories])

  // SET CURRENT SHOP ITEMS
  useEffect(() => {
    setCurrentShopItems(shopItems)
  }, [shopItems])

  // SHOW OR HIDE FILTER
  const hideCategories = () => {
    if (filterIsHidden) {
      setFilterIsHidden(false);
      setShowOrHide("Hide");
    }
    if (!filterIsHidden) {
      setFilterIsHidden(true);
      setShowOrHide("Show");
    }
  }

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
    <div className="App container-fluid bg-white text-center bg-slate-100 dark:bg-slate-900">
      <header className="App-header">

        
        {/* <h1 className="text-slate-900 dark:text-white text-3xl font-bold underline pt-4 pb-10">
          Mock Online Shop
        </h1> */}

        <img width={250} className="text-slate-900 dark:text-white text-3xl font-bold underline pt-4 pb-10" src={logo} alt="Logo" />

        <div id="filter-bar">
          <button className="toggle-hide text-sm font-bold" onClick={hideCategories}>{showOrHide} categories</button>
          <div className="filter-categories">
            <FilterBar
              filterIsHidden={filterIsHidden}
              categories={categories}
              checkedState={checkedState}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="items container">
          <ShopItems 
            shopItems={shopItems}
            currentCategories={currentCategories}
            currentShopItems={currentShopItems}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
