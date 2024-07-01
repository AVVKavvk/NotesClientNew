import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import NotesBlackBox from "./NotesBlackBox";
import DummyBox from "../Constant/DummyBox";
import { useNavigate } from "react-router-dom";

function Sem5() {
  const [data, setData] = useState([]);
  const [isDummy, setIsDummy] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await axiosClient.post("/sem5/get/notes");
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
  // if (isDummy) return ;
  return <>{isDummy ? <DummyBox len={5} /> : <NotesBlackBox data={data} />}</>;
}

export default Sem5;
