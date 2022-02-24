export const getColorByPriority = (priority) => {
  switch (priority) {
    case 1:
      return "success.light";
    case 2:
      return "warning.light";
    case 3:
      return "error.light";
    default:
      break;
  }
};

export const formatDate = (pDate) => {
  let date;

  if (!(pDate instanceof Date)) {
    date = new Date(pDate);
  } else {
    date = pDate;
  }

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${year}-${month}-${day} a las ${hours}:${minutes}`;
};
