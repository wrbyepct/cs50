document.addEventListener('DOMContentLoaded', main);
const stylesheet = document.styleSheets[0];
const toyBox = document.querySelector('.box');
const langueges = document.querySelectorAll('.tools');
const languageBox = document.querySelector('.languages-box');
const thiscourseLines = document.querySelectorAll('.thiscourseLines');


function main() {
    
    // images dragging setting up
    const inBoxImgs = document.querySelectorAll('.in-box');
    const outBoxImgs = document.querySelectorAll('.out-of-box');
    const Box = document.querySelector('.conclusion-box-images');
    const conclusionSect = document.querySelector('.conclusion');
    
    
    
   //Instruction animation 
   let cubeToy = document.querySelector('#cube');
   
   let instruction = document.querySelector('.line');
   setTimeout(() =>{
       
    toyBox.classList.remove('disappear')
    }, 1000);
   setTimeout(() =>{
       
       toyBox.classList.remove('hide')
   }, 2000);
   
   toyBox.addEventListener('transitionend', () => {
    setTimeout(() => {
        cubeToy.classList.remove('show-none');
        
    }, 1000) 
    setTimeout(() => {
        cubeToy.classList.remove('show-none');
        cubeToy.classList.remove('hide');
    }, 2000) 
       
   })

   cubeToy.addEventListener('transitionend', () =>{
       setTimeout(() => {
           instruction.classList.remove('hide');
           instruction.classList.add('instructiontyping')
       }, 3000) 
   })

   // Hide instruction 
   cubeToy.addEventListener('mousedown', () => {
       instruction.classList.add('show-none')
   })





    //Toy dragging animation 
    outBoxImgs.forEach(toy => {
        toy.addEventListener('mousedown', () => {
            
            toy.classList.add('dragging');
            

            conclusionSect.addEventListener('mousemove', (e) => {
                
                if (toy.classList.contains('dragging')) {
                    toy.style.setProperty('left', `${e.pageX - 50}px`);
                    let toyHeight = toy.clientHeight;
                    toy.style.setProperty('top', `${e.pageY - (toyHeight / 2)}px`);
                }
                
                
            });
            let draggingToy = document.querySelector('.dragging')
            draggingToy.addEventListener('mouseup', () => {
               
                
                draggingToy.classList.remove('dragging');   
                
            })
            
        })
        
        Box.addEventListener('mouseup', (e) => {
            
            if (toy.classList.contains('dragging')) {
                toy.classList.add('dragged');
                toy.classList.remove('dragging');
                toy.style.left = null;
                toy.style.top = null;
            }
            
            // Because using drag to append to another container is disabled by default
            e.preventDefault();
            if (toy.classList.contains('dragged')) {
                Box.appendChild(toy);
                toy.classList.add('dropping-on-box');
                toy.classList.remove('dragged');
                
            }
    
               
        })
    })

    // Show text animation 
    let cube = document.querySelector('#cube');
    cube.addEventListener('animationend', () => {
        cube.classList.add('disappear');
        let cubeLines = document.querySelectorAll('.solving-puzzles-line');
        cubeLines[0].classList.remove('disappear');
        cubeLines[0].classList.add('upMovingText')
        for (let i = 1; i < cubeLines.length; i++) {
            cubeLines[i - 1].addEventListener('animationend', () => {
                cubeLines[i].classList.remove('show-none');
                let steps = cubeLines[i].innerText.length;
                let seconds = 2;
                if (steps > 12) {
                    seconds = seconds;
                } else {
                    seconds = 1;
                }

                stylesheet.insertRule(`.${cubeLines[i].className.split(" ")[2]}::before {
                    animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
                }`)
                if (i == cubeLines.length - 1) {
                    let puzzleSect = document.querySelector('.solving-puzzles') 
                    setTimeout(function() {
                        puzzleSect.classList.add('hide');
                    }, 6000) 
                    
                    setTimeout(guitarAnimation, 9000);
                
                }
            })
        }

    })
    //cs50 animation 
    document.addEventListener('scroll', ()=> {
        console.log('scrolling')
        const jay = document.querySelector('.jayline');
        const homepage_1 = document.querySelector('.homepageline_1');
        const homepage_2 = document.querySelector('.homepageline_2');
        let myhomepageSect = document.querySelector('#myhomepage')
        let upperbound = myhomepageSect.getBoundingClientRect().top;
        console.log(upperbound);
        if (upperbound == 0) {
            
            const homepageSect = document.querySelector('.myhomepageSect');
            let pixel = 50;
            setInterval(() => {
                if (pixel >= 0) {
                    homepageSect.style.setProperty('filter', `blur(${pixel}px)`)
                     pixel -= 1;
                } else {
                    return;
                }
            }, 50);
            setTimeout(() => {
                thiscourseLines[0].classList.add('appearUp');
            }, 5000)
            thiscourseLines[0].addEventListener('animationend', () =>{
                thiscourseLines[1].classList.add('appearUp')
            })
            thiscourseLines[1].addEventListener('animationend', () =>{
                setTimeout(() => {
                    jay.classList.remove('hide');
                    jay.classList.add('jayTyping');
                    jay.addEventListener('animationend', () =>{
                        setTimeout(() => {
                            stylesheet.insertRule(`.codingdays .myhomepageSect-bg-textlayer .myname-lines-text.jayline::before {
                                border-right: 3px solid transparent;
                            }`)
                        }, 1000)
                    
                    })
                }, 2000)
                
                setTimeout(() => {
                    homepage_1.classList.remove('hide');
                    homepage_1.classList.add('hompageTyping');
                    setTimeout(() => {
                        stylesheet.insertRule(`.codingdays .myhomepageSect-bg-textlayer .myname-lines-text.homepageline_1::before {
                            border-right: 3px solid transparent;
                        }`)
                    }, 1900)
                    setTimeout(() => {
                        homepage_2.classList.remove('hide');
                        homepage_2.classList.add('hompageTyping_2');
                    }, 2000)
                }, 4500)

                
            })
            
                
                
        
        }
    })

    
    
}

