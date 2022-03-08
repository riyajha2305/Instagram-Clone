import React, { useContext, useRef, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../App";
import M from "materialize-css";
//icons
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import "./screens/FontStyles.css";
import "./Navbar.css";

const NavBar = () => {
  const searchModal = useRef(null);
  const [search, setSearch] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    M.Modal.init(searchModal.current);
  }, []);
  const renderList = () => {
    if (state) {
      return [
        <li key="1" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <i
            data-target="modal1"
            className="large material-icons modal-trigger"
            style={{ color: "black" }}
          >
            <i>
              <BsSearch size=" 1.75rem" />
            </i>
          </i>
        </li>,
        <li key="2" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <Link to="/">
            <i>
              <AiFillHome size=" 1.75rem" />
            </i>
          </Link>
        </li>,

        <li key="4" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <Link to="/create">
            <i>
              <BsPlusSquare size=" 1.75rem" />
            </i>
          </Link>
        </li>,
        <li key="5" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <Link to="/myfollowingpost">
            <i>
              <HiUsers size=" 1.75rem" />
            </i>
          </Link>
        </li>,
        <li
          key="3"
          style={{ paddingLeft: "5px", height: "65px", paddingRight: "5px" }}
        >
          <Link
            style={{
              display: " flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
            to="/profile"
          >
            <img
              src={state.pic}
              style={{
                width: "37px",
                height: "37px",
                borderRadius: "50px",
                objectFit: "cover",
                overflow: "hidden",
              }}
              alt="profile"
            />
          </Link>
        </li>,
        <li key="6" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
          <button
            className="btn logout"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li key="6">
          <Link to="/signin">Sign in</Link>
        </li>,
        <li key="7">
          <Link to="/signup">Sign up</Link>
        </li>,
      ];
    }
  };

  const fetchUsers = (query) => {
    setSearch(query);
    fetch("/search-users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setUserDetails(results.user);
      });
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
      <div
        id="modal1"
        class="modal"
        ref={searchModal}
        style={{ color: "black" }}
      >
        <div className="modal-content">
          <input
            type="text"
            placeholder="search users"
            value={search}
            onChange={(e) => fetchUsers(e.target.value)}
          />
          <ul className="collection">
            {userDetails.map((item) => {
              return (
                <Link
                  to={
                    item._id !== state._id ? "/profile/" + item._id : "/profile"
                  }
                  onClick={() => {
                    M.Modal.getInstance(searchModal.current).close();
                    setSearch("");
                  }}
                >
                  <li className="collection-item">{item.email}</li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="modal-footer">
          <button
            className="modal-close waves-effect waves-green btn-flat"
            onClick={() => setSearch("")}
          >
            close
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
