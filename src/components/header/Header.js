import React, { useState } from "react";
import "./_header.scss";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`search/${input}`);
  };

  return (
    <div className="header ">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <img src={logo} alt="" className="header__logo" />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
