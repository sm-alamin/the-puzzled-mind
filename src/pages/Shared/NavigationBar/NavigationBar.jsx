import React, { useContext } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const renderUserSection = () => {
    if (user) {
      return (
        <Dropdown arrowIcon={false} inline={true} label={<Avatar alt="User settings" img={user.photoURL} rounded={true} />}>
          <Dropdown.Header>
            <span className="block text-sm">{user.displayName}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
        </Dropdown>
      );
    } else {
      return (
        <NavLink to="/login" className="login-button">
          Login
        </NavLink>
      );
    }
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <img src="/puzzled.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">The Puzzled Mind</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {renderUserSection()}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-toys"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          All Toys
        </NavLink>
        <NavLink
          to="/my-toys"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          My Toys
        </NavLink>
        <NavLink
          to="/add-toy"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Add a Toy
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Blogs
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
