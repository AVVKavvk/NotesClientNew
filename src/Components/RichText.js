import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Key_Access_Token, getItem } from "../utils/localStorage";
import Login from "./Login";

const RichText = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = getItem(Key_Access_Token);
    if (token && token !== 10) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return <Login />;
  return (
    <>
      <div class="min-h-[50vh] min-w-[350px] ">
        <JoditEditor ref={editor} value={content} tabIndex={1} />
      </div>
    </>
  );
};

export default RichText;
