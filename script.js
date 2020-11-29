 var ans= document.getElementById('ans')
          var cimg= document.getElementById('cimg')
          

          function rock(){
            var comp= Math.floor(Math.random() * 3) + 1;
            console.log(comp)
            if(comp==1){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-rock-solid.svg" alt="">`
            }
            else if(comp==2){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-paper-solid.svg" alt="">`
            }
            else if(comp==3){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-scissors-solid.svg" alt="">`
            }



              var a =1;
            if(a==1&&comp==3){
                ans.innerHTML="User Win"
            }
            else if(a==1&&comp==1){
                ans.innerHTML="Match Tie"
            }
            else{
                ans.innerHTML="Comp Win"

            }
          }
          function paper(){
            var comp= Math.floor(Math.random() * 3) + 1;
            console.log(comp)
            if(comp==1){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-rock-solid.svg" alt="">`
            }
            else if(comp==2){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-paper-solid.svg" alt="">`
            }
            else if(comp==3){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-scissors-solid.svg" alt="">`
            }
              var a =2;
              if(a==2&&comp==1){
                ans.innerHTML="User Win"
            }
            else if(a==2&&comp==2){
                ans.innerHTML="Match Tie"
            }
            else{
                ans.innerHTML="Comp Win"

            }
              
          }



          function scissor(){
            var comp= Math.floor(Math.random() * 3) + 1;
            console.log(comp)
            if(comp==1){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-rock-solid.svg" alt="">`
            }
            else if(comp==2){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-paper-solid.svg" alt="">`
            }
            else if(comp==3){
                cimg.innerHTML=`<h3> Computer choose: </h3>\<img class="rock"  id="rock" src="/RockPaperScissor/image/hand-scissors-solid.svg" alt="">`
            }
            var a =3
            if(a==3&&comp==2){
                ans.innerHTML="User Win"
            }
            else if(a==3&&comp==3){
                ans.innerHTML="Match Tie"
            }
            else{
                ans.innerHTML="Comp Win"

            }
              
          }
