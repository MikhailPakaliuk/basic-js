const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity == "string" && /^(\-|\+)?([0-9]+)([.,]?)([0-9]*)$/.test(sampleActivity) && parseInt(sampleActivity, 10) > 0 && parseInt(sampleActivity, 10) < 15) {
    return Math.ceil((Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / (0.693 / HALF_LIFE_PERIOD));
  } else {
    return false;
  }
};
