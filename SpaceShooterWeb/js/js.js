window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsediii');
    
  
   
   fetch('./json/partidas.json')
   .then(function(response){
       return response.json();
   })
   .then(function(data){
       console.log(data);
       var sorted = data.partidas.sort(function(a, b) {return b.score - a.score});
       console.log(sorted);
       for(let i=0; i < data.partidas.length;i++){
        document.getElementById("table").innerHTML +=
        '<tr>'+
       ' <th scope="row">'+(i+1)+'</th>'+
        '<td>'+data.partidas[i].name+'</td>'+
        '<td>'+data.partidas[i].score+'</td>'+
        '<td>'+data.partidas[i].date+'</td>'+
        '</tr>';
    }
   })
   .catch(function (err){
       console.log(err);
   })
  
});