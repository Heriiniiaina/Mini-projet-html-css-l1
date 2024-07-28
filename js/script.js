let body = document.querySelector('body')
let btn = document.querySelector('.btn')
let theme = document.getElementById('theme-choix')
let save = localStorage.getItem("theme")
let btnPanier = document.getElementsByClassName('fa-shopping-cart')
let nbrPanier = document.querySelector('.nbr-panier')
//acheter
let pannier = document.querySelector('.panier')
let acheter = document.querySelector('.acheter')
let nom = document.querySelectorAll('p.nom')
let nom_acheter = document.querySelector('.nom-acheter')
let j = 0
nbrPanier.innerHTML = j
for(var i=0;i<btnPanier.length;i++){
    j=1
    
    btnPanier[i].addEventListener('click',()=>{
        nbrPanier.innerHTML = j++
        
        for(var l=0; l<nom.length;l++){
            let nom_achete = nom[l].textContent
            let qnew = document.createElement('p')
            qnew.textContent = nom_achete 
            document.acheter.appendChild(qnew)
        }
    })  
    
}
/*
for(var l=0; l<nom.length;l++){
    nom[l].addEventListener('click',()=>{
        let content = this.textContent
        let qnew = document.createElement('p')
        qnew.textContent = content
        document.acheter.appendChild(qnew)
    })
    
    
}*/
pannier.addEventListener('click',()=>{
    acheter.classList.toggle('buy')
})
/*
for(var l=0;l<nom.length;l++){
    if(aze > 0){

    }
}*/

// FIN

btn.addEventListener('click',()=>{
    body.classList.toggle('responsive')
})
if (save){
    document.body.classList.add(save)
}
theme.addEventListener('change',()=>{
    let choix = theme.value
   // let body = document.getElementsByTagName("body")[0]
    document.body.classList.remove("rouge","bleu")
    document.body.classList.add(choix)
    localStorage.setItem("theme",choix)
})
