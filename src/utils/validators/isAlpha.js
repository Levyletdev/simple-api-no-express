function isAlpha(value) {
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿÇç\s]+$/;
  return regex.test(value);
}

module.exports = isAlpha;
