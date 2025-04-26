const dark = document.querySelector("div.littlebell");
dark.addEventListener("click", (e) => {
  dark.style.transition = "transform 0.3s ease";
  if (dark.style.transform === "rotate(180deg)") {
    dark.style.transform = "rotate(0deg)";
    dark.style.filter = "brightness(0) ";
    switchToWhite();
  } else {
    dark.style.transform = "rotate(180deg)";
    dark.style.filter = "brightness(0) invert(1)";
    switchToDark();
  }
});

function switchToDark() {
  const container = document.querySelector("div.container");
  const sidebar = document.querySelector("div.sidebar");
  const dashboardimg = sidebar.querySelector("img");
  const h3dashboard = sidebar.querySelector("h3");
  const navbar = document.querySelector("div.navbar");
  const searchimage = navbar.querySelector(".search-logo img");
  const navlogoimage = navbar.querySelector(".rightside .little-pic");
  const navprofilename = navbar.querySelector(".rightside .profile");
  const header = document.querySelector("div.header");
  const headerimage = header.querySelector(".leftside .image img");
  const hithere = header.querySelector(".textalignement .hithere");
  const navheader = header.querySelector(".textalignement h2");
  const buttons = header.querySelectorAll(".rightside button.qwada");
  const projects = document.querySelector(".projects");
  const projecto = projects.querySelector("h3");
  const top3section = document.querySelector(".announcements");
  const top3h3 = top3section.querySelector("h3");
  const trending = document.querySelector(".trending");

  trending.style.color = "white";
  const allusers = trending.querySelector(".allusers");
  allusers.style.backgroundColor = "none";
  allusers.style.background =
    "linear-gradient(169deg,rgba(214, 214, 214, 1) 0%, rgba(48, 38, 38, 1) 100%)";
  const trendingtext = allusers.querySelectorAll(".user .info p");
  trendingtext.forEach((element) => {
    element.style.color = "black";
    element.style.fontWeight = "700";
  });

  top3h3.style.color = "white";
  const news = top3section.querySelector(".news");
  news.style.background =
    " linear-gradient(169deg,rgba(214, 214, 214, 1) 0%, rgba(48, 38, 38, 1) 100%)";
  const newscontent = news.querySelectorAll(".newsitems p,.newsitems h5");
  newscontent.forEach((element) => {
    if (element.tagName === "P") {
      element.style.color = "white";
    } else element;
  });

  projecto.style.color = "white";
  const cards = projects.querySelectorAll(".card");
  cards.forEach((element) => {
    element.style.backgroundColor = "none";
    element.style.background =
      "linear-gradient(343deg,rgba(255, 245, 245, 1) 0%, rgba(33, 31, 31, 1) 96%)";
    const cardh3 = element.querySelector("h3");
    cardh3.style.color = "white";
    const cardp = element.querySelector("p");
    cardp.style.color = "white";
  });

  navprofilename.style.color = "white";

  h3dashboard.style.color = "white";
  dashboardimg.style.filter = "brightness(0) invert(1)";
  const listelm = sidebar.querySelectorAll(" ul li");
  listelm.forEach((element) => {
    element.style.color = "white";
    const listelmIMG = element.querySelector("img");
    listelmIMG.style.filter = "brightness(0) invert(1)";
    element.classList.remove("hovering");
  });
  searchimage.style.filter = "brightness(0) invert(1)";

  hithere.style.color = "white";
  navheader.style.color = "white";
  buttons.forEach((element) => {
    element.style.backgroundColor = "transparent";
  });

  container.setAttribute(
    "style",
    "backgroundColor:black;background-image:url('icegif-942.gif'); width: 100%;   height: 100%;      background-size: cover;   background-repeat: no-repeat;  background-position: center; "
  );
  modifyBeforeElement(
    " linear-gradient(3deg,rgba(173, 49, 49, 1) 0%, rgba(48, 38, 38, 1) 100%)"
  );
}

function modifyBeforeElement(color) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((element) => {
    element.style.setProperty("--color", color);
  });
}

function switchToWhite() {
  const container = document.querySelector("div.container");
  const sidebar = document.querySelector("div.sidebar");
  const dashboardimg = sidebar.querySelector("img");
  const h3dashboard = sidebar.querySelector("h3");
  const navbar = document.querySelector("div.navbar");
  const searchimage = navbar.querySelector(".search-logo img");
  const navlogoimage = navbar.querySelector(".rightside .little-pic");
  const navprofilename = navbar.querySelector(".rightside .profile");
  const header = document.querySelector("div.header");
  const headerimage = header.querySelector(".leftside .image img");
  const hithere = header.querySelector(".textalignement .hithere");
  const navheader = header.querySelector(".textalignement h2");
  const buttons = header.querySelectorAll(".rightside button.qwada");
  const projects = document.querySelector(".projects");
  const projecto = projects.querySelector("h3");
  const top3section = document.querySelector(".announcements");
  const top3h3 = top3section.querySelector("h3");
  const trending = document.querySelector(".trending");

  trending.style.color = "black";
  const allusers = trending.querySelector(".allusers");
  allusers.style.background = "white";

  const trendingtext = allusers.querySelectorAll(".user .info p");
  trendingtext.forEach((element) => {
    element.style.color = "gray";
    element.style.fontWeight = "300";
  });

  top3h3.style.color = "black";
  const news = top3section.querySelector(".news");
  news.style.background = " #fff";
  const newscontent = news.querySelectorAll(".newsitems p,.newsitems h5");
  newscontent.forEach((element) => {
    if (element.tagName === "P") {
      element.style.color = "gray";
    }
  });

  projecto.style.color = "black";
  const cards = projects.querySelectorAll(".card");
  cards.forEach((element) => {
    element.style.background = "white";

    const cardh3 = element.querySelector("h3");
    cardh3.style.color = "black";
    const cardp = element.querySelector("p");
    cardp.style.color = "gray";
  });

  navprofilename.style.color = "black";

  h3dashboard.style.color = "#8a6255";
  dashboardimg.style.filter = "brightness(0) ";
  const listelm = sidebar.querySelectorAll(" ul li");
  listelm.forEach((element) => {
    element.style.color = "#8a6255";
    const listelmIMG = element.querySelector("img");
    listelmIMG.style.filter = "brightness(0) ";
    element.classList.add("hovering");
  });
  searchimage.style.filter = "brightness(0) ";
  hithere.style.color = "black";
  navheader.style.color = "black";
  buttons.forEach((element) => {
    element.style.backgroundColor = "#5c1717";
  });

  container.setAttribute(
    "style",
    "background:linear-gradient(90deg,rgba(191, 190, 164, 1) 0%,rgba(255, 255, 255, 1) 100%)"
  );

  modifyBeforeElement(
    "  linear-gradient(0deg, rgba(198, 156, 147, 1) 0%, rgba(212, 201, 201, 1) 74%)"
  );
}
