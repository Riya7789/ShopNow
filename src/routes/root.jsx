import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Root() {
    return (
      <>
      <div className="header">
        <h1>Project</h1>
      </div>
      <div className="content">
        
        <div id="sidebar">
          <nav>

            <ul>
              <li>
                <Link to={`/products/1`}>Products</Link>
              </li>
              <li>
                <Link to={`/carts/1`}>Carts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }