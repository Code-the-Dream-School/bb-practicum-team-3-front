export default async function fetchDeleteReservation(reservationID) {
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}/reservations/${reservationID}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  const returnMessage = await res.json();
  return returnMessage;
}
