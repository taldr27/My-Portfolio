function toggleBar() {
  const x = document.getElementById('hide-menu');
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  }
  else {
    x.style.display = 'none';
  }
}

document.getElementById('burger').addEventListener('click', toggleBar);

function toggleBarWorks() {
  const y = document.getElementById('mobile-popup');
  if (y.style.display === 'none') {
    y.style.display = 'flex';
}
  else {
    y.style.display = 'none';
  }
}

const boxes = document.querySelectorAll('.button');
boxes.forEach((box) => { box.addEventListener('click', toggleBarWorks); });

// var projects = [project1, project2, project3];

// function projects(title, image, description){
//     this.title = title;
// }

// const project1 = {
//   title: 'First Project',
  
// };