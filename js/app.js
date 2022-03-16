const d = document
const hambur = d.querySelector(".hambur")
const navContent = d.querySelector('.navContent')

let response = false

hambur.addEventListener("click",()=>{
    navChange()
})

const menuLi = d.querySelectorAll(".contUlNav li a")

for (const li of menuLi) {
    li.addEventListener("click",()=>{
        navChange()
    })
}

function navChange(){
    navContent.classList.toggle("navContentActive")

}

const contactoButton = d.querySelector('.contactButton button')
const modalPer = d.querySelector('.modalPer')

const res = document.querySelector('.res')

const modalCont = document.querySelector('.modalCont')


const cerrar = d.querySelector('[class="fas fa-times"]')


contactoButton.addEventListener("click",()=>{ 
    modalPer.classList.remove('modalPerOculto')
})

cerrar.addEventListener("click",()=>{
    if( response ){
        window.location.href = 'https://dantebronzini.com.ar/'
    }else{
        modalPer.classList.add('modalPerOculto')
    }
    //probar
})



window.onload = () =>{

    const urlString = window.location.href
    const url = new URL(urlString);
    response = url.searchParams.get("res")

    if ( response ){
        modalPer.classList.remove('modalPerOculto')
        modalCont.classList.add('d-none')
        res.classList.remove('d-none')
    }
}