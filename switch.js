const links = document.querySelectorAll("a");
const tabs = document.querySelectorAll(".tab");
const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text")

function clickOnLink(index) {
  links[index].addEventListener("click", (event) => {
    event.preventDefault();
    console.log("hi");
    for (let k = 0; k < links.length; k++) {
      links[k].classList.remove("active");
      tabs[k].classList.remove("active");
    }
    links[index].classList.add("active");
    tabs[index].classList.add("active");
    text.classList.remove("active")
  });
}
function closeTab(index) {
  btns[index].addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (links[index].classList.contains("active")) {
      links[index].classList.remove("active");
    tabs[index].classList.remove("active");
    if (index > 0) {
      links[index - 1].classList.add("active");
      tabs[index - 1].classList.add("active");
    }
    else {
        text.classList.add("active")
    }

    console.log(links[index].classList);
    }
    

    // console.log(index)
  });
}
for (let i = 0; i < links.length; i++) {
  clickOnLink(i);
  closeTab(i);
}
