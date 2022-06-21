// const blogList = document.getElementsByTagName('p');
// for (const p of blogList){
//     console.log(p.innerText);
// };

// const blogTitle = document.getElementsByTagName('h4')
// for(const h4 of blogTitle){
//     console.log(h4.innerText);
// }

// const title = document.getElementById('demo');
// console.log(title);


// document.querySelector('.demo').addEventListener('click', function() {
//     alert('Ouch! Stop poking me!');
//   });

//   $(document).ready(function(){
//     alert('Here is some news');
//     $('blackBox').hide();
//   })


// create and add element by using JS 
// create the element

const li = document.createElement('li');
li.innerText = 'Exclusive blog';

// where to add 

const ul = document.getElementById('blog_list');

//append new element
ul.appendChild('li');

