import React, { useEffect, useState } from 'react'
import {Outlet, Link} from 'react-router-dom'

export default function Sidebar(){

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then((data) => {
      setCategories(data);
      console.log(data);
    });
  },[]);


  const categoryList = categories.map((categoryID) => 
      <Link to={`/categories/${categoryID}`}>{categoryID}</Link>
      ) 

      
    return(
        <>
      
        <div className="content">
        <div id="sidebar">
          <nav>
            {/* <ul>
              <li>
                <Link to={`/products`}>Products</Link>
              </li>
              <li>
                <Link to={`/carts`}>Carts</Link>
              </li>
            </ul> */}

           {categoryList}
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
        </div>
      </>
    )
}