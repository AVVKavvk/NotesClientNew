import React from "react";
import {
  adminEmail,
  adminPassword,
  adminToken,
  getItem,
  isAdmin,
} from "../utils/localStorage";

function Vipin() {
  const email = getItem(adminEmail);
  const token = getItem(adminToken);
  const password = adminPassword;

  return <div>Vipin</div>;
}

export default Vipin;
