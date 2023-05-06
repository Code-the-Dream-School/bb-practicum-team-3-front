export default async function fetchDeleteReservation(reservationId) {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/reservations/${reservationId}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
