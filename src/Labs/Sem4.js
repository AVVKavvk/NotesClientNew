import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import {useNavigate } from "react-router-dom";
import DummyBox from "../Constant/DummyBox";
import LabsBlackBox from './LabsBlackBox'
import { Key_Access_Token, getItem } from "../utils/localStorage";
function Sem4() {
  const [data, setData] = useState([]);
  const [isDummy, setIsDummy] = useState(true);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem4/get/lab", { sem: 1 });
      setData(res.result);
      setIsDummy(false);
    } catch (err) {}
  };

  useEffect(() => {
    const token = getItem(Key_Access_Token);
    if (token && token !== 10) {
      getData();
    } else {
      navigate("/auth/login");
    }
  }, []);
  if (isDummy) return <DummyBox len={6} />;
  return <LabsBlackBox data={data} />;
}

export default Sem4;
