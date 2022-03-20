const aa = document.querySelector(".aa"),
  ab = document.querySelector(".ab"),
  ac = document.querySelector(".ac"),
  ba = document.querySelector(".ba"),
  bb = document.querySelector(".bb"),
  bc = document.querySelector(".bc"),
  ca = document.querySelector(".ca"),
  cb = document.querySelector(".cb"),
  cc = document.querySelector(".cc");
const restart = document.querySelector(".restart"),
  boxConfirm = document.querySelector(".restart-confirm"),
  blurBox = document.querySelector(".blurBox"),
  btnYes = document.querySelector(".yes"),
  btnNo = document.querySelector(".no"),
  popupAlert = document.querySelector(".alert"),
  btnTryAgain = document.querySelector(".tryAgain"),
  text = document.querySelector(".text");
let counter = 0;

restart.addEventListener("click", function (e) {
  e.stopPropagation();
  boxConfirm.classList.toggle("is-actived");
  blurBox.classList.toggle("is-actived");
});

btnYes.addEventListener("click", function (e) {
  e.stopPropagation();
  let i = document.querySelectorAll("i"),
    playBox = document.querySelectorAll(".playBox");
  playBox.forEach((value) => value.classList.remove("ticked"));
  playBox.forEach((value) => value.classList.remove("x"));
  playBox.forEach((value) => value.classList.remove("o"));
  i.forEach((value) => value.parentNode.removeChild(value));
  boxConfirm.classList.toggle("is-actived");
  blurBox.classList.toggle("is-actived");
  counter = 0;
});

btnTryAgain.addEventListener("click", function (e) {
  e.stopPropagation();
  let i = document.querySelectorAll("i"),
    playBox = document.querySelectorAll(".playBox");
  playBox.forEach((value) => value.classList.remove("ticked"));
  playBox.forEach((value) => value.classList.remove("x"));
  playBox.forEach((value) => value.classList.remove("o"));
  i.forEach((value) => value.parentNode.removeChild(value));
  popupAlert.classList.toggle("is-actived");
  counter = 0;
});

btnNo.addEventListener("click", function (e) {
  e.stopPropagation();
  boxConfirm.classList.toggle("is-actived");
  blurBox.classList.toggle("is-actived");
});

