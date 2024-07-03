import { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { showToast } from "../slice/appConfigSlice";
import { TOAST_SUCCESS } from "../App";
import { useDispatch } from "react-redux";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import Login from "./Login";
import { Link } from "react-router-dom";
const RatingComp = () => {
  const [userInfo, setUserInfo] = useState(0);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState([]);
  const [value, setValue] = useState(2.5);
  const [hover, setHover] = useState(-1);

  const dispatch = useDispatch();
  const SubmitRating = async () => {
    try {
      if (value == null) setValue(0);
      const res = await axiosClient.post("/rating", {
        star: value,
        userInfo,
        review,
      });
      dispatch(
        showToast({
          type: TOAST_SUCCESS,
          message: res.result,
        })
      );
    } catch (err) {}
  };
  const getRating = async () => {
    try {
      const res = await axiosClient.get("/rating");
      setRating(res.result);
    } catch (err) {}
  };
  useEffect(() => {
    getRating();
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = getItem(Key_Access_Token);
    if (token && token !== 10) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className=" overflow-hidden mb-10 mx-3 mt-10">
      {isAuthenticated && (
        <div className=" flex md:flex-row flex-col mx-auto justify-center items-center  border-2 rounded-md max-w-[1200px] gap-5 p-5 shadow-amber-600 shadow-md">
          <div>
            <h2>Add Review</h2>
            <textarea
              value={review}
              onChange={e => setReview(e.target.value)}
              placeholder="Type something here..."
              rows={10}
              style={{
                padding: "10px",
                fontSize: "16px",
                background: "black",
                color: "white",
              }}
              className=" md:w-[500px] w-[300px]"
            />
          </div>
          <div className=" flex flex-col gap-5 mx-auto justify-center items-center">
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
              className=" bg-gray-700 rounded-md p-2 h-10 max-w-[300px]"
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
            </Box>

            <input
              type="text "
              placeholder="Name/MIS"
              className=" bg-black rounded-md text-white px-2 py-3"
              onChange={e => {
                setUserInfo(e.target.value);
              }}
            />
            <button
              onClick={SubmitRating}
              className=" bg-green-600 rounded-md px-3 py-1 text-xl hover:bg-green-700 transition-all duration-300"
            >
              Rate
            </button>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <Link to="/auth/login">
          <button className=" bg-yellow-800 mx-auto  hover:bg-yellow-900 flex justify-center rounded-md px-4 py-2 text-xl w-[150px] ">
            Rate Us
          </button>
        </Link>
      )}
      <h1 className=" mt-10 text-3xl text-center shadow-md shadow-green-500 px-5 mx-5 py-3">
        Reviews
      </h1>
      <div className=" mt-5 grid lg:grid-cols-5 px-6 mb-5  md:grid-cols-3 sm:grid-cols-1 gap-2 mx-auto   ">
        {rating?.map((item, index) => {
          let newReview = "";
          if (item?.review.length > 150) {
            newReview = item?.review.slice(0, 150) + "...";
          } else {
            newReview = item?.review;
          }

          return (
            <div
              className={` flex rounded-md ${
                item?.rating >= 2
                  ? "hover:shadow-green-500"
                  : "hover:shadow-red-500"
              } shadow-md flex-col mx-auto w-[280px] h-[210px] bg-slate-900 gap-3 py-3    flex-wrap max-w-[330px] px-3`}
            >
              <h1 className=" text-xl">{item?.rating} ⭐ </h1>
              <p className=" text-sm">{newReview}</p>
              <h3 className=" text-lg">:- {item?.userInfo}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RatingComp;
