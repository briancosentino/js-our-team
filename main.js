const rowEl = document.querySelector('.row')
const teamMembers = [
    {
      name: "Marco Bianchi",
      job: "Designer",
      email: "marcobianchi@team.com",
      img: "./assets 3/img/male1.png"
    },
    {
      name: "Laura Rossi",
      job: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "./assets 3/img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      job: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "./assets 3/img/male2.png"
    },
    {
      name: "Marta Ipsum",
      job: "SEO Specialist",
      email: "martarossi@team.com",
      img: "./assets 3/img/female2.png"
    },
    {
      name: "Roberto Lorem",
      job: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "./assets 3/img/male3.png"
    },
    {
      name: "Daniela Amet",
      job: "Analyst",
      email: "danielaaamet@team.com",
      img: "./assets 3/img/female3.png"
    }
  ];
  
  function printCard (obj){ 
    const {name, job,email, img} = obj
    const markup = `<div class="col-12 col-md-6 col-lg-6 col-xl-4 mb-4">
                <div class=" text-white d-flex p-0 ">
                    <div class="">
                        <img style="height: 8rem;" src="${img}" alt="">
                    </div>
                    <div class="bg-black ps-3 pe-3 w-100
                     py-1 d-flex flex-column justify-content-center gap-2">
                        <h3 class="d-block m-0">${name}</h3>
                        <p class="d-block m-0">${job}</p>
                        <p class="d-block text-info  m-0">${email}</p>
                    </div>
                </div>
            </div>`
return rowEl.innerHTML += markup
}
for (let i = 0; i < teamMembers.length; i++){
    const thisMember = teamMembers[i];
    printCard(thisMember)
  }