export function getCurrentDateAndTime() {
  const now = new Date();
  const future = new Date(now.getTime() + 5 * 60000);

  const formattedDate = now.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const formattedTime = future.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return { formattedDate, formattedTime };
}
