export const CreateDate = (date) => {
  const newDate = date.split("-");

  return {
    day: newDate[2],
    month: newDate[1],
    year: newDate[0],
  };
};
