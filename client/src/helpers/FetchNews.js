export async function ObtenerDatos(type, country, numberPagination) {
  let data = { type: type, country: country, numberPagination: numberPagination, API_KEY: process.env.API_KEY };
  const url = 'http://localhost:3000/api/datos';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  let datos = await fetch(url, options);
  let datoss = await datos.json();
  return datoss;
}