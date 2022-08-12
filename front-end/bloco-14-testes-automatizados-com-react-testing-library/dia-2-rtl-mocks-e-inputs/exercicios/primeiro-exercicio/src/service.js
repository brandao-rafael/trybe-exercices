const generateRandomNumber = () => Math.floor(Math.random() * 101);

const letUpperCase = (string) => string.toUpperCase();

const firstLetter = (string) => Array.from(string)[0];

const concatString = (str1, str2) => `${str1} ${str2}`;

const fetchDog = () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result.ok ? Promise.resolve(result) : Promise.reject(result));
}
module.exports = { generateRandomNumber, letUpperCase, firstLetter, concatString, fetchDog };