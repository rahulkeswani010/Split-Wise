import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const NavLinks = () => {
  return (
    <div>
      <Link to={"/settings"}>
        <Button variant={"error"}>Settings</Button>
      </Link>
    </div>
  );
};

export default NavLinks;
