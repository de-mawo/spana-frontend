import { cookies } from "next/headers";

export async function getUserBalances() {
  return {};
}

export async function getAllBalances() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/balance`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

    if (!res.ok) {
      return null;
    }

    const balances = await res.json();

    return balances;
  } catch (error) {
    console.error("Error fetching user:", error);
    console.log(error);

    return error;
  }
}
