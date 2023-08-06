const selectStatusBgColor = (value) => {
  switch (value) {
    case "Start":
      return "bg-red-200";
    case "In Process":
      return "bg-teal-200";
    case "On Hold":
      return "bg-orange-200";
    case "Done":
      return "bg-green-200";
    default:
      return "bg-red-200";
  }
};

export default selectStatusBgColor;
