export const CreateDate = (date) => {
  const newDate = date.split("-");
  const monthList = [
    "índiceZero",
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  return {
    day: newDate[2],
    month: newDate[1],
    year: newDate[0],
  };
};
