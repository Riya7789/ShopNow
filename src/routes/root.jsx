import { Outlet } from 'react-router-dom'
import Header from './header'

export default function Root() {
    return (
        <>
            <Header />
            {/* <div id="sidebar">
          <nav>
            <ul>
              <li>
                <Link to={`/products`}>Products</Link>
              </li>
              <li>
                <Link to={`/carts`}>Carts</Link>
              </li>
            </ul>
          </nav>
        </div> */}
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}
