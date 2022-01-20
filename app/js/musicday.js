document.addEventListener('DOMContentLoaded', main);
const doorSect = document.querySelector('.door-position');
const door = document.querySelector('.door');
const outDoor = document.querySelector('.door-container');
const stylesheet = document.styleSheets[0];
const guitarSect = document.querySelector('.guitar');
const guitarLines = document.querySelectorAll('.guitar-line');
const wait = document.querySelector('#wait');
const choiceOptions = document.querySelectorAll('.choice-lines-option');
const pianoImg = document.querySelector('.piano');
const violinImg = document.querySelector('.violin');
const choiceLine_3 = document.querySelector('.line_3');
const choiceLines = document.querySelectorAll('#choice-lines');  
const choiceNext = document.querySelector('#choiceNext');
const choiceText = document.querySelector('.choice-lines-text');
const guitarNext = document.querySelector('#guitarNext');
const whatAbout = document.querySelector('#whatAbout');
const mraz = document.querySelector('#mraz');
const arrangementSect = document.querySelector('.arrangement');

const idolSect = document.querySelector('#idol');
const idolLines = document.querySelectorAll('.idol-line');

const improSect = document.querySelector('.improvisation');
const bluesSectLines = document.querySelectorAll('.blues-linebox-line');

const jazzSect = document.querySelector('.jazz');
const jazzAlbum = document.querySelectorAll('.jazz-album-img');
const jazzLines = document.querySelectorAll('.jazz-lines-line');

const storyLines = document.querySelectorAll('.story-box-line');
const storySect = document.querySelector('.story');

const scrollPrompt = document.querySelector('.scroll-prompt');





let backCounter = 10;
function main() {
    
    // Choice Section animation 
    
    let animationCheck = 0;

    choiceOptions[0].addEventListener('click', function() {
        choiceOptions[0].classList.add('option-clicked');
        stylesheet.insertRule(`.choice-lines-option.choice-1::before {
            animation: typewriter 0.2s ease-out forwards;
        }
        `)
        let piano = document.querySelector('#piano')
        setTimeout(function(){
            piano.classList.add('text-bouncing')
        }, 200)
        piano.addEventListener('animationend', function() {
            
            pianoImg.classList.add('instrument-falling');
            animationCheck++;
            if (animationCheck == 2) {
                showLines();
                setTimeout(function() {
                    choiceText.classList.add('show');
                }, 2000);
            }  
        })
    })    
    choiceOptions[1].addEventListener('click', function() {
        choiceOptions[1].classList.add('option-clicked');
        
        stylesheet.insertRule(`.choice-lines-option.choice-2::before {
            animation: typewriter 0.2s ease-out forwards;
        }
        `)
        let violin = document.querySelector('#violin')
        setTimeout(function(){
            violin.classList.add('text-bouncing')
        }, 200)
        violin.addEventListener('animationend', function() {
            
            violinImg.classList.add('instrument-falling');
            animationCheck++;
            if (animationCheck == 2) {
                showLines();
                setTimeout(function() {
                    choiceText.classList.add('show');
                }, 2000)
               
            }   
        })
    })
    


    // Guitar Section animation 
    window.addEventListener('scroll', function() {
        let guitarSectTop = guitarSect.getBoundingClientRect().top;
        if (guitarSectTop == 0) {
            setTimeout(function() {
                guitarLines[0].classList.add('slide-in')
            }, 1000)
            revealGuitarLines();
        }
    });
    whatAbout.addEventListener('animationend', function(){
        
        guitarNext.classList.add('show');
        
    })
    
    
    // Idol section animation 
    window.addEventListener('scroll', function() {
        let idolTop = idolSect.getBoundingClientRect().top;
        if (idolTop == 0) {
            idolLines[0].classList.add('show');
            revealIdolLines();
        }
        
    })
    
    mraz.addEventListener('animationend', function(){
        stylesheet.insertRule(`
            .idol-lines-p1::before {
                animation: slide-in 500ms ease forwards;
            }
        `)
        let idolNext = document.querySelector('#idolNext');
        idolNext.classList.add('show');
    })
   



    // Arrangement Section animation 
    window.addEventListener('scroll', function() {
        let arragementTop = arrangementSect.getBoundingClientRect().top;
        if (arragementTop == 0) {
            console.log('yes');
            showArrangementLines();
        }
    })

    // Improvisation section animation 
    window.addEventListener('scroll', function() {
        let improSectTop = improSect.getBoundingClientRect().top;
        if (improSectTop == 0) {
            
            improSectAnimation();
        }
    })
        

    // Blues Section animation 
    
    for (let i = 0; i < 4; i++) {
        
        bluesSectLines[i].addEventListener('mouseover', function() {
            bluesSectLines[i].classList.add('hovered');
            if (bluesSectLines[i].classList.contains('hovered')) {
                
            }
            if (bluesSectLines[0].classList.contains('hovered') &&
            bluesSectLines[1].classList.contains('hovered') &&
            bluesSectLines[2].classList.contains('hovered') &&
            bluesSectLines[3].classList.contains('hovered')) {
                let bluesNext = document.querySelector('#bluesNext');
                bluesNext.classList.add('show');
                
            }
            
        })  
    }
    

    // Jazz Section animation 
    window.addEventListener('scroll', function() {
        jazzSectTop = jazzSect.getBoundingClientRect().top;
        if (jazzSectTop == 0) {
            setTimeout(function(){
                jazzAlbum[0].classList.add('img-clicked');
                jazzSectAnimation();
            }, 2000)
            
            for (let i = 0; i < 5; i++) {
         
                jazzAlbum[i].addEventListener('transitionend', function() {
                    jazzLines[i].classList.remove('hide')
                })
                 
            }
            jazzLines[4].addEventListener('transitionend', function() {
                let jazzNext = document.querySelector('#jazzNext');
                jazzNext.classList.add('show')
            })
        }
    })
    


    


    // Story Section animaiton 
    let flag = false;
    

    
    window.addEventListener('scroll', function(){
        
        let storySectTop = storySect.getBoundingClientRect().top;
        
        if (storySectTop <= 0) {
            scrollPrompt.classList.remove('hide')

            setTimeout(function() {
                scrollPrompt.classList.add('show');
               
            }, 7000)
            
            if (flag == false) {
                
                setTimeout(function(){   
                    storyLines[0].classList.add('show');
                    flag = true;
                }, 3000)
            }
            let musicdays = document.querySelector('.musicdays');
            musicdays.classList.remove('noscroll');
        }
    
        if (storySectTop < 0){
            
            window.addEventListener('scroll', function(){
                backCounter = 10;
                if (scrollPrompt.classList.contains('show')){
                    scrollPrompt.classList.remove('show');
                    
                    countingBack();
                }
                 
            });               
            
        }
        revealStorySectLines();
    });
    
        
    
    window.addEventListener('scroll', openDoor)
    
}

