document.addEventListener('DOMContentLoaded', main)
const stanley = document.querySelector('.stanley');
const witcher = document.querySelector('.witcher');
const planescape = document.querySelector('.planescape');
const pathologic = document.querySelector('.pathologic');
const deathStranding = document.querySelector('.death-stranding');
const stanleyTextBox = document.querySelector('.stanley-container');
const planescapeTextBox = document.querySelector('.planescape-container');
const witcherTextBox = document.querySelector('.witcher-container');
const pathologicTextBox = document.querySelector('.pathologic-container');
const strandingTextBox = document.querySelector('.death-stranding-container');
const strandingPhrases = document.querySelectorAll('.death-stranding-quote-phrase');
const stylesheet = document.styleSheets[0];

const stanleyOverlay = document.querySelector('.stanley-container-overlay')
const witcherOverlay = document.querySelector('.witcher-container-overlay')
const planescapeOverlay = document.querySelector('.planescape-container-overlay')
const pathologicOverlay = document.querySelector('.pathologic-container-overlay')
const strandingOverlay = document.querySelector('.death-stranding-container-overlay')

const whiteIntro = document.querySelector('.whiteIntro');
const introChpater = document.querySelector('.whiteIntro-chapter');
const introTitle = document.querySelector('.whiteIntro-title');
const introBtn = document.querySelector('.whiteIntro-btn');

const introDoors = document.querySelectorAll('.whitecanvas');

const stanleyVdieo = document.querySelector('#stanley');
const witcherVdieo = document.querySelector('#witcher');
const planescapeVdieo = document.querySelector('#planescape');
const pathologicVdieo = document.querySelector('#pathologic');
const strandingVdieo = document.querySelector('#stranding');
const outroDoors = document.querySelectorAll('.stanley-blackcanvas');
const witcherODs = document.querySelectorAll('.witcher-blackcanvas')


function main() {
    
    setTimeout(function() {
        playOpening()
    }, 3000) 
    // playStanley();
    window.addEventListener('scroll', function() {

        let stanleyTop = stanley.getBoundingClientRect().top;
        let witcherTop = witcher.getBoundingClientRect().top;
        let planescapeTop = planescape.getBoundingClientRect().top;
        let pathologicTop = pathologic.getBoundingClientRect().top;
        let strandingTop = deathStranding.getBoundingClientRect().top;
        let sectionList = [stanleyTop, witcherTop, planescapeTop, pathologicTop, strandingTop];
        
        for (let i = 1 ; i < 5; i++) {
            console.log(sectionList[i]);
            if (sectionList[i] == 0) {
                if (i == 1) {
                    witcher.firstElementChild.play()
                    playWitcher();
                } else if (i == 2) {
                    planescape.firstElementChild.play()
                    playPlanescape();
                } else if (i == 3) {
                    pathologic.firstElementChild.play()
                    playPathologic();
                } else {
                    deathStranding.firstElementChild.play()
                    playStranding();
                }   
            }
            if (sectionList[i] >= window.innerHeight || sectionList[i] <= -(window.innerHeight)) {
                if (i == 0) {
                    stanley.firstElementChild.pause()
                } else if (i == 1) {
                    witcher.firstElementChild.pause()
                } else if (i == 2) {
                    planescape.firstElementChild.pause()
                } else if (i == 3) {
                    pathologic.firstElementChild.pause()
                } else {
                    deathStranding.firstElementChild.pause()
                }   
            }
                
        }
        
    })

    

    

    
}

// Opening animation 
function playOpening() {

    introChpater.classList.remove('hide')
    introChpater.classList.add('chaptertyping')

    introChpater.addEventListener('animationend', function() {
        setTimeout(function() {
            introTitle.classList.remove('hide');
            introTitle.classList.add('titletyping')
        }, 1500)
    })
    introTitle.addEventListener('animationend', function() {
        setTimeout(function(){
             introBtn.classList.remove('hide')
        }, 2000)
    })
    introBtn.addEventListener('click', function() {
        introChpater.classList.add('movingRight');

        setTimeout(function() {
            introTitle.classList.add('movingLeft');
        }, 1000)
        setTimeout(function() {
            introBtn.classList.add('movingRight');    
        }, 2000)

        introBtn.addEventListener('animationend', function() {
            introDoors[0].classList.add('openLeft');
            introDoors[1].classList.add('openRight');
            stanleyVdieo.play();
            playStanley();
            
        })
        
        
    })

}



