document
  .querySelector("#hotspotFjernbetjening")
  .addEventListener("mouseover", mouseOverHead);
document
  .querySelector("#hotspotFjernbetjening")
  .addEventListener("mouseout", onMouseOutFjernbetjening);

document
  .querySelector("#hotspotFjernbetjening")
  .addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#hotspotFjernbetjening").style.fill = "pink";
}

function onMouseOutFjernbetjening() {
  console.log("onMouseOut");
  document.querySelector("#hotspotFjernbetjening").style.fill = "#608dc5";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text>h2").textContent = "Brug fjernbetjeningen";
  document.querySelector(".placeholder").textContent =
    "Sluk for boksen tænd for livet. Du har magten lige dér i hånden. Én lille knap, og stilheden vender tilbage. Skærmen blinker, men verden venter lige bag refleksen i glasset.";
  document.querySelector(
    "#efficiency"
  ).innerHTML = `<h3>Tips</h3> <p> Tryk bare én gang. Så kan du høre fuglene igen.</p>`;
  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>Tricks</h3> <p>Køb en en fjernbetjening, der virker. Hvis du ikke kan finde slukknappen, så prøv at trykke på alle knapperne indtil skærmen bliver sort.</p>`;
}

document
  .querySelector("#hotspotAvis")
  .addEventListener("mouseover", mouseOverAvis);
document
  .querySelector("#hotspotAvis")
  .addEventListener("mouseout", onMouseOutAvis);

document.querySelector("#hotspotAvis").addEventListener("click", clickAvis);

function mouseOverAvis() {
  console.log("mouseOverAvis");
  document.querySelector("#hotspotAvis").style.fill = "pink";
}

function onMouseOutAvis() {
  console.log("onMouseOut");
  document.querySelector("#hotspotAvis").style.fill = "#608dc5";
}

function clickAvis() {
  console.log("clickAvis");
  document.querySelector(".info-text>h2").textContent = "Læs avisen";
  document.querySelector(".placeholder").textContent =
    "Læs om verden, og se den ikke kun gennem et TV Den ligger der, glemt og foldet. Papir, tryksværte, nyheder der lugter af kaffe og tid.Mens skærmen viser verden i glimt, kan du holde den i hænderne her.";
  document.querySelector(
    "#efficiency"
  ).innerHTML = `<h3>Tips</h3> <p> Mærk, hvordan tanker får form igen, når du selv læser dem frem.</p>`;
  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>Tricks</h3> <p>Lav en kop kaffe, læs den ved morgenbordet, lav en krydsogtværs, tænd en cigar</p>`;
}

document
  .querySelector("#hotspotHoved")
  .addEventListener("mouseover", mouseOverHoved);
document
  .querySelector("#hotspotHoved")
  .addEventListener("mouseout", onMouseOut);

document.querySelector("#hotspotHoved").addEventListener("click", clickHoved);

function mouseOverHoved() {
  console.log("mouseOverHoved");
  document.querySelector("#hotspotHoved").style.fill = "pink";
}

function onMouseOut() {
  console.log("onMouseOut");
  document.querySelector("#hotspotHoved").style.fill = "#608dc5";
}

function clickHoved() {
  console.log("clickHoved");
  document.querySelector(".info-text>h2").textContent =
    "Luk øjnene, før de bliver firkantede";
  document.querySelector(".placeholder").textContent =
    "De stakkels øjne har set nok. Billedrøret flimrer, reklamerne råber, og virkeligheden står i kø. Luk øjnene et øjeblik  ikke for at sove, men for at vågne. Når du åbner dem igen, er lyset anderledes.Det er ikke længere fra skærmen  det er fra dagen selv.";
  document.querySelector(
    "#efficiency"
  ).innerHTML = `<h3>Tips</h3> <p>Køb en sovemaske, så kan du ikke længere se skærmen. Prøv at atge dine hænder op foran øjnene, så lukkes der også for skærmens lys.</p>`;
  document.querySelector(
    "#requirement"
  ).innerHTML = `<h3>Hvad kan man ellers se på?</h3> <p>Gå udenfor og kig på skyer, læs avisen eller en god bog.</p>`;

  document.querySelector("#efficiency").classList.add("fadeIn");
}
