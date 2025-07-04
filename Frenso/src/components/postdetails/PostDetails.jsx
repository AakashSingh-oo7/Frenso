import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import PostCard from "../homesection/PostCard";
import { Divider } from "@mui/material";
const PostDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <React.Fragment>
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95 bg-white px-4 py-3">
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="text-xl font-bold opacity-90 ml-5">Details</h1>
      </section>

      <section>
        <PostCard />
        <Divider sx={{margin:"2rem 0rem"}}/>

      </section>
      <section>
        {[1, 1, 1, 1, 1, 1].map((item) => <PostCard />)}
      </section>
    </React.Fragment>
  );
};

export default PostDetails;
