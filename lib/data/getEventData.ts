import { Events } from "@/types";
import { cookies } from "next/headers";


export async function getAllEventsData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/event`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

    if (!res.ok) {
      return [];
    }

    const events: Events[] = await res.json();

    return [...events];
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}

export async function getUserEventsData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/event/myEvent`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

    if (!res.ok) {
      return [];
    }

    const events: Events[] = await res.json();

    return [...events];
  } catch (error) {
    console.error("Error fetching projects:", error);
    console.log(error);

    return;
  }
}