export default async function fetchSingleReservation(reservationId) {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/reservations/${reservationId}`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
