// dateFunc.js
export const dateFunc = (blockDate) => {
  const date = new Date(blockDate);
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const day = date.getDate();
  const month = months[date?.getMonth()];
  return { jour: day, mois: month };
};
