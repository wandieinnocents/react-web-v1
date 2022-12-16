import { Outlet, Link } from "react-router-dom";
import LayoutStyles from '../components/stylesheets/LayoutStyles.css'

const Layout = () => {
  return (
    <div className="center">
      <nav>
        <ul className="listHorizontal">
          <li  >
            <Link to="/"> Home |  </Link>
          </li>
          <li>
            <Link to="/blogs"> Blogs  |</Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

// stylesheet
const styleSheet = {

}

export default Layout;