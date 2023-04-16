export default async function fetchSignin(signInData) {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(signInData),
  });

  const returnMessage = await res.json();
  return returnMessage;
}
