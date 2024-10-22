export function formatDate(date: Date | undefined): string {
  if (!date) {
    return "";
  }
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
