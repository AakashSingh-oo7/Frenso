import React, { useState } from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useNavigate } from "react-router-dom";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ReplyModel from "./ReplyModel";

const PostCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

    const [openReplyModal, setOpenReplyModal] = React.useState(false);
    const handleOpenReplyModal = () => setOpenReplyModal(true);
    const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeletePost = () => {
    console.log("Post deleted");
    handleClose();
  };



  const handleCreateRePost = () => {
    console.log("Create RePost");
  };
  const handleLikePost = () => {
    console.log("Like Post");
  };
  return (
    <React.Fragment>
      {/* <div className='flex items-center font-semibold text-grey-700 py-2'>
            <RepeatIcon />
            <p>You RePost</p>
        </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate("/profile/6")}
          className="cursor-pointer"
          alt="username"
          src="#"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">XYZ</span>
              <span className="text-gray-500">@xyz .2min</span>
              <VerifiedUserIcon className="text-blue-500" />
            </div>
            <div>
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
                <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
                <MenuItem onClick={handleDeletePost}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div
              onClick={() => navigate(`/post/${1}`)}
              className="cursor-pointer"
            >
              <p className="mb-2 p-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi!
              </p>
              <img
                src="/logo.svg"
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-500">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handleCreateRePost}
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handleLikePost}
                  />
                ) : (
                  <FavoriteBorder
                    className="cursor-pointer"
                    onClick={handleLikePost}
                  />
                )}
                <p>54</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-500">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>43</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-500">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModal}
                />
                <p>43</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModel open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </React.Fragment>
  );
};

export default PostCard;
