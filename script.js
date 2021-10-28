const ligar = document.getElementById('btligar')
const desligar = document.getElementById('btdesligar')
const lampada = document.getElementById('lamp')

function isLampadaQuebrada() {
    return lampada.src.indexOf('quebrada') > -1
}
function ligarLampada() {
    if (!isLampadaQuebrada()) {
        lampada.src = 'ligada.jpg'
    }
}
function desligarLampada() {
    if (!isLampadaQuebrada()) {
        lampada.src = 'desligada.jpg'
    }
}
function lampadaQuebrada() {
    lampada.src = 'quebrada.jpg'
}

ligar.addEventListener('click', ligarLampada)
desligar.addEventListener('click', desligarLampada)
lampada.addEventListener('mouseover', ligarLampada)
lampada.addEventListener('mouseleave', desligarLampada)
lampada.addEventListener('dblclick', lampadaQuebrada)