// Stanely section animation 
function playStanley() {
    // Stanley Section Animaiton 
    let stanleyFirstLoadingTop = stanley.getBoundingClientRect().top;
    if (stanleyFirstLoadingTop == 0) {
        
        stanleyTextBox.classList.add('loadTextBox');
        stanleyTextBox.addEventListener('animationend', function(){
            let stanelyContents = document.querySelectorAll('.stanley-content');
            
            for (let i = 0; i < stanelyContents.length; i++) {
                if (i == 0) {
                    if (stanelyContents[i].classList.contains('hide') && !stanelyContents[i].classList.contains('hide-again')) {
                        stanelyContents[i].classList.remove('hide');

                        let volumeDown = setInterval(function(){
                            
                            if (stanleyVdieo.volume > 0.3) {
                                stanleyVdieo.volume -= 0.1
                            } else {
                                clearInterval(volumeDown);
                            }
                        }, 200)

                        setTimeout(function() {
                            stanelyContents[i].classList.add('hide', 'hide-again')
                        }, 8000)
                    }
                    
                } else {
                    
                    stanelyContents[i - 1].addEventListener('transitionend', function() {
                        if (stanelyContents[i - 1].classList.contains('hide-again')) {
                            if (i == 2) {
                                stylesheet.insertRule(`.storydays .stanley-container-overlay::before {
                                    animation: subtitleBar .5s ease forwards;
                                }`)
                            }
                            stanelyContents[i].classList.remove('hide');
                            if (i == stanelyContents.length - 1) {
                                let volumeUp = setInterval(function(){
                            
                                    if (stanleyVdieo.volume < 1) {
                                        stanleyVdieo.volume += 0.1
                                    } else {
                                        clearInterval(volumeUp);
                                    }
                                }, 200)
                            }
                            setTimeout(function() {
                                stanelyContents[i].classList.add('hide', 'hide-again')
                            }, 6000)
                            if (i == stanelyContents.length - 1) {

                                stanelyContents[i].addEventListener('transitionend', function() {
                                    if (stanelyContents[i].classList.contains('hide-again')) {

                                        stanleyOverlay.classList.add('hide');
                                        
                                        stanleyOverlay.addEventListener('transitionend', function() {
                                            
                                            
                                                
                                            

                                            let checkTime = setInterval(function(){
                                                let videoTime = Math.round(stanleyVdieo.currentTime);
                                                
                                                if (videoTime >= 104) {
                                                    console.log('yes')
                                                    outroDoors.forEach(function(element){
                                                        element.classList.remove('opened')
                                                    })
                                                    whiteIntro.classList.add('showNone')
                                                    outroDoors[1].addEventListener('transitionend', function() {
                                                        let nextChapter = document.querySelector('.stanley-blackOutro-next');
                                                        nextChapter.classList.remove('hide');
                                                        nextChapter.addEventListener('transitionend', () =>{
                                                            let nextTitle = document.querySelector('.stanley-chapter-name');
                                                            setTimeout(() =>{
                                                                nextTitle.classList.remove('hide');
                                                            }, 1000)
                                                            nextTitle.addEventListener('transitionend', () =>{
                                                                let nextBtn = document.querySelector('.stanley-outro-btn');
                                                                setTimeout(() =>{
                                                                    nextBtn.classList.remove('hide')
                                                                }, 1000)
                                                            })
                                                        })
                                                    })
                                                    clearInterval(checkTime);
                                                }
                                            }, 1000)
                                                
                                                
                                        })
                                        
                                        
                                    }
                                    
                                })        


                            }              
                        }
                        
                    })
                    
                }
            }
            
        })
    }

}




