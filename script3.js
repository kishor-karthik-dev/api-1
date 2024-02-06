

async function vehicles(){
    var res = fetch ("https://date.nager.at/api/v3/PublicHolidays/2023/AT")

    res.then((data)=>data.json()).then((data1)=>{
        for (let i=0; i<data1.length; i++){
            var div = document.createElement("div");
            div.innerHTML = ` 
        
            <div class="card" >
            <div class="card-body ">
              <h5 class="card-title">festival Name : ${data1[i].name}</h5>
              <h5 class="card-title">date : ${data1[i].date} </h5>
              <h5 class="card-title">Local : ${data1[i].localName} </h5>
              <h5 class="card-ti">Couties : ${data1[i].counties}</h5>
              </div>
            
          </div>
            `

            document.body.append(div)
        }
    })
};
vehicles();
