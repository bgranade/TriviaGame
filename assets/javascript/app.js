var ul=document.getElementById('ul');
var btn=document.getElementById('button');
var scoreCard=document.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');

var app={
    questions:[
              {q:'Homer Simpsons middle initial "J" stands for Jay', options:['True','False'],answer:1},

              {q:'Lisa Simpson plays the clarinet?',options:['True','False'],answer:2},

              {q:'Bart Simpson is the eldest child for Marge and Homer Simpson?',options:['True','False'],answer:1}
            ],
            index:0,
            load:function(){
                   if(this.index<=this.questions.length-1){
                    quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                    op1.innerHTML=this.questions[this.index].options[0];
                    op2.innerHTML=this.questions[this.index].options[1];
                       this.scoreCard();
                    }
                    else{

                    quizBox.innerHTML="Quiz Over......!!!"      
                    op1.style.display="none";
                    op2.style.display="none";
                    op3.style.display="none";
                    op4.style.display="none";
                    btn.style.display="none";
                    }
            },
             next:function(){
                this.index++;
                this.load();
             },
            check:function(ele){
               
                     var id=ele.id.split('');
                     
                     if(id[id.length-1]==this.questions[this.index].answer){
                         this.score++;
                         ele.className="correct";
                         ele.innerHTML="Correct";
                         this.scoreCard();
                     }
                     else{
                         ele.className="wrong";
                         ele.innerHTML="Wrong";
                     }
            },
            notClickAble:function(){
                   for(let i=0;i<ul.children.length;i++){
                           ul.children[i].style.pointerEvents="none";
                   }
            },

            clickAble:function(){
                   for(let i=0;i<ul.children.length;i++){
                           ul.children[i].style.pointerEvents="auto";
                           ul.children[i].className=''

                   }
            },
            score:0,
            scoreCard:function(){
                scoreCard.innerHTML=this.questions.length+"/"+this.score;
            }

       }

     
