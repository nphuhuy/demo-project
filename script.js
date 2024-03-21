
// Active states for Buttons and Links
const siteNavLinks = document.querySelectorAll('#site-nav-links li');
const sortBtns = document.querySelectorAll('#works-menu .sort button');
const formatBtns = document.querySelectorAll('#works-menu .format button');

siteNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    siteNavLinks.forEach(link => {
      link.classList.remove('active');
    })
    link.classList.add('active');
  })
})

sortBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    sortBtns.forEach(btn => {
      btn.classList.remove('active');
    })
    btn.classList.add('active');
  })
})

formatBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    formatBtns.forEach(btn => {
      btn.classList.remove('active');
    })
    btn.classList.add('active');
  })
})

// Changing Work List Format (Column vs Row)
const formatColBtn = document.getElementById('format-col-btn');
const formatRowBtn = document.getElementById('format-row-btn');
const worksList = document.getElementById('works-list');
const works = document.querySelectorAll('#works-list .work');
const worksText = document.querySelectorAll('#works-list .work .text-content');
const worksDesc = document.querySelectorAll('.work-description');
const worksImgWrapper = document.querySelectorAll('#works-list .work .image-wrapper');

// Generate List of Works 
let worksListItems = ``;

for (let i = 0; i < projects.length; i++) {
  worksListItems += `
    <li class="work">
      <div class="image-wrapper">
        <img src="${projects[i].imgSrc}" alt="">
      </div>
      <div class="text-content">
        <h2 class="work-title">${projects[i].title}</h2>
        <h4>${projects[i].services}<span class="year">${projects[i].year}</span></h4>
        <p class="work-description hidden">${projects[i].description}</p>
      </div>
    </li>
  `
}

worksList.innerHTML = worksListItems;




formatColBtn.addEventListener('click', () => {

    worksList.classList.remove('list-format-row');
    worksList.classList.add('list-format-col');
    console.log('Here we go!!!!!!!!!!!!!!!!!')

    worksImgWrapper.forEach(wrapper => {
      // wrapper.style.height = 'auto';
      wrapper.style.aspectRatio = 'auto';
      console.log('Here we go imgg!!!!!!!!!!!!!!!!!')
    })
    worksDesc.forEach(desc => {
      desc.classList.add('hidden');
      console.log('Here we go desc!!!!!!!!!!!!!!!!!')
    })
    works.forEach(work => {
      work.classList.remove('list-format-row');
      console.log('Here we col!!!!!!!!!!!!!!!!!')

    })
    worksText.forEach(text => {
      text.classList.remove('list-format-row');
      console.log('Here we row!!!!!!!!!!!!!!!!!')

    })
  

})

formatRowBtn.addEventListener('click', () => {

    worksList.classList.remove('list-format-col');

    worksList.classList.add('list-format-row');

    worksImgWrapper.forEach(wrapper => {
      // wrapper.style.height = '27rem';
      wrapper.style.aspectRatio = '2/1.5'
    })
    
    worksDesc.forEach(desc => {
      desc.classList.remove('hidden');
    })
    works.forEach(work => {
      // work.classList.remove('list-format-col');
      work.classList.add('list-format-row');
    })
    worksText.forEach(text => {
      // text.classList.remove('list-format-col');
      text.classList.add('list-format-row');
    })


})