function guitarAnimation() {
    

    let guitar = document.querySelector('#guitar');
    guitar.classList.remove('show-none');
    setTimeout(() => {
        guitar.classList.remove('hide');
    }, 100)
    
    
    guitar.addEventListener('animationend', () => {
        guitar.classList.add('disappear');
        let guitarLines = document.querySelectorAll('.creating-music-line');
        guitarLines[0].classList.remove('disappear');
        guitarLines[0].classList.add('upMovingText')
        for (let i = 1; i < guitarLines.length; i++) {
            guitarLines[i - 1].addEventListener('animationend', () => {
                guitarLines[i].classList.remove('show-none');
                let steps = guitarLines[i].innerText.length;
                let seconds = 2;
                if (steps > 12) {
                    seconds = seconds;
                } else {
                    seconds = 1;
                }
                stylesheet.insertRule(`.${guitarLines[i].className.split(" ")[2]}::before {
                    animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
                }`)
                if (i == guitarLines.length - 1) {
                    let guitarSect = document.querySelector('.creating-music') 
                    setTimeout(function() {
                        guitarSect.classList.add('hide');
                    }, 6000) 
                    
                    
                    setTimeout(bbAnimation, 9000);
                
                    
                }
            })
        }

    })

}

function bbAnimation() {
    

    let bb = document.querySelector('#bb');
    bb.classList.remove('show-none');
    setTimeout(() => {
        bb.classList.remove('hide');
    }, 100)
    bb.addEventListener('animationend', () => {
        bb.classList.add('disappear');
        let bbLines = document.querySelectorAll('.compelling-story-line');
        bbLines[0].classList.remove('disappear');
        bbLines[0].classList.add('upMovingText')
        for (let i = 1; i < bbLines.length; i++) {
            bbLines[i - 1].addEventListener('animationend', () => {
                bbLines[i].classList.remove('show-none');
                let steps = bbLines[i].innerText.length;
                let seconds = 2;
                if (steps > 12) {
                    seconds = seconds;
                } else {
                    seconds = 1;
                }
                stylesheet.insertRule(`.${bbLines[i].className.split(" ")[2]}::before {
                    animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
                }`)
                if (i == bbLines.length - 1) {
                    let bbSect = document.querySelector('.compelling-story') 
                    setTimeout(function() {
                        bbSect.classList.add('hide');
                    }, 6000) 
                    
                    
                    bbSect.addEventListener('transitionend', () =>{
                        
                            toyBox.classList.add('hide');
                        
                        toyBox.addEventListener('transitionend', () =>{
                            setTimeout(codingAnimation, 1000);
                            
                        })
                    })

                
                    
                }
            })
        }

    })

}

