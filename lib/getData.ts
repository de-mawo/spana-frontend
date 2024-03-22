"use server";

import { cookies } from "next/headers";

export async function getAllEvents() {
  try {
    const res = await fetch("http://localhost:4000/api/v1/events", {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    const events = await res.json();
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    console.log(error);

    return error;
  }
}
