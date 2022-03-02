import React from 'react';
import ItemCard from './ItemCard';

export default function ShopItems(props) {
    

    if (!props.shopItems) {
        return (
            <div>Items loading...</div>
        )
    }

    if (props.currentCategories.includes(null)) {
        return (
            <div className="mt-6">
            <div className="group relative grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {props.currentShopItems.map(item =>
                    <ItemCard key={item.id} item={item} />
                )}
          </div>
        </div>
        )
    }

    return (
        <div className="mt-6">
            <div className="group relative grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {props.shopItems.map(item =>
                    <ItemCard key={item.id} item={item} />
                )}
          </div>
        </div>
    )
}
