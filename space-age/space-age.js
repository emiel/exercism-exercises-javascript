const PERIOD_YEARS_MAP = new Map([
  ["mercury", 0.2408467],
  ["venus", 0.61519726],
  ["earth", 1.0],
  ["mars", 1.8808158],
  ["jupiter", 11.862615],
  ["saturn", 29.447498],
  ["uranus", 84.016846],
  ["neptune", 164.79132],
]);

const SECS_IN_EARTH_YEAR = 365.25 * 24 * 60 * 60;

export const age = (planet, ageSecs) => {
  // Obtain age on earth (age in seconds / seconds in earth year) then divivde
  // by the orbital period for the planet.
  const planetAge = ageSecs / SECS_IN_EARTH_YEAR / PERIOD_YEARS_MAP.get(planet);
  // Round to two decimal places.
  return Math.round(planetAge * 100) / 100;
};