// Witcher Seciton animation 
function playWitcher() {


    // Outro & volume animation
    witcherVdieo.volume = 0;
    let checkTime = setInterval(function() {
        let videoTime = Math.round(witcherVdieo.currentTime);
        if (videoTime == 15) {
            let volumeUp = setInterval(function(){
                            
                if (witcherVdieo.volume < 0.9) {
                    witcherVdieo.volume += 0.1
                } else {
                    clearInterval(volumeUp);
                }
            }, 400)
        }    
        if (videoTime == 21) {
            console.log(videoTime);
            console.log('yes');
            let volumeDown = setInterval(function(){
                            
                if (witcherVdieo.volume > 0.2) {
                    witcherVdieo.volume -= 0.1
                } else {
                    clearInterval(volumeDown);
                }
            }, 400)
        }    
        if (videoTime == 74) {
            let volumeUp = setInterval(function(){
                            
                if (witcherVdieo.volume < 0.9) {
                    witcherVdieo.volume += 0.1
                } else {
                    clearInterval(volumeUp);
                }
            }, 400)
        }
        if (videoTime == 116) {
            
            witcherODs.forEach(function(element){
                element.classList.remove('opened')
            })
            
            witcherODs[1].addEventListener('transitionend', function() {
                let nextChapter = document.querySelector('.witcher-blackOutro-next');
                nextChapter.classList.remove('hide');
                nextChapter.addEventListener('transitionend', () =>{
                    let nextTitle = document.querySelector('.witcher-chapter-name');
                    setTimeout(() =>{
                        nextTitle.classList.remove('hide');
                    }, 1000)
                    nextTitle.addEventListener('transitionend', () =>{
                        let nextBtn = document.querySelector('.witcher-outro-btn');
                        setTimeout(() =>{
                            nextBtn.classList.remove('hide')
                        }, 1000)
                    })
                })
            })
            clearInterval(checkTime);
        }
    }, 1000)

    
    witcherTextBox.classList.add('loadTextBox');
        witcherTextBox.addEventListener('animationend', function(){
            let witcherContents = document.querySelectorAll('.witcher-content');
            
            for (let i = 0; i < witcherContents.length; i++) {
                if (i == 0) {
                    if (witcherContents[i].classList.contains('hide') && !witcherContents[i].classList.contains('hide-again')) {
                        witcherContents[i].classList.remove('hide');
                        setTimeout(function() {
                            witcherContents[i].classList.add('hide', 'hide-again')
                        }, 6000)
                    }
                    
                } else {
                    
                    witcherContents[i - 1].addEventListener('transitionend', function() {
                        if (witcherContents[i - 1].classList.contains('hide-again')) {
                            if (i == 2) {
                                stylesheet.insertRule(`.storydays .witcher-container-overlay::before {
                                    animation: subtitleBar .5s ease forwards;
                                }`)
                            }
                            witcherContents[i].classList.remove('hide');
                            setTimeout(function() {
                                witcherContents[i].classList.add('hide', 'hide-again')
                            }, 6000)
                            if (i == witcherContents.length - 1) {

                                witcherContents[i].addEventListener('transitionend', function() {
                                    if (witcherContents[i].classList.contains('hide-again')) {

                                        witcherOverlay.classList.add('hide');
                                        
                                    }
                                    
                                })        


                            }
                        }
                    })
                    
                }
            }
            
        })

}

