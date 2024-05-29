let allData=[];
let searchInput= document.getElementById('searchInput');
let searchBtn= document.getElementById('searchBtn');
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
function displayData(products=allData){
let dataContainer=``;
for(let i=0; i<products.length; i++){
dataContainer+=`   
<div class="card" style="width: 18rem;">
  <img src="${products[i].image}" class="card-img-top" alt="Product Image">
  <div class="card-body">
  <h5 class="card-title">${products[i].title.substring(0, 50)}</h5>
  <p class="card-text">${products[i].description.substring(0, 100)}</p>
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
  // console.log(`Search term: ${term}`); 
  let matchedProducts = [];
  for (let i = 0; i < allData.length; i++) {
      // console.log(`Checking title: ${allData[i].title}`); 
      if (allData[i].title.toLowerCase().includes(term.toLowerCase())) {
          matchedProducts.push(allData[i]);
      }
      // console.log(`Checking title: ${allData[i].title}`);
  }
  displayData(matchedProducts);
  // console.log(`Matched products:`, matchedProducts);
}
searchBtn.addEventListener('click', function(event){
  event.preventDefault();
  searchData(searchInput.value);
})
