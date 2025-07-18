//Color Toggler //



  const btnToggler = document.getElementById("btn-toggler");
  const section = document.getElementById("sec-one");

  btnToggler.addEventListener("click", () => {
    btnToggler.classList.toggle("active");

    const isDark = btnToggler.classList.contains("active");

   
    section.style.backgroundColor = isDark ? "black" : "white";
  });
