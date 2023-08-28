const loodPhone = async (searchItem)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchItem}`);
    const data= await res.json();
    const phones=data.data;

    displayphones(phones);

}


const displayphones =(phones,)=>{
      const phoneContannar=document.getElementById('phones-continnar')
      phoneContannar.innerText=''
      
      
      if(phones.length >10){
        
        document.getElementById("but-show-all").classList.remove('hidden')
      }
      else{
        document.getElementById("but-show-all").classList.add('hidden')
      }
      if(!isShowall){
        phones=phones.slice(0,12)
      }
     
    //   if(phones.length > 10)
    

    phones.forEach(phone => {
        // console.log(phone)
        const phonecard=document.createElement('div');
        phonecard.classList=`card card-compact p-4 bg-amber-50 shadow-xl`;
        phonecard.innerHTML=`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
        
        `;
        phoneContannar.appendChild(phonecard);
    });
      loading(false);  
    };
    const heandalSearch=()=>{
        const searchItem =document.getElementById("search-fild").value;
        document.getElementById("search-fild").value=''
        loading(true);
        loodPhone(searchItem,);
    }
    const heandalSearch2 =()=>{
      const searchItem2 = document.getElementById('search-fild2').value;
      document.getElementById('search-fild2').value='';
      loodPhone(searchItem2)
    }

    const loading  =(isloading)=>{
      const spinner =document.getElementById("loading")
      if(isloading){
        spinner.classList.remove('hidden')
      }
      else{
        spinner.classList.add('hidden')
      }

    }
  