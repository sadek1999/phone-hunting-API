 
 
 
 const loadphone =async(text)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`)
  let data =await res.json();
  let phones = data.data;
  // console.log(phones)
  display(phones);

 }
// for  display the data in ui.....
  const display = phones =>{
 let constainnar =document.getElementById('display-data');

 //  ......clear old data for show new data .....
   constainnar.innerHTML='';


   phones.forEach(phone => {
    //  console.log(phone)
     const displayCard= document.createElement('div');
     displayCard.classList='card card-compact  bg-amber-50 shadow-xl'
     displayCard.innerHTML=`
     <figure><img src="${phone.image}" alt="Shoes" /></figure>
         <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions justify-end">
             <button class="btn btn-primary">Buy Now</button>
           </div>
         </div>
     `;
     constainnar.appendChild(displayCard)
   }); 
  }

// ....for search data ......
const search =()=>{
  const text=document.getElementById("search-fild").value
  document.getElementById("search-fild").value=''
  loadphone(text);
}


 loadphone()