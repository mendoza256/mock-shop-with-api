import React from 'react';
import { NavLink } from 'react-router-dom';
import Category from '../pages/Category.js'

const alphanumeric = (word) => {
    return word.replace(/\W/g, '')
}

// const { path, url} = useRouteMatch()


export default function Navbar(props) {
    return (
        <div className="w-screen py-2 mb-4 bg-blue-800 flex justify-center">
            <div className="container flex justify-evenly text-sm font-bold">
                
                <div className="categories container flex justify-between gap-8">
                    {props.categories.map(category => {
                        return (
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                    color: isActive ? "gray" : "",
                                    };
                                }}   
                                to={`/category/${alphanumeric(category)}`}
                                element={Category}
                                key={`navlink-${category}`}
                                >{props.capitalize(category)}
                            </NavLink>
                        )
                    })}
                </div>
                <div className="cart-link container flex justify-end">
                    <div className="cart">
                        Cart
                    </div>
                </div>
                
            </div>
        </div>
    )
}