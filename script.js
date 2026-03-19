const tasbih = document.getElementById("tasbih")
const counter = document.getElementById("count")
const zikrSelect = document.getElementById("zikr")
const zikrTitle = document.getElementById("currentZikr")

let total = 100
let current = 0

// create beads
for(let i=0;i<total;i++){

let bead=document.createElement("div")
bead.classList.add("bead")

let angle=(i/total)*2*Math.PI
let radius=180

let x=200 + radius*Math.cos(angle)
let y=200 + radius*Math.sin(angle)

bead.style.left=x+"px"
bead.style.top=y+"px"

tasbih.appendChild(bead)

}

// update zikr text
zikrSelect.addEventListener("change",()=>{
zikrTitle.innerText=zikrSelect.value
})

// click tasbih area
tasbih.addEventListener("click",countTasbih)

function countTasbih(){

if(current<total){

let beads=document.querySelectorAll(".bead")

beads[current].classList.add("active")

current++

counter.innerText=current+" / 100"

}

}

function resetTasbih(){

current=0
counter.innerText="0 / 100"

document.querySelectorAll(".bead").forEach(b=>{
b.classList.remove("active")
})

}