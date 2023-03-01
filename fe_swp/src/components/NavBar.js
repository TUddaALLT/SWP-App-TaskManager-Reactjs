import { Link, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { GoFileDirectory } from "react-icons/go";
import { RiAddFill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";

import "../styles/NavBar.css";
const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <ul className="navbar-menu">
        <li>
          <LinkRouter to={"/"}>
            <Link
              component="button"
              underline="none"
              color={"dark"}
              className="link"
            >
              <Typography variant="subtitle1">
                <BiHomeAlt className="icons-nav" />
                <span>Dashboard</span>
              </Typography>
            </Link>
          </LinkRouter>
        </li>

        <li>
          <LinkRouter to={"/calendar"}>
            <Link
              component="button"
              underline="none"
              color={"dark"}
              className="link"
            >
              <Typography variant="subtitle1">
                <FaRegCalendarAlt className="icons-nav" />
                <span>Calendar</span>
              </Typography>
            </Link>
          </LinkRouter>
        </li>
        <li>
          <Link
            component="button"
            underline="none"
            color={"dark"}
            className="link"
          >
            <Typography variant="subtitle1">
              <BsFileEarmarkBarGraph className="icons-nav" />
              <span>Report</span>
              <AiOutlineDown className="icons-nav" />
            </Typography>
          </Link>
        </li>
        <li>
          <Link
            component="button"
            underline="none"
            color={"dark"}
            className="link"
          >
            <Typography variant="subtitle1">
              <GoFileDirectory className="icons-nav" />
              <span>Your Project</span>
              <RiAddFill className="icons-nav" />
              <AiOutlineDown className="icons-nav" />
            </Typography>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
