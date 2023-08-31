


const loadphone = async (text='iphone', isShowall) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`)
  let data = await res.json();
  let phones = data.data;
  // console.log(phones)
  display(phones, isShowall);

}
// for  display the data in ui.....
const display = (phones, isShowall) => {
  let constainnar = document.getElementById('display-data');

  //  ......clear old data for show new data .....
  constainnar.innerHTML = '';





  // ....about show all button.....
  const showAll = document.getElementById("show-all")
  if (phones.length > 12) {
    showAll.classList.remove('hidden')
  }
  else {
    showAll.classList.add('hidden')
  }
  console.log(isShowall)
  if (!isShowall) {
    phones = phones.slice(0, 12)
  }
  else {

  }


  phones.forEach(phone => {
    //  console.log(phone)
    const displayCard = document.createElement('div');
    displayCard.classList = 'card card-compact  bg-amber-50 shadow-xl p-10'
    displayCard.innerHTML = `
     <figure><img src="${phone.image}" alt="Shoes" /></figure>
         <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions justify-center">
             <button onclick="showAll('${phone.slug}')" class="btn btn-primary text-white">Show Detals</button>
           </div>
         </div>
     `;
    constainnar.appendChild(displayCard)
  });
  loading(false)
}

// ....show detals modal.....

const showAll = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone=data.data
  console.log(phone)
  const modatDetals = document.getElementById("modal-data")
  modatDetals.innerHTML = `
     <img src="${phone.image}" alt="">
     <h3 class='text-5xl'>${phone.name}</h3>
     <p>Storage : <span>${phone?.mainFeatures?.storage}</span> </p>
     <p>Display Size: <span>${phone?.mainFeatures?.displaySize}</span> </p>
     <p>Chipset : <span>${phone?.mainFeatures?.chipSet}</span> </p>
     <p>Memory : <span>${phone?.mainFeatures?.memory}</span> </p>
     <p>Slug : <span>${phone?.slug}</span> </p>
     <p>Release Date : <span>${phone?.releaseDate}</span> </p>
     <p>Brand : <span>${phone?.brand}</span> </p>
     <p>GPS : <span>${phone?.others?.GPS}</span> </p>
     `
  my_modal_5.showModal()
}

// ....for search data ......
const search = (isShowall) => {
  const text = document.getElementById("search-fild").value
  // document.getElementById("search-fild").value=''
  loading(true)
  loadphone(text, isShowall);
}

const loading = (istrue) => {
  let loadingData = document.getElementById("loding")
  if (istrue) {
    loadingData.classList.remove('hidden')
  }
  else {
    loadingData.classList.add('hidden')
  }
}

const forShowAll = (isShowall) => {
  search(isShowall)

}
loadphone()