
export default async function handler(req, res) {
     const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=${req.body.country}&pageSize=40&category=${req.body.type}&apiKey=${req.body.API_KEY}`);
     const data = await apiResponse.json();
      // console.log(data)
     res.status(200).json(data);
   }
   