export default async function fetchCreateReservation(reservationData) {
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(reservationData),
  });

  const returnMessage = await res.json();
  return returnMessage;
}
