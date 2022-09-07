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
      title: 'Keeping track of hundreds of components - 1',
      image: 'img/test.png',
      badge1: '1 - Ruby on rails',
      badge2: '1 - CSS',
      badge3: '1 - JavaScript',
      badge4: '1 - HTML',
      description: '1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      buttons1: 'https://www.google.com',
      button2: 'https://www.facebook.com',
    },
    {
      title: '2 - Keeping track of hundreds of components - 2',
      image: 'img/test.png',
      badge1: '2 - Ruby on rails',
      badge2: '2 - CSS',
      badge3: '2 - JavaScript',
      badge4: '2 - HTML',
      description: '2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
      buttons1: 'link',
      button2: 'link2',
    },
    {
      title: 'Keeping track of hundreds of components - 3',
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
      title: 'Keeping track of hundreds of components - 4',
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
      title: 'Keeping track of hundreds of components - 5',
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
      title: 'Keeping track of hundreds of components - 6',
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
    const y = document.getElementById('mobile-popup-section');
    const i = workNumber;
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

  document.getElementById('xbut').addEventListener('click', () => { toggleBarWorks(0); });
  document.getElementById('btnPopup1').addEventListener('click', () => { toggleBarWorks(0); });
  document.getElementById('btnPopup2').addEventListener('click', () => { toggleBarWorks(1); });
  document.getElementById('btnPopup3').addEventListener('click', () => { toggleBarWorks(2); });
  document.getElementById('btnPopup4').addEventListener('click', () => { toggleBarWorks(3); });
  document.getElementById('btnPopup5').addEventListener('click', () => { toggleBarWorks(4); });
  document.getElementById('btnPopup6').addEventListener('click', () => { toggleBarWorks(5); });
});