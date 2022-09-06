window.addEventListener('DOMContentLoaded', () => {
  function toggleBar() {
    const x = document.getElementById('hide-menu');
    if (x.style.display === 'none') {
      x.style.display = 'flex';
    } else {
      x.style.display = 'none';
    }
  }

  document.getElementById('burger').addEventListener('click', toggleBar);
  document.getElementById('close-nav').addEventListener('click', toggleBar);

  const projects = [
    {
      title: 'Project 1',
      image: 'img/test.png',
      badge1: 'Ruby on railsds',
      badge2: 'CSSsd',
      badge3: 'JavaScriptsd',
      badge4: 'HTMLsd',
      description: 'asdasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      buttons1: 'https://www.google.com',
      button2: 'https://www.facebook.com',
    },
    {
      title: 'Project 2',
      image: 'img/test.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      buttons1: 'link',
      button2: 'link2',
    },
    {
      title: 'Project 3',
      image: 'img/test.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      buttons1: 'link',
      button2: 'link2',
    },
    {
      title: 'Project 4',
      image: 'img/test.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      buttons1: 'link',
      button2: 'link2',
    },
    {
      title: 'Project 5',
      image: 'img/test.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      buttons1: 'link',
      button2: 'link2',
    },
    {
      title: 'Project 6',
      image: 'img/test.png',
      badge1: 'Ruby on rails',
      badge2: 'CSS',
      badge3: 'JavaScript',
      badge4: 'HTML',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      button1: 'link',
      button2: 'link2',
    },
  ];
  function toggleBarWorks(workNumber) {
    const y = document.getElementById('mobile-popup');
    let i = 0;
    if (workNumber === 1) {
      i = 0;
    } else if (workNumber === 2) {
      i = 1;
    } else if (workNumber === 3) {
      i = 2;
    } else if (workNumber === 4) {
      i = 3;
    } else if (workNumber === 5) {
      i = 4;
    } else if (workNumber === 6) {
      i = 5;
    }
    document.getElementById('img-pop').src = projects[i].image;
    document.getElementById('h3-popup').innerHTML = projects[i].title;
    document.getElementById('badge1').innerHTML = projects[i].badge1;
    document.getElementById('badge2').innerHTML = projects[i].badge2;
    document.getElementById('badge3').innerHTML = projects[i].badge3;
    document.getElementById('badge4').innerHTML = projects[i].badge4;
    document.getElementById('p-pop').innerHTML = projects[i].description;
    document.getElementById('btn-1').href = projects[i].button1;
    document.getElementById('btn-2').href = projects[i].button2;

    if (y.style.display === 'flex') {
      y.style.display = 'none';
    } else {
      y.style.display = 'flex';
    }
  }

  document.getElementById('xbut').addEventListener('click', toggleBarWorks);
  document.getElementById('btnPopup1').addEventListener('click', () => { toggleBarWorks(1); });
  document.getElementById('btnPopup2').addEventListener('click', () => { toggleBarWorks(2); });
  document.getElementById('btnPopup3').addEventListener('click', () => { toggleBarWorks(3); });
  document.getElementById('btnPopup4').addEventListener('click', () => { toggleBarWorks(4); });
  document.getElementById('btnPopup5').addEventListener('click', () => { toggleBarWorks(5); });
  document.getElementById('btnPopup6').addEventListener('click', () => { toggleBarWorks(6); });
});