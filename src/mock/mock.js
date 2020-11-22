const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const routPoints = ['Transport', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const cities = ['Воронеж', 'Воркута', 'Архангельск', 'Тверь', 'Томск', 'Сочи'];

const generateRandomItem = (items) => {

  const randomIndex = getRandomInteger(0, items.length - 1);

  return items[randomIndex];
};

const generatePointOption = () => {
  const optionsName = ['Order uber', 'Add luggage', 'Switch to comfort', 'Rent a car', 'Add breakfast'];
  const optionPoints = [];

  for (i = 0; i < getRandomInteger(0, 3); i++) {
    optionPoints.push({
      name: generateRandomItem(optionsName),
      cost: `+€ ${generateRandomItem(5, 100)}`,
      isInclude: !!generateRandomItem(),
    });
  }

  return optionPoints;
};

export const generateTask = () => {
  return { 
    routPoint: generateRandomItem(routPoints),
    destination: generateRandomItem(cities),
    options: generatePointOption(),
  };
};