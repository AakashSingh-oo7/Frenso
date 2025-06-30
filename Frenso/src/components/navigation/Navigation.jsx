import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigationmenu } from "./NavigationMenu";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    handleClose();
  };

  return (
<div className="h-screen sticky top-0 px-4 flex flex-col w-full">
  {/* Top Logo */}
  <div className="py-5">
    <img src="/logo.svg" alt="Frenso Logo" className="h-[40px] w-[40px]" />
  </div>

  {/* Navigation Items */}
  <div className="space-y-6">
    {navigationmenu.map((item) => (
      <div
        key={item.title}
        className="cursor-pointer flex space-x-3 items-center"
        onClick={() =>
          item.title === "Profile"
            ? navigate(`/profile/5`)
            : navigate(item.path)
        }
      >
        {item.icon}
        <p className="text-xl">{item.title}</p>
      </div>
    ))}
  </div>

  {/* Post Button */}
  <div className="py-10 space-y-6">
    <Button
      sx={{
        width: "100%",
        borderRadius: "29px",
        py: "15px",
        bgcolor: "#1e88e5",
      }}
      variant="contained"
    >
      Post
    </Button>
  </div>

  {/* Bottom Section (Avatar) */}
  <div className="flex items-center space-x-3">
    <div className="flex items-center space-x-3">
      <Avatar
        alt="username"
        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
      />
      <div className="flex flex-col text-left">
        <span className="font-medium leading-tight">XYZ</span>
        <span className="opacity-70 text-sm">@xyz</span>
      </div>

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  </div>
</div>
  );
}

export default Navigation;