// Counting Back function
function countingBack() {
    setTimeout(function(){
        backCounter--;
        if (backCounter > 0) {
            countingBack();
            console.log(backCounter)
        }
        if (backCounter == 0) {
            scrollPrompt.classList.add('show');
     
        }
        
    }, 1000)
    
   
}    




// Tyepwriter function
let i = 0;
let s = 0; 
function showLines() {
    
    setTimeout(function(){
        
        let line_length = choiceLines[i].innerText.length;
        let lineName = choiceLines[i].classList[0];
       
        if (line_length <= 10) {
            s = 1;
        } else {
            s = 3; 
        }
        
        stylesheet.insertRule(`.${lineName}::before {
        animation: typewriter ${s}s steps(${line_length}) forwards;
     }
     `);
    i++;
     
    if (i < choiceLines.length) {
        showLines(); 
    }
    // Show next arrow button
    if (i == 3) {
        
        setTimeout(function(){
            choiceNext.classList.add('show');
        }, 3500)
        
    }

    }, 4000)
    
}



let guitarSectCounter = 1; 
function revealGuitarLines() {
    
    wait.addEventListener('animationend', revealGuitar)
    setTimeout(function() {
        guitarLines[guitarSectCounter].classList.add('slide-in')
        guitarSectCounter++;
        if (guitarSectCounter < 4) {
            revealGuitarLines();
        }
    }, 4000)
}

// Reveal guitar picture
function revealGuitar() {
    stylesheet.insertRule(`
        .guitar::after {
            animation: fade-out 3s ease-in forwards 1;
        }
    `)
}


// Reveal idol section lines 
let idolCounter = 1;
function revealIdolLines() {
    
    setTimeout(function() {
        idolLines[idolCounter].classList.add('show');
        idolCounter++;
        if (idolCounter < 4) {
            revealIdolLines();
        }
        if (idolLines[3].classList.contains('show')){
            setTimeout(function(){
                
                mraz.classList.toggle('hide')
                mraz.classList.add('mraz-show-up');
            }, 4000)
        }
    }, 4000)
    
}


// Arrange Section animation 

