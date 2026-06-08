export function fetchAPI(date) {
  let result = [];
  let hours = [17, 18, 19, 20, 21, 22];

  for (let i = 0; i < hours.length; i++) {
    if (Math.random() > 0.5) {
      result.push(`${hours[i]}:00`);
    }
  }

  return result;
}