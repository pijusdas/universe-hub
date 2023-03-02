const loadData = (all) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(URL)
        .then(res => res.json())
        .then(data => showAllData(data.data.tools,all))
}

const showAllData = (allDetails,all) => {
    console.log(allDetails)
    // show all cards-----------------------------
    const divContainer = document.getElementById('all-card');
    divContainer.innerHTML ='';

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
                 <div><i class="fa-solid fa-arrow-right text-danger" onclick ="loadSinglecard('${id}')"></i></div>
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
    .then(data => console.log(data))
}

loadData();


// document.getElementById('Show-all').addEventListener('click', function () {
//     loadData(12);
// })
