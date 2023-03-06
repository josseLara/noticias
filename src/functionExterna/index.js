export async function ObtenerDatos(type,country){
     let data =  { type: type,country : country };
     const url = 'http://localhost:3000/api/datos';
     const options = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify( data )
     };
   
     let datos = await fetch( url,options );
     let datoss = await datos.json();
     console.log(typeof datoss);
     return datoss;
   }