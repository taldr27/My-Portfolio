window.addEventListener('DOMContentLoaded', () => {

  // Function to show the burger on mobile
  function toggleBar() {
    const burgerButton = document.querySelector('.toggle-menu');
    if (burgerButton.style.display === 'flex') {
      burgerButton.style.display = 'none';
    } else {
      burgerButton.style.display = 'flex';
    }
  }

  document.getElementById('burger').addEventListener('click', toggleBar);
  document.getElementById('close-nav').addEventListener('click', toggleBar);
  
  // Define the array of objects containing the projects
  const projects = [
    {
      title: 'Awesome Books',
      image: 'img/AwesomeBooks.png',
      badge1: 'GitHub',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'This repository contains a manager for your books, you can add and remove the books that you have already read. This project was created using JavaScript, HTML, and CSS.',
      button1: 'https://taldr27.github.io/Awesome-Books/',
      button2: 'https://github.com/taldr27/Awesome-Books',
      imgClass: 'img-project1',
      buttonId: 'btnPopup1',
      imgPop: 'img/AwesomeBooks.png',
    },
    {
      title: 'LeaderBoard',
      image: 'img/leaderboard.png',
      badge1: 'APIS',
      badge2: 'HTML',
      badge3: 'JavaScript',
      badge4: 'CSS',
      description: 'In this project you can add new scores to a Scoreboard, made it using JavaScript and an API.',
      button1: 'https://taldr27.github.io/Leaderboard/dist/',
      button2: 'https://github.com/taldr27/Leaderboard',
      imgClass: 'img-project2',
      buttonId: 'btnPopup2',
      imgPop: 'img/leaderboard.png',
    },
    {
      title: 'Space-X',
      image: 'img/rocket.png',
      badge1: 'React',
      badge2: 'Redux',
      badge3: 'HTML',
      badge4: 'APIS',
      description: 'This was a collaborative project using the API from Space X, this project allows you to reserve rockets and missions and you are also able to display them in the Profile section.',
      button1: 'https://deploy-preview-38--singular-maamoul-ab8f49.netlify.app/',
      button2: 'https://github.com/taldr27/space-travelers',
      imgClass: 'img-project3',
      buttonId: 'btnPopup3',
      imgPop: 'img/rocket.png',
    },
    {
      title: 'BookStore React',
      image: 'img/book.png',
      badge1: 'React',
      badge2: 'Redux',
      badge3: 'APIS',
      badge4: 'HTML',
      description: 'This Bookstore is a SPA project that allows you to display a list of books, add new ones, and also delete them it was developed with React and Redux.',
      button1: 'https://poetic-florentine-b20720.netlify.app/',
      button2: 'https://github.com/taldr27/BookStore',
      imgClass: 'img-project4',
      buttonId: 'btnPopup4',
      imgPop: 'img/book.png',
    },
    {
      title: 'Math Magicians',
      image: 'img/math.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Math Magicians is a SPA project where you can use a calculator made with React and JavaScript.',
      button1: 'https://zingy-malabi-151a57.netlify.app',
      button2: 'https://github.com/taldr27/Math-Magicians',
      imgClass: 'img-project5',
      buttonId: 'btnPopup5',
      imgPop: 'img/math.png',
    },
    {
      title: 'Tv Magazine',
      image: 'img/tv.png',
      badge1: 'API',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'This is a webpage that displays tv shows from a REST API. It allows a user to like and comment on their favourite shows. The number of comments, likes and the description in the comments which includes date and name are sent to APIs too.',
      button1: 'https://haywayaheadshot.github.io/javascript-capstone/',
      button2: 'https://github.com/Haywayaheadshot/javascript-capstone/',
      imgClass: 'img-project6',
      buttonId: 'btnPopup6',
      imgPop: 'img/movi1.png',
    },
  ];

  const wrapperContainer = document.getElementById('wrapper');
  const landContainer = document.getElementById('land');

  function works() {
    const myRecent = document.createElement('section');
    myRecent.id = 'portfolio';
    myRecent.className = 'my-recent-works';
    wrapperContainer.appendChild(myRecent);
    landContainer.insertAdjacentElement('afterend', myRecent);

    const divProject = document.createElement('div');
    myRecent.appendChild(divProject);

    const h2P = document.createElement('h2');
    h2P.className = 'works';
    h2P.innerHTML = 'My Recent Works';
    divProject.appendChild(h2P);

    const imgLine = document.createElement('img');
    imgLine.className = 'line';
    imgLine.setAttribute('src', '/img/line.svg');
    divProject.appendChild(imgLine);

    const ProjectContainerSection = document.createElement('section');
    ProjectContainerSection.className = 'projects-container';
    myRecent.appendChild(ProjectContainerSection);

    for (let i = 0; i < 6; i += 1) {
      const projectBoxDiv1 = document.createElement('div');
      projectBoxDiv1.className = 'project-box';
      ProjectContainerSection.appendChild(projectBoxDiv1);

      const imgProject1 = document.createElement('img');
      imgProject1.className = projects[i].imgClass;
      imgProject1.src = projects[i].image;
      projectBoxDiv1.appendChild(imgProject1);

      const projectDetails = document.createElement('div');
      projectDetails.className = 'project-details';
      projectBoxDiv1.appendChild(projectDetails);

      const h3P = document.createElement('h3');
      h3P.innerHTML = projects[i].title;
      projectDetails.appendChild(h3P);

      const ulP = document.createElement('ul');
      projectDetails.appendChild(ulP);

      const liP1 = document.createElement('li');
      ulP.appendChild(liP1);

      const ali1 = document.createElement('a');
      ali1.href = '#';
      ali1.innerHTML = projects[i].badge1;
      liP1.appendChild(ali1);

      const liP2 = document.createElement('li');
      ulP.appendChild(liP2);

      const ali2 = document.createElement('a');
      ali2.href = '#';
      ali2.innerHTML = projects[i].badge2;
      liP2.appendChild(ali2);

      const liP3 = document.createElement('li');
      ulP.appendChild(liP3);

      const ali3 = document.createElement('a');
      ali3.href = '#';
      ali3.innerHTML = projects[i].badge3;
      liP3.appendChild(ali3);

      const liP4 = document.createElement('li');
      ulP.appendChild(liP4);

      const ali4 = document.createElement('a');
      ali4.href = '#';
      ali4.innerHTML = projects[i].badge4;
      liP4.appendChild(ali4);

      const btnProject = document.createElement('button');
      btnProject.id = projects[i].buttonId;
      btnProject.className = 'button';
      btnProject.innerHTML = 'See Project ';
      projectDetails.appendChild(btnProject);
    }
  }
  window.onload = works();
  const aboutContainer = document.getElementById('about');

  function Addnew() {
    const myPopup = document.createElement('section');
    myPopup.id = 'mobile-popup-section';
    myPopup.className = 'mobile-popup-section';
    wrapperContainer.appendChild(myPopup);
    aboutContainer.insertAdjacentElement('beforebegin', myPopup);

    const main = document.createElement('div');
    main.id = 'mobile-popup';
    main.className = 'mobile-popup';
    myPopup.appendChild(main);

    const divX = document.createElement('div');
    divX.className = 'close-popup';
    main.appendChild(divX);

    const img = document.createElement('img');
    img.id = 'img-pop';
    img.className = 'img-pop';
    main.appendChild(img);

    const liI = document.createElement('i');
    liI.className = 'fa-solid fa-xmark';
    liI.id = 'x-but';
    divX.appendChild(liI);

    const mainDiv1 = document.createElement('div');
    mainDiv1.className = 'content-popup-desktop main-popup';
    main.appendChild(mainDiv1);

    const div1Div1 = document.createElement('div');
    div1Div1.className = 'content-head-desktop';
    mainDiv1.appendChild(div1Div1);

    const divDiv1Div = document.createElement('div');
    div1Div1.appendChild(divDiv1Div);

    const divDivH3 = document.createElement('h3');
    divDivH3.id = 'h3-popup';
    divDivH3.className = 'h3-popup';
    divDiv1Div.appendChild(divDivH3);

    const div1Div2 = document.createElement('div');
    div1Div2.className = 'btn-container-desktop';
    mainDiv1.appendChild(div1Div2);

    const btnDesktopSee = document.createElement('a');
    btnDesktopSee.id = 'btn-1';
    btnDesktopSee.className = 'button btn-popup';
    btnDesktopSee.innerHTML = 'See live     ';
    div1Div2.appendChild(btnDesktopSee);

    const desktopArrow = document.createElement('i');
    desktopArrow.className = 'fa-solid fa-arrow-up-right-from-square';
    btnDesktopSee.appendChild(desktopArrow);

    const btnDesktopSource = document.createElement('a');
    btnDesktopSource.id = 'btn-2';
    btnDesktopSource.className = 'button btn-popup';
    btnDesktopSource.innerHTML = 'See source     ';
    div1Div2.appendChild(btnDesktopSource);

    const desktopGit = document.createElement('i');
    desktopGit.className = 'fa-brands fa-github';
    btnDesktopSource.appendChild(desktopGit);

    const mainDiv2 = document.createElement('div');
    mainDiv2.className = 'details-popup divPop';
    main.appendChild(mainDiv2);

    const div2Ul = document.createElement('ul');
    mainDiv2.appendChild(div2Ul);

    const ulLi1 = document.createElement('li');
    div2Ul.appendChild(ulLi1);

    const li1A = document.createElement('a');
    li1A.id = 'badge1';
    ulLi1.appendChild(li1A);

    const ulLi2 = document.createElement('li');
    div2Ul.appendChild(ulLi2);

    const li2A = document.createElement('a');
    li2A.id = 'badge2';
    ulLi2.appendChild(li2A);

    const ulLi3 = document.createElement('li');
    div2Ul.appendChild(ulLi3);

    const li3A = document.createElement('a');
    li3A.id = 'badge3';
    ulLi3.appendChild(li3A);

    const ulLi4 = document.createElement('li');
    div2Ul.appendChild(ulLi4);

    const li4A = document.createElement('a');
    li4A.id = 'badge4';
    ulLi4.appendChild(li4A);

    const mainP = document.createElement('p');
    mainP.id = 'p-pop';
    mainP.className = 'p-pop';
    main.appendChild(mainP);

    const mainDiv3 = document.createElement('div');
    mainDiv3.className = 'btn-container';
    main.appendChild(mainDiv3);

    const div3A1 = document.createElement('a');
    div3A1.id = 'btn-1';
    div3A1.className = 'button btn-popup';
    div3A1.innerHTML = 'See live     ';
    mainDiv3.appendChild(div3A1);

    const div3A1I = document.createElement('i');
    div3A1I.className = 'fa-solid fa-arrow-up-right-from-square';
    div3A1.appendChild(div3A1I);

    const div3A2 = document.createElement('a');
    div3A2.id = 'btn-2';
    div3A2.className = 'button btn-popup';
    div3A2.innerHTML = 'See source     ';
    mainDiv3.appendChild(div3A2);

    const mobileGit = document.createElement('i');
    mobileGit.className = 'fa-brands fa-github';
    div3A2.appendChild(mobileGit);
  }
  window.onload = Addnew();
  const sectionContainer = document.getElementById('mobile-popup-section');
  function openPopup(workNumber) {
    const i = workNumber;
    document.getElementById('img-pop').src = projects[i].imgPop;
    document.getElementById('h3-popup').innerHTML = projects[i].title;
    document.getElementById('badge1').innerHTML = projects[i].badge1;
    document.getElementById('badge2').innerHTML = projects[i].badge2;
    document.getElementById('badge3').innerHTML = projects[i].badge3;
    document.getElementById('badge4').innerHTML = projects[i].badge4;
    document.getElementById('p-pop').innerHTML = projects[i].description;
    document.getElementById('btn-1').href = projects[i].button1;
    document.getElementById('btn-2').href = projects[i].button2;
    document.getElementById('x-but').addEventListener('click', () => { sectionContainer.style.display = 'none'; });
    if (sectionContainer.style.display === 'flex') {
      sectionContainer.style.display = 'none';
    } else {
      sectionContainer.style.display = 'flex';
    }
  }

  const b1 = document.getElementById('btnPopup1');
  b1.addEventListener('click', () => { openPopup(0); });
  const b2 = document.getElementById('btnPopup2');
  b2.addEventListener('click', () => { openPopup(1); });
  const b3 = document.getElementById('btnPopup3');
  b3.addEventListener('click', () => { openPopup(2); });
  const b4 = document.getElementById('btnPopup4');
  b4.addEventListener('click', () => { openPopup(3); });
  const b5 = document.getElementById('btnPopup5');
  b5.addEventListener('click', () => { openPopup(4); });
  const b6 = document.getElementById('btnPopup6');
  b6.addEventListener('click', () => { openPopup(5); });
});

const form = document.getElementById('form-contact-mobile');
const form1 = document.getElementById('form-contact-desktop');
const email = document.getElementById('email-mobile');
const emailD = document.getElementById('email');
const error = document.getElementById('error');
const error1 = document.getElementById('error1');
form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    event.preventDefault();
    error.innerHTML = 'Set Email in lower case, please';
  }
});
form1.addEventListener('submit', (e) => {
  if (emailD.value.toLowerCase() !== emailD.value) {
    e.preventDefault();
    error1.innerHTML = 'Set Email in lower case, please';
  }
});