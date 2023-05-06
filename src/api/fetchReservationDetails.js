export default async function fetchReservationDetails() {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/reservations`, {
    method: "GET",
    credentials: "include",
  });

  const returnMessage = await res.json();
  return returnMessage;
}
