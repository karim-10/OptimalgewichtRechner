
let größ2 = (document.getElementById('körpergröße'))
let alter = (document.getElementById('alter'))
let schmale = document.getElementById('schmale')
let breite = document.getElementById('breite')
let Ergbnis = document.getElementById('result')
function submit1(){
   console.log("test")
   let result       
    if (schmale.checked){
        result = ((größ2.value - 100) + (alter.value / 10 )) * 0.9 * 0.9    
        // console.log(Ergebnis)
    }else {
        result = ((größ2.value - 100) + (alter.value / 10 )) * 0.9 * 1.1
        // console.log(Ergebnis)
    }
    Ergbnis.innerHTML = "Dein Idealgewicht ist " + result
}