"use client";

import { TbLogout2 } from "react-icons/tb";


const LogoutBtn = () => {
  return (
    <button
      className=" p-1  bg-blue-600 text-white rounded-full dark:bg-slate-600"
     
    >
      <TbLogout2 size={24} />
    </button>
  );
};

export default LogoutBtn;