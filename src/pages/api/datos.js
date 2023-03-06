
export default async function handler(req, res) {
     console.log('type:' + req.body.country)
     const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=${req.body.country}&pageSize=40&category=${req.body.type}&apiKey=ce68154e45014bfdb3dc80fa072509c4`);
     const data = await apiResponse.json();
      // console.log(data)
     res.status(200).json(data);
   }
   