import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import {  useNavigate } from "react-router-dom";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import NotesBlackBox from "./NotesBlackBox";
import DummyBox from "../Constant/DummyBox";

function Sem2() {
  const [data, setData] = useState([]);
  const [isDummy, setIsDummy] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem2/get/notes");
      setData(res.result);
      setIsDummy(false);
    } catch (err) {}
  };

  useEffect(() => {
    const token = getItem(Key_Access_Token);
    if (token && token !== 10) {
      setIsAuthenticated(true);
      getData();
    }
    else {
      navigate("/auth/login");
    }
  }, []);

  // if (!isAuthenticated) return <Login />;
  return <>{isDummy ? <DummyBox len={20} /> : <NotesBlackBox data={data} />}</>;
}

export default Sem2;
