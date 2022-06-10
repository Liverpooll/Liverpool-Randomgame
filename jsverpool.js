const button2 = document.querySelector('.color-10');
const real_img = document.querySelector('.real-img');
const p_tag = document.querySelector('.div-p');


 
  let img_arr = ['./images/01.png',
   './images/02.png', 
   './images/03.png', 
   './images/04.png', 
   './images/05.png', 
   './images/06.png', 
   './images/07.png', 
   './images/08.png', 
   './images/09.png', 
   './images/10.png', 
   './images/11.png', 
   './images/12.png', 
  ]



function random_game () {
  let ranNum = Math.floor(Math.random() * img_arr.length);
  real_img.src= img_arr[ranNum];

}

let interval = setInterval(random_game, 100);


button2.addEventListener('click', () => {
  if (interval !== null) {
    clearInterval(interval);
    coinThrow();
    interval = null;
    button2.innerHTML = '다시 ㄱ';
  } else {
    interval = setInterval(random_game, 100);
    button2.innerHTML = '멈춰!';
    p_tag.innerHTML = '';
  }
})


function coinThrow(e){
  let lucky = Math.random();
  if ( lucky < 0.45 ) {
    real_img.src = img_arr[0];
    p_tag.innerHTML = 'Next Gerrard'
  } else if (lucky < 0.9) {
    real_img.src = img_arr[1];
    p_tag.innerHTML = 'Football Hitler'
  } else if (lucky < 0.91) {
    real_img.src = img_arr[2];
    p_tag.innerHTML = '현대판 노예'
  } else if (lucky < 0.92) {
    real_img.src = img_arr[3];
    p_tag.innerHTML = '전한길'
  } else if (lucky < 0.93) {
    real_img.src = img_arr[4];
    p_tag.innerHTML = '세네갈 흑표범 (뮌헨(진))'
  } else if (lucky < 0.94) {
    real_img.src = img_arr[5];
    p_tag.innerHTML = '철강왕 마팁'
  } else if (lucky < 0.95) {
    real_img.src = img_arr[6];
    p_tag.innerHTML = '차기발롱후보'
  } else if (lucky < 0.96) {
    real_img.src = img_arr[7];
    p_tag.innerHTML = '이집트 파라오'
  } else if (lucky < 0.97) {
    real_img.src = img_arr[8];
    p_tag.innerHTML = '근본유스'
  } else if (lucky < 0.98) {
    real_img.src = img_arr[9];
    p_tag.innerHTML = '좆장'
  } else if (lucky < 0.99) {
    real_img.src = img_arr[10];
    p_tag.innerHTML = '리버풀 본체'
  } else {
    real_img.src = img_arr[11];
    p_tag.innerHTML = '고아고'
  }
 console.log(lucky)
}