function addTick(e) {
  if (
    !e.currentTarget.classList.contains("ticked") &&
    document.querySelector(".is-won") == null
  ) {
    counter = ++counter;
    if (counter % 2 == 0) {
      e.target.classList.add("ticked");
      e.target.classList.add("x");
      e.target.insertAdjacentHTML(
        "afterbegin",
        `<i class="x fas fa-times"></i>`
      );
    }
    if (counter % 2 != 0) {
      e.target.classList.add("ticked");
      e.target.classList.add("o");
      e.target.insertAdjacentHTML(
        "afterbegin",
        `<i class="o far fa-circle"></i>`
      );
    }
  } else {
    stop;
  }
}
function checkResult() {
  function addClass(value) {
    value.classList.add("is-won");
  }
  function xFunc() {
    setTimeout(function xWon() {
      text.innerHTML = "X Won!!!";
      popupAlert.classList.add("is-actived");
    }, 2000);
  }
  function oFunc() {
    setTimeout(function oWon() {
      text.innerHTML = "O Won!!!";
      popupAlert.classList.add("is-actived");
    }, 2000);
  }
  //check bb
  if (bb.classList.contains("ticked")) {
    // check X
    if (bb.classList.contains("x")) {
      if (aa.classList.contains("x") && cc.classList.contains("x")) {
        addClass(aa.firstChild);
        addClass(bb.firstChild);
        addClass(cc.firstChild);
        xFunc();
      }
      if (ac.classList.contains("x") && ca.classList.contains("x")) {
        addClass(ac.firstChild);
        addClass(bb.firstChild);
        addClass(ca.firstChild);
        xFunc();
      }
      if (ab.classList.contains("x") && cb.classList.contains("x")) {
        addClass(ab.firstChild);
        addClass(bb.firstChild);
        addClass(cb.firstChild);
        xFunc();
      }
      if (ba.classList.contains("x") && bc.classList.contains("x")) {
        addClass(ba.firstChild);
        addClass(bb.firstChild);
        addClass(bc.firstChild);
        xFunc();
      }
    }
    // check o
    if (bb.classList.contains("o")) {
      if (aa.classList.contains("o") && cc.classList.contains("o")) {
        addClass(aa.firstChild);
        addClass(bb.firstChild);
        addClass(cc.firstChild);
        oFunc();
      }
      if (ac.classList.contains("o") && ca.classList.contains("o")) {
        addClass(ac.firstChild);
        addClass(bb.firstChild);
        addClass(ca.firstChild);
        oFunc();
      }
      if (ab.classList.contains("o") && cb.classList.contains("o")) {
        addClass(ab.firstChild);
        addClass(bb.firstChild);
        addClass(cb.firstChild);
        oFunc();
      }
      if (ba.classList.contains("o") && bc.classList.contains("o")) {
        addClass(ba.firstChild);
        addClass(bb.firstChild);
        addClass(bc.firstChild);
        oFunc();
      }
    }
  }
  // check aa
  if (aa.classList.contains("ticked")) {
    // check x
    if (aa.classList.contains("x")) {
      if (ab.classList.contains("x") && ac.classList.contains("x")) {
        addClass(aa.firstChild);
        addClass(ab.firstChild);
        addClass(ac.firstChild);
        xFunc();
      }
      if (ba.classList.contains("x") && ca.classList.contains("x")) {
        addClass(aa.firstChild);
        addClass(ba.firstChild);
        addClass(ca.firstChild);
        xFunc();
      }
    }
    // check o
    if (aa.classList.contains("o")) {
      if (ab.classList.contains("o") && ac.classList.contains("o")) {
        addClass(aa.firstChild);
        addClass(ab.firstChild);
        addClass(ac.firstChild);
        oFunc();
      }
      if (ba.classList.contains("o") && ca.classList.contains("o")) {
        addClass(aa.firstChild);
        addClass(ba.firstChild);
        addClass(ca.firstChild);
        oFunc();
      }
    }
  }
  // check cc
  if (cc.classList.contains("ticked")) {
    // check x
    if (cc.classList.contains("x")) {
      if (cb.classList.contains("x") && ca.classList.contains("x")) {
        addClass(cc.firstChild);
        addClass(cb.firstChild);
        addClass(ca.firstChild);
        xFunc();
      }
      if (bc.classList.contains("x") && ac.classList.contains("x")) {
        addClass(cc.firstChild);
        addClass(bc.firstChild);
        addClass(ac.firstChild);
        xFunc();
      }
    }
    // check o
    if (cc.classList.contains("o")) {
      if (cb.classList.contains("o") && ca.classList.contains("o")) {
        addClass(cc.firstChild);
        addClass(cb.firstChild);
        addClass(ca.firstChild);
        oFunc();
      }
      if (bc.classList.contains("o") && ac.classList.contains("o")) {
        addClass(cc.firstChild);
        addClass(bc.firstChild);
        addClass(ac.firstChild);
        oFunc();
      }
    }
  }
  if (counter == 9 && document.querySelector(".is-won") == null) {
    let i = document.querySelectorAll("i");
    i.forEach((value) => value.classList.add("is-draw"));
    setTimeout(function drawFunc() {
      text.innerHTML = "Draw!!!";
      popupAlert.classList.add("is-actived");
    }, 2000);
  }
}

document.body.addEventListener("click", checkResult);

aa.addEventListener("click", addTick);
ab.addEventListener("click", addTick);
ac.addEventListener("click", addTick);
ba.addEventListener("click", addTick);
bb.addEventListener("click", addTick);
bc.addEventListener("click", addTick);
ca.addEventListener("click", addTick);
cb.addEventListener("click", addTick);
cc.addEventListener("click", addTick);
