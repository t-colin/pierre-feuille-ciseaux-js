pierre = document.querySelector("#pierre");
feuille = document.querySelector("#feuille");
ciseaux = document.querySelector("#ciseaux");

function getComputerChoice() {
    const tab = ['pierre', 'feuille', 'ciseaux'];
    return tab[Math.floor(Math.random() * 3)]
}

anime({
    targets: feuille,
    translateX: 500,
    translateY:350,
    delay : 0
  });

anime({
    targets: pierre,
    translateX: 0,
    translateY:350,
    delay : 100
  });

  anime({
    targets: ciseaux,
    translateX: -500,
    translateY: 350,
    delay : 200
  });

  pierre.addEventListener("mouseenter", function(){
    anime({
        targets: pierre,
        scale: 1.3,
      });
  })
  pierre.addEventListener("mouseleave", function(){
    anime({
        targets: pierre,
        scale: 1,
      });
  })

  feuille.addEventListener("mouseenter", function(){
    anime({
        targets: feuille,
        scale: 1.3,
      });
  })
  feuille.addEventListener("mouseleave", function(){
    anime({
        targets: feuille,
        scale: 1,
      });
  })

  ciseaux.addEventListener("mouseenter", function(){
    anime({
        targets: ciseaux,
        scale: 1.3,
      });
  })
  ciseaux.addEventListener("mouseleave", function(){
    anime({
        targets: ciseaux,
        scale: 1,
      });
  })

// click pierre ===================================================================================================================================================

pierre.addEventListener("click", function(){

// on fait disparaitre les autres choix et on décale l'élément choisit sur la gauche

    anime({
        targets: feuille,
        scale:0,
      });
    
      anime({
        targets: ciseaux,
        scale:0,
      });
      anime({
        targets: pierre,
        translateX:-300,
        delay:200,
        translateY: {
            value: 150,
            delay: 1800
        }
      });

// on prépare un petit texte "versus" qui va venir se placer entre les deux opposants

      let versus = document.createElement('h1');
        versus.setAttribute("id", "versus");
        versus.innerHTML = 'VERSUS'
        document.body.appendChild(versus);

      anime({
        targets: versus,
        translateX:-1180,
        delay:500,
        scale: {
            value:0,
            delay:1500
        }
      });

// on détermine le choix de l'adv grace a getcomputerchoice qu'on avait fait dans l'ancien exo
// et on fait a parraitre a droite de l'écran pour venir se rapprocher de notre icone

      let adv;
      const computerChoice = getComputerChoice();
      if(computerChoice == 'pierre'){
        let computerImage = document.createElement('img');
        computerImage.setAttribute("id", "computerPierre");
        computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2755/2755524.svg?token=exp=1614675810~hmac=7d1b47d450a18ef94580ee21afd81216");
        computerImage.setAttribute("alt", "imagecomputer");
        document.body.appendChild(computerImage);
        adv = document.querySelector("#computerPierre");

        let resultat = document.createElement('h1');
        resultat.setAttribute("id", "resultat");
        resultat.innerHTML = "c'est une égalité !"
        document.body.appendChild(resultat);

      } else if(computerChoice == 'feuille'){
        let computerImage = document.createElement('img');
        computerImage.setAttribute("id", "computerFeuille");
        computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2165/2165693.svg?token=exp=1614675646~hmac=d7db601209a5cf55815e5fb249f58037");
        computerImage.setAttribute("alt", "imagecomputer");
        document.body.appendChild(computerImage);
        adv = document.querySelector("#computerFeuille");

        let resultat = document.createElement('h1');
        resultat.setAttribute("id", "resultat");
        resultat.innerHTML = "c'est perdu !"
        document.body.appendChild(resultat);

      } else {
        let computerImage = document.createElement('img');
        computerImage.setAttribute("id", "computerciseaux");
        computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/3179/3179247.svg?token=exp=1614675897~hmac=453f9e5af136b7eaed0a04e8ce0eb093");
        computerImage.setAttribute("alt", "imagecomputer");
        document.body.appendChild(computerImage);
        adv = document.querySelector("#computerciseaux");

        let resultat = document.createElement('h1');
        resultat.setAttribute("id", "resultat");
        resultat.innerHTML = "c'est gagné !"
        document.body.appendChild(resultat);
      }
      anime({
        targets: adv,
        translateX:-1000,
        delay:600,
        translateY:{
            value:-200,
            delay: 1800
        }
      });
      anime({
        targets: resultat,
        translateY:-1500,
        delay:2000,
      });

      let rejouer = document.createElement('button');
        rejouer.innerHTML = 'rejouer';
        rejouer.setAttribute("id", "rejouer")
        document.body.appendChild(rejouer);

        anime({
            targets: rejouer,
            translateY:-1300,
            delay:2500,
          });

        rejouer.addEventListener("click", function(){
            document.location.reload();
        })
  })

