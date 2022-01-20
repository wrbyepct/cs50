document.addEventListener('DOMContentLoaded', main);
const stylesheet = document.styleSheets[0];
const earlydays = document.querySelector('.earlydays');
const solve_me = document.querySelector('#solve_me');
const counter = document.querySelector('#counter');
const text = document.querySelector('#cube-text');
const wow = document.querySelector('.wow');
const world_record = document.querySelector('.wr');
const your_reconrd = document.querySelector('.yr');
const cube_box = document.querySelector('.cube-box');
const but = document.querySelector('.but-box');
const text_box = document.querySelector('.text-box');
const lines = document.querySelectorAll('.line');
const musicBox = document.querySelector('.music-box');
const musicCta = document.querySelector('.music-btn');
const fillMe = document.querySelector('.music-btn-cta');
const musicWords = document.querySelectorAll('.music-words');
const ME = document.querySelector('.ME')
const moanin = document.querySelector('#moanin');



const subtitleBar = document.querySelector('.subtitle-bar')
const subtitles = document.querySelectorAll('.subtitle');
const pictures = document.querySelectorAll('.image');
const fallingcube = document.querySelector('.cube-box-cube');



function main() {
        
    
    // Chilhood animation
    const subtitleBar = document.querySelector('.subtitle-bar')
 
    let firstCounter = 0;
    // When to show subtitle bar
    const firstLine = document.querySelector('#t1');
    firstLine.addEventListener('animationend', () =>{
        
        PLAnimation(pictures[firstCounter], subtitles[firstCounter], firstCounter)
        setTimeout(() =>{
            subtitleBar.classList.add('subtitleLoaded')
        }, 3000);
       
    })
    



    // Cube animation
    solve_me.addEventListener('click', function() {
        const cube_img = document.querySelector('#cube');
        solve_me.classList.add('clicked-btn')
        cube_img.src = '/app/images/turningcube.gif';
        
        text.innerText = 'Go!'
        let timer = 0;
        let int = setInterval(function() {
            timer++;
            if (timer >= 383) {
                clearInterval(int)
            } 
            let seconds = timer / 100;
            counter.innerText = `0${seconds}`;
            
        }, 10)
        // Change cube image after 3.82(s)
        setTimeout(function() {
            cube_img.src = 'app/images/solved_cube.png';  
        }, 3829)

        // Hide 'Go!'
        setTimeout(function() {
            text.classList.toggle('hide');
        }, 1829)

        // Show comments
        setTimeout(function() {
            wow.classList.toggle('hide');

        }, 6329)
        setTimeout(function() {
            world_record.classList.toggle('hide');

        }, 8329)
        setTimeout(function() {
            your_reconrd.classList.toggle('hide');
        }, 10329)
        setTimeout(function(){
            text.innerText = "CONGRATS!";
            text.classList.toggle('hide');
            text.classList.add('blinking');
            
        }, 12329)
        setTimeout(function() {
            cube_box.classList.add('fade-out');
            text_box.style.display = 'none';
            showLines(); 
            earlydays.classList.remove('whole-page');
            earlydays.classList.add('half-page');
            
            
        }, 15000)
        setTimeout(function() {
            musicBox.classList.add('note');
        
            
            
        }, 36000)
        
        setTimeout(function() {
            
            const note = document.querySelector('.note');
            fillMe.classList.toggle('hide');
            
            note.addEventListener('animationend', function() {
                
                note.classList.toggle('disappear');
                
            })
        }, 37000)
        musicCta.addEventListener('click', function() {
            but.classList.add('fade-out');
            fillMe.classList.add('clicked');
            stylesheet.insertRule(`
                .music-btn-cta:hover::after {
                    display: none;
                }
            `)
            but.addEventListener('animationend', function(){
                musicCta.classList.add('move-up');
                musicCta.addEventListener('animationend', function() {
                    wordsPlay();
                    let FEEL = musicWords[0];
                    FEEL.addEventListener('animationend', function() {
                       
                        ME.classList.add('moving-down')
                        ME.addEventListener('animationend', function() {
                            moanin.play();
                            fillMe.classList.add('pumping');
                            let n = 0;
                            fillMe.addEventListener('animationend', function() { 
                                n++;
                                if (n == 2) {
                                    window.location.href = 'musicdays.html';
                                    
                                }
                            })
                            
                        })
                    })
                })

            })
        })
        

       
    })

    // Show "Ready" and "Timer"
    solve_me.addEventListener('animationstart', function() {
        setTimeout(function(){
            counter.classList.toggle('hide');
        }, 3000)
        setTimeout(function(){
            text.classList.toggle('hide');
        }, 5000)
        
    })
}



 // Pictures and Lines animation 

function PLAnimation (picture, subtitle, i) {
    picture.classList.remove('disappear');
    setTimeout(() =>{
        picture.classList.remove('hide');
    }, 1000);
    picture.addEventListener('transitionend', () =>{
        if (!picture.classList.contains('hide')) {
            subtitle.classList.remove('hide');
            setTimeout(() =>{
                picture.classList.add('hide');
                
            }, 2000)
        }
        if (picture.classList.contains('hide')) {
            subtitle.classList.add('hide');
            i++;
            if (i < subtitles.length) {
                
                PLAnimation(pictures[i], subtitles[i], i);
            }
            if (i == subtitles.length - 1) {
                subtitles[i].addEventListener('transitionend', () =>{
                    if (subtitles[i].classList.contains('hide')) {
                        subtitleBar.classList.remove('subtitleLoaded');
                        subtitleBar.addEventListener('transitionend', () =>{
                            solve_me.classList.add('bounce');
                            fallingcube.classList.add('falling');
                        })
                    }
                    
                })

                
            }
            
        }    
    })
}




// wordPlay funciton 
let I = 0;

function wordsPlay() {
     setTimeout(function() {
         
         if (I < 3) {
            musicWords[I+1].classList.add('moving-down');
            I++;
            wordsPlay();
         } else {
             musicWords[0].classList.add('feel');
         }
     }, 2000)
}







// Tyepwriter function
let i = 0;
let s = 0; 
function showLines() {
    
    setTimeout(function(){
        lines[i].classList.toggle('hide');   
        let line_length = lines[i].innerText.length;
        let lineName = lines[i].classList[1];
       
        if (line_length <= 10) {
            s = 0.5;
        } else {
            s = 2; 
        }
        
        stylesheet.insertRule(`.${lineName}::before {
        animation: typewriter ${s}s steps(${line_length}) forwards;
     }
     `);
        i++;
     
        if (i < lines.length) {
            showLines(); 
        }
        

    }, 2500)
    if (i == lines.length - 1) {
        lines[i].addEventListener('animationend', () =>{
            console.log('yes')
            let musicSect = document.querySelector('.music');
            musicSect.classList.remove('disappear');
        })
    }
    
}