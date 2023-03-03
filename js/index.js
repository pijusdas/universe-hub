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
    console.log(data.features)

    // feturee add in modal --------
    // const modalFetureUl = document.getElementById('feature-modal');
    // console.log(modalFetureUl)
    // for(let singleFeature in data.features){
    //     console.log(singleFeature)
    //     const FeatureUl = document.createElement('li');
    //     FeatureUl.innerText =singleFeature.feature_name;
    //     // modalFetureUl.appendChild(FeatureUl);
    // }
    
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
         <div>
         
         </div>
         <div id="feature-modal">
         <ul id="feature-mod">
            
         </ul>
         </div>
         </div>
    </div>
    
    `
    
    modalContainer.appendChild(modal)
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
