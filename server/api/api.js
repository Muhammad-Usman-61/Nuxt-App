export default defineEventHandler(async (event) => {
  //handle query params
  //const { name } = getQuery(event);

  //handle post request
  //const { age } = await readBody(event);

  //api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=')

  // return {
  //   message: `Hello  ${name}! you are ${age} years old`  
  // };

  return data;
});
    