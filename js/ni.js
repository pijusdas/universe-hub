const sortDataByDateBtn = () =>{
    fetch("https://openapi.programming-hero.com/api/ai/tools").then(res => res.json())
    .then(data =>{
      sortToolsByDate(data.data.tools)
      function sortToolsByDate (data){
        showTools(data.sort(byDate));
        function byDate(a, b){
          return new Date(a.published_in).valueOf() - new Date(b.published_in).valueOf()
        }
      }
    })
  }