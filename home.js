let buttonElFarm = document.getElementById("button-switch");
let farmEL = document.querySelectorAll(".home-container-section-text-tab-farms");
let spanFarm = document.getElementById("farms");
let spanPools = document.getElementById("pools");

function switchEl() {
    for (let i = 0; i <= farmEL.length; i++) {
        if(farmEL[i].style.display ==="unset"){
         farmEL[i].style.display="none";
         spanFarm.style.display="none";
         spanPools.style.display="unset";
        }else {
            farmEL[i].style.display="unset";
            spanFarm.style.display="unset";
            spanPools.style.display="none";
        }

    }
}



buttonElFarm.addEventListener("click", switchEl)
setInterval(switchEl, 9000);