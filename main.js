'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')

function mudarCor (){
    forma1.classList.toggle('vermelho')
}

function mudarForma (){
    forma2.classList.toggle('circulo')
}

function rotacionar (){
    forma3.classList.toggle('girar')
}

function desaparecer (){
    forma4.classList.toggle('sumir')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', rotacionar)
forma4.addEventListener('click', desaparecer)