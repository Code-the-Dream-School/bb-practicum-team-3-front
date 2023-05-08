export default async function fetchPersonalDetails() {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/user`, {
    method: "GET",
    credentials: "include",
  });

  const returnMessage = await res.json();
  return returnMessage;
}
