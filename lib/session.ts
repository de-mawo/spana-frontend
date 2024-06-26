import { Session } from "@/types";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/session`, {
      method: "GET",
      credentials: "include",
      headers: { Cookie: cookies().toString() },
    });

    if (!res.ok) {
      return null;
    }

    const session: Session = await res.json();

    return session;
  } catch (error) {
    console.error("Error fetching user:", error);
    console.log(error);

    return error;
  }
}
