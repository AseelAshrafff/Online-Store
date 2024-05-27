let allData=[];
getData();
async function getData()
{
 let myData= await fetch(`https://fakestoreapi.com/products`);
 let finalResult= await myData.json();
 allData=finalResult;
 displayData();
 console.log(allData);
}
//-----------------------------------------------------------------
function displayData(){
let dataContainer=``;
for(let i=0; i<allData.length; i++){
dataContainer+=`   <div class="card" style="width: 18rem;">
<!-- <img src="..." class="card-img-top" alt="..."> -->
<div class="card-body">
  <h5 class="card-title">${allData[i].title}</h5>
  <p class="card-text">${allData[i].description}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
}
document.getElementById('card').innerHTML=dataContainer;
}
