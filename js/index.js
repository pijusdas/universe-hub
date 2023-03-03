const loadData = (all) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
        .then(res => res.json())
        .then(data => showAllData(data.data.tools, all))
}

const showAllData = (allDetails, all) => {
    console.log(allDetails)
    // show all cards-----------------------------
    const divContainer = document.getElementById('all-card');
    divContainer.innerHTML = '';

    if (allDetails.length > 6) {
        allDetails = allDetails.slice(0, 6);
    }
    else {
        // alert somthing
        // allDetails = all
    }

    allDetails.forEach(singleDetails => {
        console.log(singleDetails)
        const { name, image, description, published_in, features, id } = singleDetails
        const div = document.createElement('div');
        div.classList.add('col',)
        div.innerHTML = `
    <div class="card p-3 h-100">
        <img src=${image} class="card-img-top" alt="...">
          <div class="card-body">
             <h4>Features</h4>
             <p>1: ${features[0] ? features[0] : 'no found Feature'}</p>
             <p>2: ${features[1] ? features[1] : 'no found Feature'}</p>
             <p>3: ${features[2] ? features[2] : 'no found Feature'}</p>
             <hr>
             <p></p>
             <p></p>
             <p></p>
            <div class ="d-flex justify-content-between align-items-center py-3">
                 <div>
                 <h4>${name}</h4>
                 <p>${published_in}</p>
                 </div>
                 <div><i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-arrow-right text-danger" onclick ="loadSinglecard('${id}')"></i></div>
            </div
        </div>
    </div>
        `
        divContainer.appendChild(div)
    });

}

const loadSinglecard = id => {
    // console.log(id)
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => displaySingleCard(data.data))
}

const displaySingleCard = data => {
    console.log(data.integrations)
     


    // feturee add in modal --------
     
     
    
    // data.features.forEach(dot =>{
    //     console.log(dot)
    // })
    const modalContainer = document.getElementById('modal-content');
    modalContainer.innerHTML = ''
    const modal = document.createElement('div');
    modal.classList.add('col')
    modal.innerHTML = `
    <div class="card h-100 bg-danger-subtle">
        <div class="card-body">
        <h5 class="card-title mb-4">${data.description? data.description: 'Description not found'}</h5>
         <div class="d-flex justify-content-between gap-2 container text-center">
         <div class="bg-white p-4 rounded">
          <p style="color: green;">${data.pricing[0].price? data.pricing[0].price : 'Free Of Cost'} basic</p>
         </div>
         <div class="bg-white p-4 rounded">
         <p class="text-warning">${data.pricing[1].price} Pro</p>
         
         </div>
         <div class="bg-white p-4 rounded">
         <p class="text-danger">Contact Us ${data.pricing[2].plan}</p>
         
         </div>
         </div>
     <div class= "d-flex justify-content-between mt-4">    
      <div >
      <h5>Features</h5>
      <ul>
         <li>${data.features[1].feature_name})</li>
         <li>${data.features[2].feature_name}</li>
         <li>${data.features[3].feature_name}</li>
      </ul>
      </div>
      <div>
      <h5>Integrations</h5>
         <ul>
             <li>${data.integrations[0]? data.integrations[0] : 'No Data Found'}</li>
             <li>${data.integrations[1]? data.integrations[1] : 'No Data Found'}</li>
             <li>${data.integrations[2]? data.integrations[2] : 'No Data Found'}</li>
             <li>${data.integrations[3]? data.integrations[3] : 'No Data Found'}</li>
             <li>${data.integrations[4]? data.integrations[4] : 'No Data Found'}</li>
         </ul>
       </div>
     </div>
    </div>
    
    `
    
    modalContainer.appendChild(modal)

    const ds = document.getElementById('feature-madal');
    // console.log(ds)
    const modal2 = document.createElement('div');
    modal2.classList.add('col')
    modal2.innerHTML = `
    
    <div class="card h-100">
        <div class="card-body">
        <img src=${data.image_link[0]}  class="card-img-top" alt="...">
        <h5 class="card-title">Card title</h5>
         <p class="card-text">This is a longer card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
            longer.</p>
         </div>
    </div>
    
    `
    modalContainer.appendChild(modal2)
}

loadData();


// document.getElementById('Show-all').addEventListener('click', function () {
//     loadData(12);
// })
