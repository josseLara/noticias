
export default async function handler(req, res) {
     const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=${req.body.country}&category=${req.body.type}&page=${req.body.numberPagination}&apiKey=${req.body.API_KEY}&pageSize=20`);
     const data = await apiResponse.json();

     res.status(200).json(data);
   }
   


   