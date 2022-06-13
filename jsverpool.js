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
  console.log(ranNum)
}

let interval = setInterval(random_game, 100);


button2.addEventListener('click', () => {
  if (interval !== null) {
    clearInterval(interval);
    random_switch();
    interval = null;
    button2.innerHTML = '다시 ㄱ';
  } else {
    interval = setInterval(random_game, 100);
    button2.innerHTML = '멈춰!';
    p_tag.innerHTML = '';
  }
})


// const bit_coin = () => {
//     let lucky = (Math.random());
//     let lucky_cut = lucky.toFixed(2)

//     switch (true) {
//       case lucky_cut < 0.46 :
//         real_img.src = img_arr[0];
//         p_tag.innerHTML = 'Next Gerrard'
//         break;
//       case lucky_cut < 0.91 :
//         real_img.src = img_arr[1];
//         p_tag.innerHTML = 'Football Hitler'
//         break;
//       case lucky_cut < 0.92 :
//         real_img.src = img_arr[2];
//         p_tag.innerHTML = '현대판 노예'
//         break;
//       case lucky_cut < 0.93 :
//         real_img.src = img_arr[3];
//         p_tag.innerHTML = '전한길'
//         break;
//       case lucky_cut < 0.94 :
//         real_img.src = img_arr[4];
//         p_tag.innerHTML = '세네갈 흑표범 (뮌헨(진))'
//         break;
//       case lucky_cut < 0.95 :
//         real_img.src = img_arr[5];
//         p_tag.innerHTML = '철강왕 마팁'
//         break;
//       case lucky_cut < 0.96 :
//         real_img.src = img_arr[6];
//         p_tag.innerHTML = '차기발롱후보'
//         break;
//       case lucky_cut < 0.97 :
//         real_img.src = img_arr[7];
//         p_tag.innerHTML = '이집트 파라오'
//         break;
//       case lucky_cut < 0.98 :
//         real_img.src = img_arr[8];
//         p_tag.innerHTML = '근본유스'
//         break;
//       case lucky_cut < 0.99 :
//         real_img.src = img_arr[9];
//         p_tag.innerHTML = '캡틴'
//         break;
//       case lucky_cut < 1 :
//         real_img.src = img_arr[10];
//         p_tag.innerHTML = '리버풀 본체'
//         break;
//     }
//     console.log(lucky_cut)
// }


const random_switch = () => {
  let lucky = (Math.random());
  let lucky_cut = lucky.toFixed(2)

  switch (true) {
    case lucky_cut < 0.1 :
      real_img.src = img_arr[0];
      p_tag.innerHTML = 'Next Gerrard'
      break;
    case lucky_cut < 0.2 :
      real_img.src = img_arr[1];
      p_tag.innerHTML = 'Oxlade-Chamberlain'
      break;
    case lucky_cut < 0.3 :
      real_img.src = img_arr[2];
      p_tag.innerHTML = 'Robertson'
      break;
    case lucky_cut < 0.4 :
      real_img.src = img_arr[3];
      p_tag.innerHTML = 'Luis Diaz'
      break;
    case lucky_cut < 0.5 :
      real_img.src = img_arr[4];
      p_tag.innerHTML = '세네갈 흑표범 (뮌헨(진))'
      break;
    case lucky_cut < 0.6 :
      real_img.src = img_arr[5];
      p_tag.innerHTML = '철강왕 마팁'
      break;
    case lucky_cut < 0.65 :
      real_img.src = img_arr[6];
      p_tag.innerHTML = '차기발롱후보'
      break;
    case lucky_cut < 0.7 :
      real_img.src = img_arr[7];
      p_tag.innerHTML = '이집트 파라오'
      break;
    case lucky_cut < 0.75 :
      real_img.src = img_arr[8];
      p_tag.innerHTML = '근본유스'
      break;
    case lucky_cut < 0.8 :
      real_img.src = img_arr[9];
      p_tag.innerHTML = '캡틴'
      break;
    case lucky_cut < 0.9 :
      real_img.src = img_arr[10];
      p_tag.innerHTML = '리버풀 본체'
      break;
    case lucky_cut < 1 :
      real_img.src = img_arr[11];
      p_tag.innerHTML = '교수님'
      break;
  }
  console.log(lucky_cut)
}

