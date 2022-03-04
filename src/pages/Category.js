import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import NotFound from '../pages/NotFound';

const Category = () => {

    let { currentCategory } = useParams();

    const [categoryItems, setCategoryItems] = useState(null);
    const [categories, setCategories] = useState([])

    // API CALL
    // FETCH ALL PRODUCTS
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => setCategoryItems(json))
    }, [])

    // FETCH CATEGORIES
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => setCategories(json))
    }, [])

    function alphanumeric(word) {
        return word.replace(/\W/g, '');
    }

    if (!categoryItems) {
        return (
            <main>Loading items</main>
        )
    } else if (!categories
            .map(cat => alphanumeric(cat))
            .includes(currentCategory)) {
        console.log(categoryItems)

        return <NotFound />
    }

    

    return (
        <div className="mt-6 mb-10">
            <div className="group relative grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {categoryItems
                    .filter((item) => 
                        alphanumeric(item.category) === currentCategory ? true : false
                    )
                    .map(item =>
                    <ItemCard key={item.id} item={item} />
                )}
          </div>
        </div>
    )
}

export default Category;