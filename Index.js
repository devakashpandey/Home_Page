const selectBox = document.querySelector(".select-box");
const selectOption = document.querySelector(".select-option");
const locationId = document.querySelector("#location");
const optionSearch = document.querySelector("#optionSearch");
const options = document.querySelector(".options");
const optionLists = document.querySelectorAll(".options li");

selectOption.addEventListener("click", () => {
  selectBox.classList.toggle("active");
});

optionLists.forEach((optList) => {
  optList.addEventListener("click", function () {
    text = this.textContent;
    locationId.value = text;
    selectBox.classList.remove("active");
  });
});

optionSearch.addEventListener("keyup", function () {
  var filter, li, i, textValue;
  filter = this.value.toUpperCase();
  li = options.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    liCount = li[i];
    textValue = liCount.textContent || liCount.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = " ";
    } else {
      li[i].style.display = "none";
    }
  }
});

body.addEventListener("click", function () {
  selectBox.classList.remove("active");
});
