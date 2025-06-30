import { Avatar, Button } from "@mui/material";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import * as Yup from "yup";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import PostCard from "./PostCard";

const validationSchema = Yup.object().shape({
  content: Yup.string().required("Post text is required"),
});

const HomeSection = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [selectImage, setSelectImage] = useState("");

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setUploadImage(true);
    const imgFile = event.target.files[0];
    if (imgFile) {
      formik.setFieldValue("image", imgFile);
      setSelectImage(URL.createObjectURL(imgFile));
    }
    setUploadImage(false);
  };
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-xl font-bold opacity-90 !text-left">Home</h1>
      </section>
      <section className="pb-10">
        <div className="flex space-x-5">
          <Avatar alt="username" />

          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="What is happening?"
                  className={"border-none outline-none text-xl bg-transparent"}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content ? (
                  <span className="text-red-500">{formik.errors.content}</span>
                ) : null}
              </div>
              {/* <div>
                <img src="" alt="" />

            </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#1d9bf0]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                      id=""
                    />
                  </label>
                  <FmdGoodIcon className="text-[#1d9bf0]" />
                  <TagFacesIcon className="text-[#1d9bf0]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      bgcolor: "#1e88e5",
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section >
        {[1,1,1,1,1,1,1].map((item) => (
          <PostCard/>
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
