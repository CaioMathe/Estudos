const url = 'https://api.adviceslip.com/advice'
const but = document.body.querySelector('.But');


  pegarTexto()

but.onclick = ()=>{   
  pegarTexto()
}

function pegarTexto(){
    fetch(url).then(resp => resp.json()).then(corpo => {
        let texto = corpo.slip.advice
        async  function reloadTex()  {
        document.body.querySelector(".oi").innerHTML = texto    
        }
        reloadTex()      
        console.log(corpo)
    })     
}