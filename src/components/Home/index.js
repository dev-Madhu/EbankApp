import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import './index.css'

const Home = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
              alt="website logo"
            />
          </Link>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="home-container">
        <h1 className="head">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
