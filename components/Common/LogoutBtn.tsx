"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { TbLogout2 } from "react-icons/tb";

const LogoutBtn = () => {
  const router = useRouter();

  async function logout() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/logout`,
      );
      if (res.ok) {
        toast.error("User Logged out");
        router.refresh();
      }
    } catch (error) {
      console.log("An error occurred:", error);
      toast.error("An Unexpected error occured");
    }
  }
  return (
    <button
      className=" p-1  bg-blue-600 text-white rounded-full dark:bg-slate-600"
      onClick={logout}
    >
      <TbLogout2 size={24} />
    </button>
  );
};

export default LogoutBtn;
