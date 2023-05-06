export default async function fetchSingleReservation() {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/reservations/64558adaeda6b4dd91e98f3c`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
