/*
    Slug Generator

    Given a string, return a URL-friendly version of the string using the following constraints:

        All letters should be lowercase.
        All characters that are not letters, numbers, or spaces should be removed.
        All spaces should be replaced with the URL-encoded space code %20.
        Consecutive spaces should be replaced with a single %20.
        The returned string should not have leading or trailing %20.


*/

function generateSlug(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
  return str.toLowerCase().replace(/[^0-9a-z ]/g, '').trim().replace(/\s+/g, '%20');
}
export default generateSlug;