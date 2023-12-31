window.onload = () => {
  // On Title Hover
  let onHover = document.getElementById("nav-hall");
  onHover.classList.add("onHover");

  //On Toggle Menu
  let menu = document.querySelectorAll("#menu-icon");
  let toggle = document.querySelector(".toggle-menu");
  for (let m of menu) {
    m.addEventListener("click", () => {
      toggle.classList.toggle("active");
      document.body.classList.toggle("fixed");
      m.classList.toggle("bx-menu");
      m.classList.toggle("bx-x");
    });
  }

  //Active booking
  let booking = document.querySelectorAll("#booking");
  let adv = document.querySelector(".advice");
  let advice = document.querySelector(".wrapper-advice");
  let xIcon = document.querySelector("#x-icon");
  advice.addEventListener("click", (e) => {
    if (!adv.contains(e.target) && !e.target.matches(".advice")) {
      advice.classList.remove("active-advice");
    }
  });
  for (let b of booking) {
    b.addEventListener("click", () => {
      advice.classList.add("active-advice");
    });
    xIcon.addEventListener("click", () => {
      advice.classList.remove("active-advice");
    });
  }
  
  //Input effect
  let wrap = document.querySelectorAll(".wrapper-input");
  for (let em of wrap) {
    let email = em.querySelector(".input");
    let eplace = em.querySelector(".place-input");
    email.addEventListener("focus", () => {
      eplace.classList.add("active-input");
    });

    // email.addEventListener("focusout",()=>{
    //   eplace.classList.remove("active-input");
    // });
  }

  //Hall effect
  // let x = window.innerWidth;
  // if (x > 768) {
  //   let hallEffect = document.querySelectorAll(".hall-item");
  //   hallEffect[2].classList.add("active-hall");
  //   for (let i = 0; i < hallEffect.length; i++) {
  //     hallEffect[i].addEventListener("click", () => {
  //       if (hallEffect[i].classList.contains("active-hall")) {
  //         hallEffect[i].classList.remove("active-hall");
  //       } else {
  //         for (let j = 0; j < hallEffect.length; j++) {
  //           if (i !== j && hallEffect[j].classList.contains("active-hall")) {
  //             hallEffect[j].classList.remove("active-hall");
  //           }
  //         }
  //         hallEffect[i].classList.add("active-hall");
  //       }
  //     });
  //   }
  // }

  //Hide nav & go top
  const nav = document.querySelector(".nav-bar");
  const nav1 = document.querySelector(".nav-bar1");
  const goTop=document.querySelector(".go-top");
  goTop.addEventListener("click",()=>{
    document.body.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
  window.addEventListener(
    "scroll",
    debounceFn(function (e) {
      const scrollY = window.pageYOffset;
      if (scrollY >= 10) {
        nav.classList.remove("hide");
        nav1.classList.add("hide");
      } else {
        nav.classList.add("hide");
        nav1.classList.remove("hide");
      }
      if (scrollY >= 400)
      {
        goTop.classList.remove("hide");
      }
      else
      {
        goTop.classList.add("hide");
      }
    }, 10)
  );
  // 2. debounce: là kỹ thuật buộc một hàm phải đợi một khoảng thời gian nhất định trước khi thực thi. Trong khoản thời gian đợi, mọi tác động sẽ đều bị bỏ qua và chỉ nhận duy nhất 1 hành động diễn ra trong thời gian chúng ta định trước.
  function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
};

$(window).ready(()=>{
  $(".hall-map>img").eq(2).addClass("active-img");
  $(".hall-item").click(function(){
    if($(this).hasClass("active-hall")){
      $(this).removeClass("active-hall");
    }
    else{
      $(".hall-item").removeClass("active-hall");
      $(this).addClass("active-hall");
    }
    $(".hall-map>img").removeClass("active-img");
    $(".hall-map>img").eq($(this).index()).addClass("active-img");
  })
  $(".hall-menu-item").click(function(){
    $(".hall-menu-item").removeClass("active-menu");
    $(this).addClass("active-menu");
    $(".hall-item").removeClass("active-hall-item");
    $(".hall-item").eq($(this).index()).addClass("active-hall-item");
    $(".hall-map>img").removeClass("active-img");
    $(".hall-map>img").eq($(this).index()).addClass("active-img");
  })
  $(".select").focus(function(){
    $(".select").parent().css("color","var(--text)");
    $(this).parent().css("color","var(--text2)");
  })
})