let obory = [
  "ANDRAGOGIKA A PERSONÁLNÍ ŘÍZENÍ",
  "ANGLICKÝ JAZYK",
  "ANGLOFONNÍ LITERATURY A KULTURY",
  "ARCHEOLOGIE PRAVĚKU A STŘEDOVĚKU",
  "ARCHIVNICTVÍ A POMOCNÉ VĚDY HISTORICKÉ",
  "Asijská studia: INDOLOGIE (modul Hindština)",
  "Asijská studia: JAPANOLOGIE",
  "Asijská studia: KOREANISTIKA",
  "Asijská studia: TIBETANISTIKA",
  "BLÍZKOVÝCHODNÍ STUDIA",
  "ČESKÝ JAZYK – SPECIALIZAČNÍ STUDIUM",
  "ČESKÝ JAZYK A LITERATURA",
  "ČEŠTINA V KOMUNIKACI NESLYŠÍCÍCH",
  "DIVADELNÍ VĚDA",
  "EMPIRICKÁ A KOMPARATIVNÍ LINGVISTIKA",
  "ESTETIKA",
  "ETNOLOGIE A KULTURNÍ ANTROPOLOGIE",
  "FILMOVÁ STUDIA",
  "FILOZOFIE",
  "FONETIKA",
  "FRANCOUZSKÁ FILOLOGIE",
  "Germánská a severoevropská studia: FINSKÁ FILOLOGIE",
  "Germánská a severoevropská studia: GERMANISTIKA",
  "Germánská a severoevropská studia: NEDERLANDISTIKA",
  "Germánská a severoevropská studia: SKANDINAVISTIKA",
  "HEBRAISTIKA A ŽIDOVSKÁ STUDIA",
  "HISPANISTIKA",
  "HISTORIE - ČESKÉ DĚJINY V EVROPSKÉM KONTEXTU",
  "HISTORIE – HOSPODÁŘSKÉ A SOCIÁLNÍ DĚJINY",
  "HISTORIE – OBECNÉ DĚJINY",
  "HUDEBNÍ VĚDA",
  "IBEROAMERIKANISTIKA",
  "INFORMACE, MÉDIA A KNIŽNÍ KULTURA",
  "ITALIANISTIKA",
  "JIHOVÝCHODOEVROPSKÁ STUDIA",
  "KLASICKÁ ARCHEOLOGIE",
  "KOMPARATISTIKA",
  "LOGIKA",
  "OBECNÁ LINGVISTIKA",
  "PEDAGOGIKA",
  "POLITICKÉ TEORIE",
  "PŘEKLADATELSTVÍ: ČEŠTINA – ANGLIČTINA",
  "PŘEKLADATELSTVÍ: ČEŠTINA – FRANCOUZŠTINA",
  "PŘEKLADATELSTVÍ: ČEŠTINA - NĚMČINA",
  "PŘEKLADATELSTVÍ: ČEŠTINA - RUŠTINA",
  "PŘEKLADATELSTVÍ: ČEŠTINA - ŠPANĚLŠTINA",
  "RELIGIONISTIKA",
  "RUSKÝ JAZYK A LITERATURA",
  "ŘECKÁ A LATINSKÁ STUDIA",
  "SINOLOGIE",
  "Středoevropská studia: MAĎARSKÁ STUDIA",
  "Středoevropská studia: POLONISTIKA",
  "Středoevropská studia: ROMISTIKA",
  "Středoevropská studia: SLOVAKISTIKA",
  "STUDIA NOVÝCH MÉDIÍ",
  "TLUMOČNICTVÍ: ČEŠTINA – ANGLIČTINA",
  "TLUMOČNICTVÍ: ČEŠTINA – FRANCOUZŠTINA",
  "TLUMOČNICTVÍ: ČEŠTINA – NĚMČINA",
  "TLUMOČNICTVÍ: ČEŠTINA – RUŠTINA",
  "TLUMOČNICTVÍ: ČEŠTINA – ŠPANĚLŠTINA",
  "VÝCHODOEVROPSKÁ STUDIA",
];

let tazeneObory = [];

function vyberObor() {
    if (obory.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vybranyIndex = Math.floor(Math.random() * obory.length);

    // Získáme výherní jméno na patřičném indexu
    let vybranyObor = obory[vybranyIndex];

    // Vyřadíme vylosované jméno z osudí
    obory.splice(vybranyIndex, 1);

    // Výherní jméno si uložíme do pole k ostatním výherním
    tazeneObory.push(" " + vybranyObor);

    let vyherce = document.querySelector('#obor');
    vyherce.textContent = vybranyObor;

    let seznam = document.querySelector('#seznam');
    seznam.textContent = tazeneObory;
}