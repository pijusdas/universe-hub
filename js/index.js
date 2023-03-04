
 
const loadData = (dataLimit) => {
    togglespinners(true)
    const URL = `https://openapi.programming-hero.com/api/ai/tools`

    fetch(URL)
        .then(res => res.json())
        .then(data => showAllData(data.data.tools, dataLimit))

       
}
 
// short by date----------

// if (allDetails) {
//     allDetails.sort((a, b) => 
//     new Date(a.published_in) - new Date(b.published_in));
//     console.log(  )
// }

const showAllData = (allDetails,dataLimit) => {

    // const allDate = allDetails
    // console.log(allDate)
    //  customsorts = (a,b) =>{
    //     const dateA = a.published_in;
    //     const dateB = b.published_in;
    //  }
    //  console.log(allDate.sort(customsorts))
  
    // show all cards-----------------------------  
    const divContainer = document.getElementById('all-card');
    divContainer.innerHTML = '';

    const showall = document.getElementById('Show-all')
    if (dataLimit && allDetails.length > 6) {
        allDetails = allDetails.slice(0, 6);
        showall.classList.remove('d-none')
    }
    else {
        showall.classList.add('d-none')
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
             <p>4: ${features[3] ? features[2] : 'no found Feature'}</p>
             <hr>
             <p></p>
             <p></p>
             <p></p>
            <div class ="d-flex justify-content-between align-items-center py-3">
                 <div>
                 <h4>${name}</h4>
                 <p><i class="fa-regular fa-calendar-days"></i> ${published_in}</p>
                 </div>
                 <div><i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-arrow-right text-danger" onclick ="loadSinglecard('${id}')"></i></div>
            </div
        </div>
    </div>
        `
        divContainer.appendChild(div)
    });
    togglespinners(false)
}

const loadSinglecard =(id) => {
    togglespinners(true)
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => displaySingleCard(data.data))
}

const displaySingleCard = data => {
    console.log(data.accuracy)



    const acuracy = data.accuracy 
     
    const accuricyScore = acuracy.score ? parseInt(acuracy.score * 100) : 00 ;


    const modalContainer = document.getElementById('modal-content');
    modalContainer.innerHTML = ''
    const modal = document.createElement('div');
    modal.classList.add('col')
    modal.innerHTML = `
    <div class="card h-100 bg-danger-subtle">
        <div class="card-body">
        <h5 class="card-title mb-4">${data ? data.description: 'Description not found'}</h5>
         <div class="d-flex justify-content-between gap-2 container text-center">
         <div class="bg-white p-4 rounded">
          <p style="color: green;">${data.pricing? data.pricing[0].price : 'Free Of Cost'} basic</p>
         </div>
         <div class="bg-white p-4 rounded">
         <p class="text-warning">${data.pricing? data.pricing[1].price: 'Free Of Cost'} Pro</p>
         
         </div>
         <div class="bg-white p-4 rounded">
         <p class="text-danger">Contact Us ${data.pricing? data.pricing[2].plan:'Free Of Cost Enterprice'}</p>
         
         </div>
         </div>
     <div class= "d-flex justify-content-between mt-4">    
      <div >
      <h5>Features</h5>
      <ul>
         <li>${data.features? data.features[1].feature_name:'No Data Found'})</li>
         <li>${data.features? data.features[2].feature_name:'No Data Found'}</li>
         <li>${data.features? data.features[3].feature_name:'No Data Found'}</li>
      </ul>
      </div>
      <div>
      <h5>Integrations</h5>
         <ul>
             <li>${data.integrations? data.integrations[0] : 'No Data Found'}</li>
             <li>${data.integrations? data.integrations[1] : 'No Data Found'}</li>
             <li>${data.integrations? data.integrations[2] : 'No Data Found'}</li>
             <li>${data.integrations? data.integrations[3] : 'No Data Found'}</li>
             <li>${data.integrations? data.integrations[4] : 'No Data Found'}</li>
         </ul>
       </div>
     </div>
    </div>
    
    `
    modalContainer.appendChild(modal)

    const modal2 = document.createElement('div');
    modal2.classList.add('col')
    modal2.innerHTML = `
    
    <div" style="position: relative; class="card h-100 text-center">

        <div class="card-body">
        <div class = "">
           <button style=" position: absolute; margin-top: -15px; margin-left: 400px; " type="button" id="accuracy" class="btn btn-danger ${accuricyScore == 00 ? "d-none" : "d-block" } btn-sm">${accuricyScore}%accuracy</button>
        <div/>

        <img  src=${data.image_link? data.image_link[0]:'No Data Found'} class="card-img-top" alt="...">
        <h5 class="card-title mt-4">${data.input_output_examples? data.input_output_examples[0].input:'No! Not Yet! Take A Break!!'}</h5>
         <p class="card-text my-3"> ${data.input_output_examples? data.input_output_examples[0].output : 'No! Not Yet! Take A Break!!!'}</p>
         </div>
    </div>
    
    `
    modalContainer.appendChild(modal2)

    togglespinners(false) 

}

 

// spinner-----------
const togglespinners = isLoading => {
    const spinner = document.getElementById('spiner');
    if(isLoading === true){
        spinner.classList.remove('d-none')
    }
    else{
        spinner.classList.add('d-none')
    }
}

document.getElementById('Show-all').addEventListener('click', function () {
        loadData();
    })
  


loadData(6);
