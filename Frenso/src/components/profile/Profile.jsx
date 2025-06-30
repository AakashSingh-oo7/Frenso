import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PostCard from "../homesection/PostCard";
import ProfileModal from "./ProfileModal";
const Profile = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === "4") {
      console.log("liked posts");
    } else if (newValue === "1") {
      console.log("users posts");
    }
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const [openProfileModal, setOpenProfileModal] = React.useState(false);
  const handleOpenProfileModal = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);
  const handleFollowUser = () => {
    console.log("Follow User");
  };

  return (
    <div className="transform -translate-x-[30px]">
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95 bg-white px-4 py-3">
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="text-xl font-bold opacity-90 ml-5">XYZ</h1>
      </section>

      <section className="relative w-full">
        <img
          className="w-full h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2025/05/14/10/09/bridge-9599215_960_720.jpg"
          alt=""
        />

        <div className="absolute left-6 bottom-[-4rem]">
          <Avatar
            src="#"
            sx={{
              width: "10rem",
              height: "10rem",
              border: "4px solid white",
            }}
            className="transform duration-300 hover:scale-110"
          />
        </div>
      </section>

      <div className="flex justify-end w-full mt-4">
        {true ? (
          <Button
            onClick={handleOpenProfileModal}
            className="rounded-full"
            variant="contained"
            sx={{ borderRadius: "20px" }}
          >
            Edit Profile
          </Button>
        ) : (
          <Button
            onClick={handleFollowUser}
            className="rounded-full"
            variant="contained"
            sx={{ borderRadius: "20px" }}
          >
            {true ? "Follow" : "UnFollow"}
          </Button>
        )}
      </div>
      <div className="ml-10 mt-5">
        <div className="flex items-center ">
          <h1 className="font-bold text-lg">XYZ</h1>
          {true && <VerifiedUserIcon className="text-blue-500 ml-2" />}
        </div>
        <h1 className="text-gray-500">@XYZ</h1>
      </div>
      <div className="mt-2 space-y-3 ml-10">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="py-1 flex space-x-5">
          <div className="flex items-center text-gray-500">
            <BusinessCenterIcon />
            <p className="ml-2">Education</p>
          </div>

          <div className="flex items-center text-gray-500">
            <LocationOnIcon />
            <p className="ml-2">India</p>
          </div>
          <div className="flex items-center text-gray-500">
            <CalendarMonthIcon />
            <p className="ml-2">Joined jun 2020</p>
          </div>
        </div>
        <div className="flex space-x-5 items-center">
          <div className="flex items-center space-x-1 font-semibold">
            <span>50</span>
            <span className="text-gray-500">Following</span>
          </div>
          <div className="flex items-center space-x-1 font-semibold">
            <span>590</span>
            <span className="text-gray-500">Followers</span>
          </div>
        </div>
      </div>
      <section className="py-5">
        {" "}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Posts" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">{[1,1,1,1,1,1].map((item)=><PostCard />)}</TabPanel>
            <TabPanel value="2">User's Replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
};

export default Profile;