function showArrangementLines() {
    let thoughtBubble_1 = document.querySelector('#thoughtBubble-1')
    thoughtBubble_1.classList.toggle('transparent')
    stylesheet.insertRule(`
        .arrangement-linebox1-line1::after {
            animation: fade-in 1s ease-in forwards;
        }

    `)
    stylesheet.insertRule(`
        .arrangement-linebox1-line1::before {
            animation: fade-in 1s 1s ease-in forwards;
        }

    `)

    let thoughtBubble_2 = document.querySelector('#thoughtBubble-2');
    thoughtBubble_2.classList.toggle('transparent');
    stylesheet.insertRule(`
        .arrangement-linebox2-line2::after {
            animation: fade-in 1s 5s ease-in forwards;
        }

    `)
    stylesheet.insertRule(`
        .arrangement-linebox2-line2::before {
            animation: fade-in 1s 6s ease-in forwards;
        }

    `)
    setTimeout(function(){
        let arrangeNext = document.querySelector('#arrangeNext');
        arrangeNext.classList.add('show');

    }, 8000)
}

// Improvisation Section Animation 
function improSectAnimation() {
    improSect.classList.remove('filter')
    stylesheet.insertRule(`
        .improvisation::after {
            animation: load-bar 2s 3s forwards;
        }
    `)
    let whatIf = document.querySelector('#whatIf');
    whatIf.classList.add('impro-animation');
    whatIf.addEventListener('animationend', function() {
        let improNext = document.querySelector('#improNext');
        improNext.classList.add('show');
    })
}

// Jazz seciton animation 
let jazzCounter = 1;
function jazzSectAnimation() {
    
    setTimeout(function(){
        jazzAlbum[jazzCounter].classList.add('img-clicked')
        jazzCounter++;
        if (jazzCounter < 5) {
            jazzSectAnimation();
        }
    }, 4000)

    
    
}


// Reveal Story Section lines 
function revealStorySectLines() {
    
    
    for (let i = 0; i < 7; i++) {
        let windowHeight = window.innerHeight;
        let lineTop =  storyLines[i].getBoundingClientRect().top;
        let revealPoint = windowHeight * 0.2;
        let hidePoint = windowHeight * 0.8;
        let bottomHideSect = windowHeight - revealPoint;
        let topHideSect = windowHeight - hidePoint;
        if (lineTop < bottomHideSect && lineTop > topHideSect) {
            if (i > 0) {
                storyLines[i].classList.add('show');
            }
            
            
        }  else {
            storyLines[i].classList.remove('show');
        }
    }
    
    
}


// Open door 

function openDoor() {
    let windowheight = window.innerHeight;
    let doorTop = door.getBoundingClientRect().top;
    let changingScrollValue = window.scrollY;
    let constantScrollValue = windowheight * 13 + windowheight * 0.6;

    
    let rotateValue = 0;
    let brightness = 0;
    
    console.log('window height is: ' + windowheight);
    
    if (changingScrollValue - constantScrollValue >= 0) {
        let value = Math.round((changingScrollValue - constantScrollValue) / 4);
        rotateValue = value;
        brightness = value;
    }
    console.log('constantScrollValue is: ' + constantScrollValue);
    console.log('changingScrollValue is: ' + changingScrollValue);
    //Door can rotate over 120 degree or smaller than 0
    if (rotateValue > 120) {
        rotateValue = 120;
    } else if (rotateValue < 0) {
        rotateValue = 0
    }
    if (brightness > 200) {
        brightness = 200;
    } else if (brightness < 0) {
        brightness = 0;
    }
    console.log('brightness is: ' + brightness);
    console.log('doorTop is: ' + doorTop);

    if (doorTop >= windowheight * 0.3 && doorTop <= windowheight * 0.5) {
        
        door.style.setProperty("transform", `rotateY(${rotateValue}deg)`);
        outDoor.style.setProperty("box-shadow", `0px 3px ${12 + brightness}px white, -1px -1px 12px white`);

    }
    if (brightness >= 150) {
        let constantSY = windowheight * 13 + windowheight * 1.3475;
        let enlarge = (changingScrollValue - constantSY + 64) / 200;
        let enlargeDegree = (enlarge / 10);
        
        outDoor.style.setProperty("transform", `scale(${1 + enlargeDegree})`);
    }
    if (brightness < 150) {
        outDoor.style.setProperty("transform", `scale(1)`);
    }
    

    let windowHeight = window.innerHeight;
    
    const storySectBottom = storySect.getBoundingClientRect().bottom;
    console.log(windowHeight, storySectBottom);
    if (storySectBottom < windowHeight * 1.5) {
        
        window.location.href = 'storydays.html';
    }
         
}