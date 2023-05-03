export default async function fetchConfirmHotel(confirmationData) {
  console.log(confirmationData);
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(confirmationData),
  });

  const returnMessage = await res.json();
  console.log(returnMessage);
  return returnMessage;
}
