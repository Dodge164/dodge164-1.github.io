export default function fixCarNumber(carNumber) {
  if (carNumber) {
    const number = carNumber.toUpperCase();

    const reg = number.match(
      /^[АВЕКМНОРСТУХA-Z]\d{3}(?<!000)[АВЕКМНОРСТУХA-Z]{2}\d{2,3}$/iu,
    );
    if (reg) {
      const pattern = new RegExp(
        '(^[АВЕКМНОРСТУХA-Z])(\\d{3})([АВЕКМНОРСТУХA-Z]{2})(\\d{2,3})',
      );
      const str = reg[0];
      const rep = str.replace(pattern, '$1 $2 $3 $4');
      return rep;
    }
  }
  return carNumber;
}
