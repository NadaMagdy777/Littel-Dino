var SubProcessDiv=document.createElement("div")
SubProcessDiv.setAttribute("id","SubProcessDiv")


    document.body.appendChild(SubProcessDiv);

    var navDiv=document.createElement("div");
    navDiv.setAttribute("id","navDiv");

    var backDiv=document.createElement("div");
    backDiv.setAttribute("id","backDiv")
    var backbtn=document.createElement("a");
    backbtn.setAttribute("id","backbtn")
    backbtn.innerHTML="Back"
    backbtn.setAttribute("href","homePage.html")
    backDiv.appendChild(backbtn)
    navDiv.appendChild(backDiv)
    
    var MATH_4_KIDS=document.createElement("h3");
    MATH_4_KIDS.setAttribute("id","MATH_4_KIDS");
    MATH_4_KIDS.innerHTML="MATH 4 KIDS";
    navDiv.appendChild(MATH_4_KIDS);

    SubProcessDiv.appendChild(navDiv)


    sectionDiv=document.createElement("div")
    sectionDiv.setAttribute("id","sectionDiv")

    SubProcessDiv.appendChild(sectionDiv);

    var processDiv=document.createElement("div")
    processDiv.setAttribute("id","processDiv")


    num1=document.createElement("h1")
    num1.setAttribute("id","num1")
    num1.innerHTML=1
    processDiv.appendChild(num1)

    operatorPlus=document.createElement("h1")
    operatorPlus.setAttribute("id","operatorPlus")
    operatorPlus.innerHTML="-"
    processDiv.appendChild(operatorPlus)

    num2=document.createElement("h1")
    num2.setAttribute("id","num2")
    num2.innerHTML=1

    processDiv.appendChild(num2)


    operatorEqual=document.createElement("h1")
    operatorEqual.setAttribute("id","operatorEqual")
    operatorEqual.innerHTML="="
    processDiv.appendChild(operatorEqual)

    questionMark=document.createElement("h1")
    questionMark.setAttribute("id","questionMark")
    questionMark.innerHTML="?"
    processDiv.appendChild(questionMark)

    sectionDiv.appendChild(processDiv)

    var floatDiv=document.createElement("div")
    floatDiv.setAttribute("id","floatDiv")
    processDiv.appendChild(floatDiv)

    allChoices=document.createElement("div")
    allChoices.setAttribute("id","allChoices")

    var audio_Wrong_Answer=document.createElement("audio")
    audio_Wrong_Answer.setAttribute("id","audio_Wrong_Answer")
    audio_Wrong_Answer.setAttribute("src","wrong.wav")

    var audio_Right_Answer=document.createElement("audio")
    audio_Right_Answer.setAttribute("id","audio_Right_Answer")
    audio_Right_Answer.setAttribute("src","success.mp3")

    var answer=0

    firstChoice=document.createElement("div")
    firstChoice.setAttribute("id","firstChoice")
    firstChoice.innerHTML=1
    console.log(firstChoice)

    firstChoice.addEventListener("click",function(){

        if(firstChoice.innerHTML==answer){
        audio_Right_Answer.play();
            SubProcess();
        }else{
            audio_Wrong_Answer.play();
        }
    })
    allChoices.appendChild(firstChoice)

    secondChoice=document.createElement("div")
    secondChoice.setAttribute("id","secondChoice")
    secondChoice.innerHTML=2

    secondChoice.addEventListener("click",function(){
        if(secondChoice.innerHTML==answer){
        audio_Right_Answer.play();
            SubProcess();
        }else{
            audio_Wrong_Answer.play();
        }
    })
    allChoices.appendChild(secondChoice)

    thirdChoice=document.createElement("div")
    thirdChoice.setAttribute("id","thirdChoice")
    thirdChoice.innerHTML=3

    thirdChoice.addEventListener("click",function(){
        if(thirdChoice.innerHTML==answer){
        audio_Right_Answer.play();
            SubProcess();
        }else{
            audio_Wrong_Answer.play();
        }
    })
    allChoices.appendChild(thirdChoice)

    sectionDiv.appendChild(allChoices)

    SubProcessDiv.appendChild(sectionDiv)
    
    function SubProcess()
    {
        var num1=Math.floor(Math.random() * 13)
        var num2=Math.floor(Math.random() * 13)
    
        var falseChoice1=Math.floor(Math.random()*13)
        var falseChoice2=Math.floor(Math.random()*13)

        var switchAnswers=[]
        var allAnswers=[]

        answer = num1 - num2
        allAnswers=[answer,falseChoice1,falseChoice2]
        document.getElementById("num1").innerHTML=num1
        document.getElementById("num2").innerHTML=num2

        for(var i=allAnswers.length;i--;)
        {
            switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(i+1)),1)[0])
            }
        firstChoice.innerHTML=switchAnswers[0];
        secondChoice.innerHTML=switchAnswers[1];
        thirdChoice.innerHTML=switchAnswers[2];

        }
SubProcess()

