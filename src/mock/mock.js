import dayjs from "dayjs";

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const generateDate = () => {
  const isDate = Boolean(getRandomInteger(0, 1));

  if (!isDate) {
    return null;
  }

  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, `day`).toDate();
};

const routPoints = [`Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const cities = [`Воронеж`, `Воркута`, `Архангельск`, `Тверь`, `Томск`, `Сочи`];

const generateRandomItem = (items) => {

  const randomIndex = getRandomInteger(0, items.length - 1);

  return items[randomIndex];
};

const generatePointOption = () => {
  const optionsName = [`Order uber`, `Add luggage`, `Switch to comfort`, `Rent a car`, `Add breakfast`];
  const optionPoints = [];

  for (let i = 0; i < getRandomInteger(0, 3); i++) {
    optionPoints.push({
      name: generateRandomItem(optionsName),
      cost: `+€ ${getRandomInteger(5, 100)}`,
      isInclude: !!getRandomInteger(),
    });
  }

  return optionPoints;
};

const generateDestination = () => {
  const descriptions = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.`
  ];

  let imagesArr = [];

  for (let i = 0; i < 5; i++) {
    imagesArr.push(`http://picsum.photos/248/152?r=${Math.random()}`);
  }

  return {
    description: generateRandomItem(descriptions),
    images: imagesArr,
  };
};

export const generateTask = () => {
  const dueDate = generateDate();

  return {
    dueDate,
    routPoint: generateRandomItem(routPoints),
    destination: generateRandomItem(cities),
    price: getRandomInteger(2, 99),
    options: generatePointOption(),
    destinationInfo: generateDestination(),
    isFavourite: !!getRandomInteger(),
  };
};