// Planescape Section animation 
function playPlanescape() {

    // Outro & volume animation
    let planescapeODs = document.querySelectorAll('.planescape-blackcanvas')
    let checkTime = setInterval(function() {
        let videoTime = Math.round(planescapeVdieo.currentTime);
        if (videoTime == 10) {
            let volumeDown = setInterval(function(){
                            
                if (planescapeVdieo.volume > 0.3) {
                    planescapeVdieo.volume -= 0.1
                } else {
                    clearInterval(volumeDown);
                }
            }, 400)
        }    
        if (videoTime == 81) {
            let volumeUp = setInterval(function(){
                            
                if (planescapeVdieo.volume < 0.9) {
                    planescapeVdieo.volume += 0.1
                } else {
                    clearInterval(volumeUp);
                }
            }, 400)
            
        }    
             
        if (videoTime == 95) {
            
            planescapeODs.forEach(function(element){
                element.classList.remove('opened')
            })
            
            planescapeODs[1].addEventListener('transitionend', function() {
                let nextChapter = document.querySelector('.planescape-blackOutro-next');
                nextChapter.classList.remove('hide');
                nextChapter.addEventListener('transitionend', () =>{
                    let nextTitle = document.querySelector('.planescape-chapter-name');
                    setTimeout(() =>{
                        nextTitle.classList.remove('hide');
                    }, 1000)
                    nextTitle.addEventListener('transitionend', () =>{
                        let nextBtn = document.querySelector('.planescape-outro-btn');
                        setTimeout(() =>{
                            nextBtn.classList.remove('hide')
                        }, 1000)
                    })
                })
            })
            clearInterval(checkTime);
        }
    }, 1000)
    
    // Main content animation
    planescapeTextBox.classList.add('loadTextBox');
    planescapeTextBox.addEventListener('animationend', function(){
            let planescapeContents = document.querySelectorAll('.planescape-content');
            
            for (let i = 0; i < planescapeContents.length; i++) {
                if (i == 0) {
                    if (planescapeContents[i].classList.contains('hide') && !planescapeContents[i].classList.contains('hide-again')) {
                        planescapeContents[i].classList.remove('hide');
                        setTimeout(function() {
                            planescapeContents[i].classList.add('hide', 'hide-again')
                        }, 6000)
                    }
                    
                } else {
                    
                    planescapeContents[i - 1].addEventListener('transitionend', function() {
                        if (planescapeContents[i - 1].classList.contains('hide-again')) {
                            if (i == 3) {
                                stylesheet.insertRule(`.storydays .planescape-container-overlay::before {
                                    animation: subtitleBar .5s ease forwards;
                                }`)
                            }
                            planescapeContents[i].classList.remove('hide');
                            setTimeout(function() {
                                planescapeContents[i].classList.add('hide', 'hide-again')
                            }, 7000)
                            if (i == planescapeContents.length - 1) {

                                planescapeContents[i].addEventListener('transitionend', function() {
                                    if (planescapeContents[i].classList.contains('hide-again')) {

                                        planescapeOverlay.classList.add('hide');
                                        
                                    }
                                    
                                })        


                            }
                        }
                    })
                    
                }
            }
            
        })

}

// Pathologic Section animation 
function playPathologic() {
    

    let pathologicODs = document.querySelectorAll('.pathologic-blackcanvas')
    let checkTime = setInterval(function() {
        let videoTime = Math.round(pathologicVdieo.currentTime);
        if (videoTime == 9) {
            let volumeDown = setInterval(function(){
                            
                if (pathologicVdieo.volume > 0.3) {
                    pathologicVdieo.volume -= 0.1
                } else {
                    clearInterval(volumeDown);
                }
            }, 400)
        }    
        if (videoTime == 61) {
            let volumeUp = setInterval(function(){
                            
                if (pathologicVdieo.volume < 0.9) {
                    pathologicVdieo.volume += 0.1
                } else {
                    clearInterval(volumeUp);
                }
            }, 400)
            
        }    
             
        if (videoTime == 248) {
            
            pathologicODs.forEach(function(element){
                element.classList.remove('opened')
            })
            
            pathologicODs[1].addEventListener('transitionend', function() {
                let nextChapter = document.querySelector('.pathologic-blackOutro-next');
                nextChapter.classList.remove('hide');
                nextChapter.addEventListener('transitionend', () =>{
                    let nextTitle = document.querySelector('.pathologic-chapter-name');
                    setTimeout(() =>{
                        nextTitle.classList.remove('hide');
                    }, 1000)
                    nextTitle.addEventListener('transitionend', () =>{
                        let nextBtn = document.querySelector('.pathologic-outro-btn');
                        setTimeout(() =>{
                            nextBtn.classList.remove('hide')
                        }, 1000)
                    })
                })
            })
            clearInterval(checkTime);
        }
    }, 1000)

    pathologicTextBox.classList.add('loadTextBox');
    pathologicTextBox.addEventListener('animationend', function(){
            let pathologicContents = document.querySelectorAll('.pathologic-content');
            
            for (let i = 0; i < pathologicContents.length; i++) {
                if (i == 0) {
                    if (pathologicContents[i].classList.contains('hide') && !pathologicContents[i].classList.contains('hide-again')) {
                        pathologicContents[i].classList.remove('hide');
                        setTimeout(function() {
                            pathologicContents[i].classList.add('hide', 'hide-again')
                        }, 6000)
                    }
                    
                } else {
                    
                    pathologicContents[i - 1].addEventListener('transitionend', function() {
                        if (pathologicContents[i - 1].classList.contains('hide-again')) {
                            if (i == 4) {
                                stylesheet.insertRule(`.storydays .pathologic-container-overlay::before {
                                    animation: subtitleBar .5s ease forwards;
                                }`)
                            }
                            pathologicContents[i].classList.remove('hide');
                            setTimeout(function() {
                                pathologicContents[i].classList.add('hide', 'hide-again')
                            }, 6000)
                        }
                        if (i == pathologicContents.length - 1) {

                            pathologicContents[i].addEventListener('transitionend', function() {
                                if (pathologicContents[i].classList.contains('hide-again')) {

                                    pathologicOverlay.classList.add('hide');
                                    
                                }
                                
                            })        


                        }
                    })
                    
                }
            }
            
        })

}

