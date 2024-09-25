// /lib/timeUtils.js
// Utility function to round time to the nearest 15 minutes
export function roundToNearest15Minutes(time) {
  const [hour, minute] = time.split(":").map(Number);

  // Round minutes to the nearest 15-minute increment
  const roundedMinutes = Math.round(minute / 15) * 15;

  // Adjust for cases where rounding exceeds 59 minutes
  if (roundedMinutes === 60) {
    return `${(hour + 1).toString().padStart(2, "0")}:00`; // Increment hour
  }

  return `${hour.toString().padStart(2, "0")}:${roundedMinutes
    .toString()
    .padStart(2, "0")}`;
}
