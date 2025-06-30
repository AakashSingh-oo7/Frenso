import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button } from "@mui/material";
const RightPart = () => {
  const handleChangeTheme = () => {
    console.log("Change theme clicked");
  };
  return (
    <div className="py-5 top-0">
      <div className="relative flex items-center">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon className="text-gray-500" />
        </div>
        <Brightness4Icon
          onClick={handleChangeTheme}
          className="ml-3 cursor-pointer"
        />
      </div>
      <section className="my-5">
        <h1 className="text-xl font-bold">Get Verified</h1>
        <h1 className="font-bold my-2">Subscribe to Unlock new features</h1>
        <Button
          variant="contained"
          sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}
        >
          Get Varified
        </Button>
      </section>
      <section className="mt-7 space-y-5">
        <h1 className="font-bold text-xl py-1">What's happening?</h1>
        <div>
          <p className="text-sm">Fifa World cup 2024</p>
          <p className="font-bold">Philippines vs Switzerland</p>
         {[1,1,1,1,1].map((item) => (
           <div className="flex justify-between w-full">
             <div>
               <p>Entertainment - Trending</p>
               <p className="font-bold">#TheMarveles</p>
               <p>34.3k posts</p>
             </div>
            <MoreHorizIcon />
          </div>))}
        </div>
      </section>
    </div>
  );
};

export default RightPart;
