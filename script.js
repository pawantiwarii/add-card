const h1 = document.querySelector('h1')
const myName = document.querySelector('.pawan')


const card = document.querySelector('.card')

// cpying the card by using javaScript

let count = 1

card.addEventListener('click', ()=> {
   

    // for(let i = 2; i <=10; i++){
        //////////////////////////////////////////////////
        // card print                                     //
        const newCard = document.createElement('div')     //
        newCard.classList.add('card')                     //
        myName.append(newCard)                            //  
        console.log(newCard);                             //  
        ////////////////////////////////////////////////////

        // numbering on card 

        ////////////////////////////////////////////////////
        const paragraph = document.createElement('p')      //
        newCard.append(paragraph)                          // 
        paragraph.innerText = count
        count++                            // 
        ////////////////////////////////////////////////////
    // }

    
    

})







// function sayHi(){
//     console.log('hiiii');
    
// }
// function secondSayHi(){
//     console.log('second hiii');
    
// }

// h1.addEventListener('click', function(){
//     console.log('second hii');
    
// })


// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', secondSayHi )



// function change(){
//     console.log('cardShapeSmall');
//     document.querySelector('.card').style.backgroundColor = "hotpink"
//     document.querySelector('.card').style.scale = '0.5'
//     const time = setTimeout(reload, 2000)
    
// }

// function reload(){
//     location.reload()
//     document.querySelector('.card').style.scale = '1'  

// }


// card.addEventListener('click', change)
// card.addEventListener('click', () => {
//     alert('you click on card')
    
// })


