const img = document.querySelector('#getImg');
const p = document.querySelector('#text');

function rare1() {
  var num = Math.floor(Math.random() * 5) + 1;
  switch(num) {
    case 1:
      img.src="image/rare1-1.png";
      p.innerHTML = "レア度：⭐️";
      break;
    case 2:
      img.src = "image/rare1-2.png";
      p.innerHTML = "レア度：⭐️";
      break;
    case 3:
      img.src = "image/rare1-3.png";
      p.innerHTML = "レア度：⭐";
      break;
    case 4:
      img.src = "image/rare1-4.png";
      p.innerHTML = "レア度：⭐️";
      break;
    case 5:
      img.src = "image/rare1-5.png";
      p.innerHTML = "レア度：⭐️";
      break;
  }
}

function rare2() {
  var num = Math.floor(Math.random() * 4) + 1;
  switch (num) {
    case 1:
      img.src = "image/rare2-1.png";
      p.innerHTML = "レア度：⭐️⭐️";
      break;
    case 2:
      img.src = "image/rare2-2.png";
      p.innerHTML = "レア度：⭐️⭐️";
      break;
    case 3:
      img.src = "image/rare2-3.png";
      p.innerHTML = "レア度：⭐️⭐️";
      break;
    case 4:
      img.src = "image/rare2-4.png";
      p.innerHTML = "レア度：⭐️⭐️";
      break;
  }
}

function rare3() {
  var num = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      img.src = "image/rare3-1.png";
      p.innerHTML = "レア度：⭐️⭐️⭐️";
      break;
    case 2:
      img.src = "image/rare3-2.png";
      p.innerHTML = "レア度：⭐️⭐️⭐️";
      break;
    case 3:
      img.src = "image/rare3-3.png";
      p.innerHTML = "レア度：⭐️⭐️⭐️";
      break;
  }
}

function rare4() {
  var num = Math.floor(Math.random() * 2) + 1;
  switch (num) {
    case 1:
      img.src = "image/rare4-1.png";
      p.innerHTML = "レア度：⭐️⭐️⭐️⭐️";
      break;
    case 2:
      img.src = "image/rare4-2.png";
      p.innerHTML = "レア度：⭐️⭐️⭐️⭐️";
      break;
  }
}

function rare5() {
  img.src = "image/rare5.png";
  p.innerHTML = "レア度：⭐️⭐️⭐️⭐️⭐️";
}

function gacha(a) {
  if (a <= 100 && a >= 99) {
    rare5();
  }else if(a <= 98 && a >= 91) {
    rare4();
  }else if(a <= 90 && a >= 71) {
    rare3();
  }else if(a <= 70 && a >= 41) {
    rare2();
  }else{
    rare1();
  }
}

document.querySelector('#btn').onclick = function() {
  var num = Math.floor(Math.random() * 100) + 1;
  gacha(num);
};