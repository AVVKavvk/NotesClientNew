import React, { useEffect, useState } from "react";
import ll from "../image/p2.svg";
import { axiosClient } from "../utils/axiosClient";
import {  useNavigate } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import DummyBox from "../Constant/DummyBox";
import PaperBlackBox from "./PaperBlackBox";
function Sem2() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isDummy, setIsDummy] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem2/get/paper");
      setData(res.result);
      setIsDummy(false);
    } catch (err) {}
  };

  useEffect(() => {
    const token = getItem(Key_Access_Token);
    if (token && token !== 10) {
      setIsAuthenticated(true);
      getData();
    } else {
      navigate("/auth/login");
    }
  }, []);

  if (isDummy) return <DummyBox len={5} />;
  return <PaperBlackBox data={data} ll={ll} />;
}
export default Sem2;
