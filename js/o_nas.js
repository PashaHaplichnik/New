function showPanel() {
     document.getElementById('openPanel').style.display = "block";
}
function closePanel() {
     document.getElementById('openPanel').style.display = "none";
}
function razvernut() {
     document.getElementById('openPanel').classList.toggle('w500');
}

document.getElementById('buttShowPanel').addEventListener('click', showPanel);
document.getElementById('divCrestik').addEventListener('click', closePanel);
document.getElementById('ocno').addEventListener('click', razvernut)

function Primer() {
     document.getElementById('bloc').classList.toggle('Blue');
     window.scroll(0,50)
}

document.getElementById('but').addEventListener("click", Primer);

let shirina = document.documentElement.clientWidth;

console.log(shirina);





let select = document.getElementById('sel');
let para = document.getElementById('paragr');
para.textContent = "Тут будет список";
select.addEventListener('change', zapis);

function zapis() {
     let x = select.value;
     
     switch (x) {
          case 'Vern':
               para.textContent = "Жангада, Михаил строгов";
               break;
          case 'Simonov':
               para.textContent = "Живые и мёртвые";
               break;
          case 'Danial':
               para.textContent = "Робинзон Крузо";
               break;
          default:
               para.textContent = "Тут будет список";
     }     
}

