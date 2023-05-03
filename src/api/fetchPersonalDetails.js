export default async function fetchPersonalDetails(userID) {
  // TODO update path
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/profile?id=${userID}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
