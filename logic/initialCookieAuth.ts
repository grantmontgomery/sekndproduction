export default async function initialCookieAuth() {
  const url: string =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/handleAuth"
      : "";
  try {
    const initialCookieData = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
      body: JSON.stringify({}),
    });
    return initialCookieData;
  } catch (error) {
    return error;
  }
}