function codingAnimation() {

    let codingLines = document.querySelectorAll('.coding-line');
    codingLines[0].classList.remove('show-none');
    let steps = codingLines[0].innerText.length;
    let seconds = 2;
    if (steps > 12) {
        seconds = seconds;
    } else if (steps < 5) {
        seconds = 0.5;
    } else {
        seconds = 1;
    }
    stylesheet.insertRule(`.${codingLines[0].className.split(" ")[2]}::before {
        animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
    }`)

    for (let i = 1; i < codingLines.length; i++) {
        let toolBox = document.querySelector('.conclusion-codingToolBox') 
            toolBox.addEventListener('transitionend', () =>{
                if (i == 4) {

                    codingLines[i].classList.remove('show-none');
                    let steps = codingLines[i].innerText.length;
                    let seconds = 2;
                    if (steps > 12) {
                        seconds = seconds;
                    } else {
                        seconds = 1;
                    }
                    stylesheet.insertRule(`.${codingLines[i].className.split(" ")[2]}::before {
                        animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
                    }`)
                
                }
                    
            })


            let webLanguage = document.querySelector('.web') 
            webLanguage.addEventListener('transitionend', () =>{

                if (i == 5) {
                    codingLines[i].classList.remove('show-none');
                    let steps = codingLines[i].innerText.length;
                    let seconds = 2;
                    if (steps > 12) {
                        seconds = seconds;
                    } else {
                        seconds = 1;
                    }
                    stylesheet.insertRule(`.${codingLines[i].className.split(" ")[2]}::before {
                        animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
                    }`)
                }
               
            })
            webLanguage.addEventListener('animationiteration', () => {
                if (i == 6) {
                    codingLines[i].classList.remove('show-none');
                    let steps = codingLines[i].innerText.length;
                    let seconds = 2;
                    if (steps > 12) {
                        seconds = seconds;
                    } else {
                        seconds = 1;
                    }
                    stylesheet.insertRule(`.${codingLines[i].className.split(" ")[2]}::before {
                        animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
                    }`)
                }
            })
          
            codingLines[i - 1].addEventListener('animationend', () => {
                
                if (i < 4) {
                    codingLines[i].classList.remove('show-none');
                    let steps = codingLines[i].innerText.length;
                    let seconds = 2;
                    if (steps > 12) {
                        seconds = seconds;
                    } else {
                        seconds = 1;
                    }
                    stylesheet.insertRule(`.${codingLines[i].className.split(" ")[2]}::before {
                        animation: typewriter ${seconds}s 1s steps(${steps}) forwards;
                    }`)
                }
                
                
            })

        if (codingLines[i].className.split(" ")[2] == 'fourth') {
            console.log('yes')
            codingLines[i].addEventListener('animationend', () =>{
                setTimeout(() => {
                    const toolBox = document.querySelector('.conclusion-codingToolBox')
                    toolBox.classList.remove('show-none');
                    toolBox.classList.remove('hide');
                }, 500);
                
                
            })
        }
        if (codingLines[i].className.split(" ")[2] == 'fifth') {
            codingLines[i].addEventListener('animationend', () =>{
                 
                
                languageBox.classList.add('rise');
                setTimeout(() => {
                    langueges.forEach(element => {
                        element.classList.add('spread');
                    });
                }, 1000);         
            })
        }

        if (codingLines[i].className.split(" ")[2] == 'sixth') {
            codingLines[i].addEventListener('animationend', () =>{
                setTimeout(() => {
                    let number = 0;
                    for (let i = 0; i < langueges.length; i++) {
                        let lanName = langueges[i].className.split(" ")[0];
                        stylesheet.insertRule(`
                            .${lanName} {
                                
                                animation: orbiting_${number} 3s linear 2;
                                
                            }
                            
                        `)
                        number++;
                    }
                }, 500);
                
                
                
                
            })
        }


    }

    langueges[0].addEventListener('animationend', () => {
        
         for (let i = 1; i < langueges.length; i++) {
            
             langueges[i].classList.add('unite');
         }
         setTimeout(() =>{
            languageBox.classList.remove('rise');
            languageBox.addEventListener('transitionend', () =>{
                setTimeout(() => {
                    location.href = "#myhomepage"
                }, 800)
            })
         }, 2500)
             
         
    })
    
}




