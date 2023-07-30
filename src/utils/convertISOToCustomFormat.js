const convertISOToCustomFormat = (isoDateString) => {
  try {
    // Convert ISO time to Date object
    const dateObject = new Date(isoDateString);
    // Get the current time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - dateObject;

    // Calculate the time difference in hours
    const minuteDifference = parseInt(timeDifference / (1000 * 60));
    const hoursDifference = parseInt(timeDifference / (1000 * 60 * 60));
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    if (minuteDifference < 60) {
      return `${minuteDifference}m left`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference}h left`;
    } else {
      return formattedDate;
    }
  } catch (error) {
    return "Invalid date format. Please provide a valid ISO 8601 date string.";
  }
};

export default convertISOToCustomFormat;
