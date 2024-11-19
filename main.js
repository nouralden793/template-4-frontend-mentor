fetch("https://api.adviceslip.com/advice")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    document.querySelector(".id span").append(res.slip.id);
    document.querySelector(".advice").append(res.slip.advice);
  });

document.querySelector(".diceCont").onclick = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      document.querySelector(".id span").textContent = "";
      document.querySelector(".advice").textContent = "";
      document.querySelector(".id span").append(res.slip.id);
      document.querySelector(".advice").append(res.slip.advice);
    });
};
