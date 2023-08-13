import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  // const { total_item } = useSelector((state) => state.CartItems);

  const [menuIcon, setMenuIcon] = useState();

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists" style={{ listStyleType: "none", margin: "0" }} >
          <li>
            <NavLink
              to="/"
              className="navbar-link "
            >
              Movies
            </NavLink>
          </li>

          <li>
            <NavLink to="/wishlist" className="navbar-link cart-trolley--link">
              Watch List
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};
const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .user-login--name {
    text-transform: capitalize;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 1.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      /* transform-origin: top; */
      transition: all 3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;

      .navbar-link {
        font-size: 1rem;
      }
    }
    .cart-trolley--link {
      position: relative;
    }

    .user-logout,
    .user-login {
      font-size: 2.2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;
export default Navbar;
