const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 500; //100 px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 5px rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 5px rgba(0,255,255,0.7),
    ${xWalk}px ${yWalk * -1}px 5px rgba(0,255,0,0.7),
    ${xWalk * -1}px ${yWalk * -1}px 5px rgba(255,255,0,0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
