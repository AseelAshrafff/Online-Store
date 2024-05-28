let allData=[];
getData();
async function getData()
{
 let myData= await fetch(`https://fakestoreapi.com/products`);
 let finalResult= await myData.json();
 allData=finalResult;
 displayData();
//  console.log(allData);
}
//-----------------------------------------------------------------
function displayData(){
let dataContainer=``;
for(let i=0; i<allData.length; i++){
dataContainer+=`   
<div class="card" style="width: 18rem;">
  <img src="${allData[i].image}" class="card-img-top" alt="Product Image">
  <div class="card-body">
  <h5 class="card-title">${allData[i].title.substring(0, 50)}</h5>
  <p class="card-text">${allData[i].description.substring(0, 100)}</p>
  </div>
</div>`
}
document.getElementById('card-container').innerHTML=dataContainer;
}
//--------------------------------------------------------------------
function searchData(term){
  if (!allData.length) {
    console.log('Data not yet fetched.');
    return;
}
  console.log(`Search term: ${term}`); // Log the search term
  let matchedProducts = [];
  for (let i = 0; i < allData.length; i++) {
      console.log(`Checking title: ${allData[i].title}`); // Log each title
      if (allData[i].title.toLowerCase().includes(term.toLowerCase())) {
          matchedProducts.push(allData[i]);
      }
      console.log(`Checking title: ${allData[i].title}`);
  }
  
  console.log(`Matched products:`, matchedProducts);
}
searchData("p");