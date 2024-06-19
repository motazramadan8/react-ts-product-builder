/**
 * This function takes a string, slice it and returns "string + ..."
 * @param {string} text - The input text to be sliced.
 * @param {number} [maxLength=50] - The maximum length before truncation.
 * @returns {string} The sliced text, with an ellipsis (...) appended if truncated.
 */
export function textSlicer(text: string, maxLength: number = 50): string {
  if (text.length >= maxLength) return `${text.slice(0, maxLength)}...`;
  else return text;
}

/**
 * This function takes a price and format it
 * @param {string} X - The numeric string to be formatted
 * @returns {string} A formatted version of the input numeric string with comma as thousand separator
 */
export function numberWithComma(x: string): string {
  return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
