import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Image } from 'semantic-ui-react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeItem = this.props.activeItem;

    let loginComponent = null;
    if (this.props.loginStatus) {
      loginComponent = (
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="Home"
              active={activeItem === 'Home'}
              onClick={this.props.handleNavItemClick}
            >
              <Image src='https://c1.staticflickr.com/5/4793/38906403910_2e18fe17c6_s.jpg' avatar />
            </Menu.Item>
          </Link>
          <Link to="/faves">
            <Menu.Item
              name="Favorites"
              active={activeItem === 'Favorites'}
              onClick={this.props.handleNavItemClick}
            >
            <Image src='https://c1.staticflickr.com/5/4781/40676509612_48ba3256be_s.jpg' avatar />
            </Menu.Item>
          </Link>
          <Menu.Menu position='right'>
            <Link to="/cart">
              <Menu.Item
                className="menuItem"
                name="Cart"
                active={activeItem === 'Cart'}
                onClick={this.props.handleNavItemClick}
              />
            </Link>
            <Menu.Item
              className="menuItem"
              name="Logout"
              active={activeItem === 'Logout'}
              onClick={this.props.handleNavItemClick}
              href="/logout"
            />
          </Menu.Menu>
        </Menu>
      )
    } else {
      loginComponent = (
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="Home"
              active={activeItem === 'Home'}
              onClick={this.props.handleNavItemClick}
            >
              <Image src='https://c1.staticflickr.com/5/4793/38906403910_2e18fe17c6_s.jpg' avatar />
            </Menu.Item>
          </Link>
          <Menu.Menu position='right'>
            <Link to="/cart">
              <Menu.Item
                className="menuItem"
                name="Cart"
                active={activeItem === 'Cart'}
                onClick={this.props.handleNavItemClick}
              />
            </Link>
            <Link to="/login">
              <Menu.Item
                className="menuItem"
                name="Login"
                active={activeItem === 'Login'}
                onClick={this.props.handleNavItemClick}
              />
            </Link>
            <Link to="/signup">
              <Menu.Item
                className="menuItem"
                name="Signup"
                active={activeItem === 'Signup'}
                onClick={this.props.handleNavItemClick}
              />
            </Link>
          </Menu.Menu>
        </Menu>
      )
    }

    return (
      <div>
        {loginComponent}
      </div>
    );
  }
}

export default Nav;