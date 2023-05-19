export default function convertDate(dateString) {
    const date = new Date(dateString);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    return `${hours} hours and ${minutes} minutes`;
  }
  