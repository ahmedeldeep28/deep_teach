let clickDrop = document.getElementById("drop");
let listDown = document.getElementById("ul-list");

clickDrop.onclick = ()=>{
    listDown.classList.toggle("drop")
}

let meArray = [
    {
        text:"and programming websites. We have distinguished experts in all fields and our work is very distinguished so we are distinguished in the field of advertising with the best prices and the highest",
        name: "hary butter"
    },
    {
        text:"We are the largest company in the field of advertising, design and programming websites. We have distinguished experts in all fields and our work is very distinguished so we are distinguished ",
        name: "saed naery"
    },
    {
        text:"The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get early Pre-order now to get early Pre-order now to ",
        name: "gaka nouer"
    },
    {
        text:"We are the largest company in the field of advertising, design and programming websites. We have distinguished experts in all fields and our work is very distinguished so we are distinguished ",
        name: "messi ddiwez"
    },
    {
        text:"and programming websites. We have distinguished experts in all fields and our work is very distinguished so we are distinguished in the field of advertising with the best prices and the highest",
        name: "ronaldo elddont"
    }
];
let reve = document.getElementById("reve");
let nameReve = document.getElementById("name");
let btnPreve = document.getElementById("prev");
let btnNext = document.getElementById("next");
let counter = 0;

btnNext.onclick = ()=>{
    counter ++;
    if(counter > meArray.length - 1){
        counter = 0
    }
    allFN();
}
btnPreve.onclick = ()=>{
    counter --;
    if(counter < 0){
        counter = meArray.length - 1
    }
    allFN();
}
function allFN(){
    nameReve.textContent = meArray[counter].name;
    reve.textContent = meArray[counter].text;
}
allFN();
let rocketUp = document.getElementById("up");

window.onscroll = ()=>{
    if(window.pageYOffset >= 4000){
        rocketUp.style.display = "block"
    }else{
        rocketUp.style.display = "none"
    }
        
    rocketUp.onclick = ()=>{
        window.location.hash = "home";
    }
}
let clints = document.getElementById("clints");
let Trustes  = document.getElementById("Trustes ");
let Employees = document.getElementById("Employees");
let Projects  = document.getElementById("Projects ");
let i = 0;

function clintsFn(){
        if(clints.textContent  >= 5000){
            clearInterval(clintsFn)
        }else{
            clints.textContent = i = i + 10
        }
}
// function TrustesFn(){
//     if(Trustes.textContent  >= 95){
//         clearInterval(TrustesFn)
//     }else{
//         clints.textContent = i = i + 10
//     }
// }
// function EmployeesFn(){
//     if(Employees.textContent  >= 155){
//         clearInterval(EmployeesFn)
//     }else{
//         clints.textContent = i = i + 10
//     }
// }
// function ProjectsFn(){
//     if(Projects.textContent  >= 95000){
//         clearInterval(ProjectsFn)
//     }else{
//         clints.textContent = i = i + 10
//     }
// }
// curnt()
setInterval(clintsFn,0.1)
// setInterval(TrustesFn,0.1)
// setInterval(EmployeesFn,0.1)
// setInterval(ProjectsFn,0.1)