// Death Stranding animaiton 
function playStranding() {

    let strandingODs = document.querySelectorAll('.stranding-blackcanvas')
    let checkTime = setInterval(function() {
        let videoTime = Math.round(strandingVdieo.currentTime);
        if (videoTime == 10) {
            let volumeDown = setInterval(function(){
                            
                if (strandingVdieo.volume > 0.3) {
                    strandingVdieo.volume -= 0.1
                } else {
                    clearInterval(volumeDown);
                }
            }, 400)
        }    
        if (videoTime == 73) {
            let volumeUp = setInterval(function(){
                            
                if (strandingVdieo.volume < 0.9) {
                    strandingVdieo.volume += 0.1
                } else {
                    clearInterval(volumeUp);
                }
            }, 400)
            
        }    
             
        if (videoTime == 262) {
            let volumeDown = setInterval(function(){
                            
                if (strandingVdieo.volume > 0.1) {
                    strandingVdieo.volume -= 0.1
                } else {
                    clearInterval(volumeDown);
                }
            }, 400)
            
            strandingODs.forEach(function(element){
                element.classList.remove('opened')
            })
            
            strandingODs[1].addEventListener('transitionend', function() {
                let nextChapter = document.querySelector('.stranding-blackOutro-next');
                nextChapter.classList.remove('hide');
            })
            clearInterval(checkTime);
        }
    }, 1000)

    // Text animation

    strandingTextBox.classList.add('loadTextBox');
    strandingTextBox.addEventListener('animationend', function(){
            let strandingContents = document.querySelectorAll('.death-stranding-content');
            
            for (let i = 0; i < strandingContents.length; i++) {
                if (i == 0) {
                    if (strandingContents[i].classList.contains('hide') && !strandingContents[i].classList.contains('hide-again')) {
                        strandingContents[i].classList.remove('hide');
                        strandingContents[i].addEventListener('transitionend', function() {
                            if (!strandingContents[i].classList.contains('hide-again')) {
                                for (let k = 1; k < strandingPhrases.length; k++) {
                                    if (k == 1) {
                                        setTimeout(function() {
                                            strandingPhrases[k].classList.remove('hide');
                                        }, 3000)
                                    } else {
                                        strandingPhrases[k - 1].addEventListener('transitionend', function(){
                                            setTimeout(function() {
                                                strandingPhrases[k].classList.remove('hide');
                                            }, 3000)
                                            
                                        })
                                    }
                                    
                                }
                            }
                        })
                        setTimeout(function() {
                            strandingContents[i].classList.add('hide', 'hide-again')
                        }, 22000)
                    }
                    
                } else {
                    
                    strandingContents[i - 1].addEventListener('transitionend', function() {
                        
                        if (strandingContents[i - 1].classList.contains('hide-again')) {
                            if (i == 2) {
                                stylesheet.insertRule(`.storydays .death-stranding-container-overlay::before {
                                    animation: subtitleBar .5s ease forwards;
                                }`)
                            }
                            strandingContents[i].classList.remove('hide');
                            setTimeout(function() {
                                strandingContents[i].classList.add('hide', 'hide-again')
                                
                            }, 6000)
                        }
                        if (i == strandingContents.length - 1) {

                            strandingContents[i].addEventListener('transitionend', function() {
                                if (strandingContents[i].classList.contains('hide-again')) {

                                    strandingOverlay.classList.add('hide');
                                    
                                }
                                
                            })        


                        }
                    })
                    
                }
            }
            
        })

}