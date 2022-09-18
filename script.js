//Creat container for RWD
let container=document.createElement("div");
container.setAttribute("class","container");
let row=document.createElement("div");
row.classList.add("row","m-3");

//creat choose box and Go button by DOM 
let div=document.createElement("div");
div.setAttribute("class","input-group");
let select=document.createElement("select");
select.setAttribute("class","custom-select");
select.setAttribute("id","inputGroupSelect04");
select.setAttribute("aria-label","Example select with button addon");

//creat choose option using DOM
let option=document.createElement("option");
option.innerHTML=`Choose your Product`;
let option1=document.createElement("option");
option1.innerHTML=`blush`;
let option2=document.createElement("option");
option2.innerHTML=`bronzer`;
let option3=document.createElement("option");
option3.innerHTML=`eyebrow`;
let option4=document.createElement("option");
option4.innerHTML=`eyeliner`;
let option5=document.createElement("option");
option5.innerHTML=`eyeshadow`;
let option6=document.createElement("option");
option6.innerHTML=`foundation`;
let option7=document.createElement("option");
option7.innerHTML=`lip_liner`;
let option8=document.createElement("option");
option8.innerHTML=`lipstick`;
let option9=document.createElement("option");
option9.innerHTML=`mascara`;
let option10=document.createElement("option");
option10.innerHTML=`nail_polish`;

//Append all choose option into select Tag
select.append(option,option1,option2,option3,option4,option5,option6,option7,option8,option9,option10);

//creat button and addEvent lisener
let div2=document.createElement("div");
div2.setAttribute("class","input-group-append");
let button=document.createElement("button");
button.classList.add("btn","btn-dark")
button.setAttribute("type","button");
button.innerHTML="Go";
button.addEventListener("click",makeup);

//append button,div to row and container
div2.append(button);
div.append(select,div2);
row.append(div);
container.append(row);
document.body.append(container);

//creat asyn await and try and catch to get required data from API
async function makeup(){
    try {
        let product_type=document.getElementById("inputGroupSelect04").value;
        console.log(product_type);
        let res=await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`);
        let data=await res.json();
        console.log(data);

        for(let i=0;i<data.length;i++){
            row.innerHTML+=`<div class="card" style="width: 18rem;">
            <div class="card-header"><h5 class="card-title text-uppercase text-center">${data[i].brand}<p class="card-text-name">${data[i].name}</p></h5></div>  
            <img src="${data[i].api_featured_image}" class="card-img-top" alt="product-img">
            <p class="font-weight-bold descript">Description:</p>
            <p class="card-text">${data[i].description}</p>
            <div class="card-body">                            
            </div>
            <ul class="list-group list-group-flush price">              
              <li class="list-group-item"><a class="btn btn-primary" href="${data[i].product_link}" role="button" target="_blank">To know More</a></li>
              <li class="list-group-item">Price $: ${data[i].price}</li>   
            </ul>          
           
          </div>`;}
        } catch (error) {
            console.log("Data Not Found !!");//To catch Error on console
        
        }                
}
makeup();

        
  


