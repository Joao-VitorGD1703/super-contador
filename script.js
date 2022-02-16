function verificar(){
    let inicio = document.getElementById('initx')
    let fim = document.getElementById('fimtx')
    let passo = document.getElementById('pastx')
    let res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossivel contar!!!`
        window.alert('[ERRO] faltam dados!')
    }else {
           res.innerHTML = 'Contando: '
           let i = Number(inicio.value)
           let f = Number(fim.value)
           let p = Number(passo.value)
        if( p == 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
           for(let c = i; c <= f; c += p){
            res.innerHTML += `${c}➡   `
         }
         }else if(i > f){
             //contagem reguessiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}➡   `
             }
         }
         res.innerHTML +=`🏁`
    }
        
    
}