// clic papier ========================================================================================================================================================

feuille.addEventListener("click", function(){

    // on fait disparaitre les autres choix et on décale l'élément choisit sur la gauche
    
        anime({
            targets: feuille,
            delay:200,
            translateY: {
                value: 150,
                delay: 1800
            }
          });
        
          anime({
            targets: ciseaux,
            scale:0,
          });
          anime({
            targets: pierre,
            scale:0
          });
    
    // on prépare un petit texte "versus" qui va venir se placer entre les deux opposants
    
          let versus = document.createElement('h1');
            versus.setAttribute("id", "versus");
            versus.innerHTML = 'VERSUS'
            document.body.appendChild(versus);
    
          anime({
            targets: versus,
            translateX:-1180,
            delay:500,
            scale: {
                value:0,
                delay:1500
            }
          });
    
    // on détermine le choix de l'adv grace a getcomputerchoice qu'on avait fait dans l'ancien exo
    // et on fait a parraitre a droite de l'écran pour venir se rapprocher de notre icone
    
          let adv;
          const computerChoice = getComputerChoice();
          if(computerChoice == 'pierre'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerPierre");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2755/2755524.svg?token=exp=1614675810~hmac=7d1b47d450a18ef94580ee21afd81216");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerPierre");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est gagné !"
            document.body.appendChild(resultat);
    
          } else if(computerChoice == 'feuille'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerFeuille");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2165/2165693.svg?token=exp=1614675646~hmac=d7db601209a5cf55815e5fb249f58037");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerFeuille");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est une égalité !"
            document.body.appendChild(resultat);
    
          } else {
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerciseaux");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/3179/3179247.svg?token=exp=1614675897~hmac=453f9e5af136b7eaed0a04e8ce0eb093");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerciseaux");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est perdu !"
            document.body.appendChild(resultat);
          }
          anime({
            targets: adv,
            translateX:-1000,
            delay:600,
            translateY:{
                value:-200,
                delay: 1800
            }
          });
          anime({
            targets: resultat,
            translateY:-1500,
            delay:2000,
          });
    
          let rejouer = document.createElement('button');
            rejouer.innerHTML = 'rejouer';
            rejouer.setAttribute("id", "rejouer")
            document.body.appendChild(rejouer);
    
            anime({
                targets: rejouer,
                translateY:-1300,
                delay:2500,
              });
    
            rejouer.addEventListener("click", function(){
                document.location.reload();
            })
      })


// clic ciseaux ================================================================================================================================================================

ciseaux.addEventListener("click", function(){

    // on fait disparaitre les autres choix et on décale l'élément choisit sur la gauche
    
        anime({
            targets: feuille,
            scale:0,
          });
        
          anime({
            targets: ciseaux,
            translateX:-1100,
            delay:200,
            translateY: {
                value: 150,
                delay: 1800
            }
          });
          anime({
            targets: pierre,
            scale:0
          });
    
    // on prépare un petit texte "versus" qui va venir se placer entre les deux opposants
    
          let versus = document.createElement('h1');
            versus.setAttribute("id", "versus");
            versus.innerHTML = 'VERSUS'
            document.body.appendChild(versus);
    
          anime({
            targets: versus,
            translateX:-1180,
            delay:500,
            scale: {
                value:0,
                delay:1500
            }
          });
    
    // on détermine le choix de l'adv grace a getcomputerchoice qu'on avait fait dans l'ancien exo
    // et on fait a parraitre a droite de l'écran pour venir se rapprocher de notre icone
    
          let adv;
          const computerChoice = getComputerChoice();
          if(computerChoice == 'pierre'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerPierre");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2755/2755524.svg?token=exp=1614675810~hmac=7d1b47d450a18ef94580ee21afd81216");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerPierre");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est perdu !"
            document.body.appendChild(resultat);
    
          } else if(computerChoice == 'feuille'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerFeuille");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2165/2165693.svg?token=exp=1614675646~hmac=d7db601209a5cf55815e5fb249f58037");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerFeuille");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est gagné !"
            document.body.appendChild(resultat);
    
          } else {
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerciseaux");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/3179/3179247.svg?token=exp=1614675897~hmac=453f9e5af136b7eaed0a04e8ce0eb093");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerciseaux");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est une égalité !"
            document.body.appendChild(resultat);
          }
          anime({
            targets: adv,
            translateX:-1000,
            delay:600,
            translateY:{
                value:-200,
                delay: 1800
            }
          });
          anime({
            targets: resultat,
            translateY:-1500,
            delay:2000,
          });
    
          let rejouer = document.createElement('button');
            rejouer.innerHTML = 'rejouer';
            rejouer.setAttribute("id", "rejouer")
            document.body.appendChild(rejouer);
    
            anime({
                targets: rejouer,
                translateY:-1300,
                delay:2500,
              });
    
            rejouer.addEventListener("click", function(){
                document.location.reload();
            })
      })