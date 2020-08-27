export const age = (planet, ageInSeconds) => {
  const orbitsPerEarthYear = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }

  const earthSecondsPerDay = 365.25 * 24 * 60 * 60

  return Math.round(ageInSeconds / earthSecondsPerDay / orbitsPerEarthYear[planet] * 1e2) / 1e2
};
