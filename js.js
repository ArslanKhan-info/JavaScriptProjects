        // temprature calclator//
let cel = document.getElementById("cel")
let fah = document.getElementById("fe")

cel.addEventListener("input",function(){
    c=this.value
    f=(c * 9/5) + 32
    if(!Number.isInteger(f)){
        f= f.toFixed(4);
        fah.value=f
    }
})
fah.addEventListener("input",function(){
    f=this.value
    c=(f - 32) * 5/9
    if(!Number.isInteger(c)){
        c=c.toFixed(4)
    }
    cel.value=c
})



// word counter//



let text= document.getElementById("textarea")
let word= document.getElementById("wd")
let character= document.getElementById("ch")
text.addEventListener("input",function(){
        let w = this.value
        word.innerHTML=w.length
        if(w.length>1){
            document.getElementById("wd-c").innerHTML= " Words"
        }else{
            document.getElementById("wd-c").innerHTML= " Word"
        }
        w= w.trim()
        let char= w.split(" ")
        char=char.filter(function(elm){
            return /\S/.test(elm)
        })
        character.innerHTML= " "+ char.length
        if(char.length>1){
            document.getElementById("ch-c").innerHTML=" Characters"
        }else{
            document.getElementById("ch-c").innerHTML=" Character"
        }

     })



    //  backgroung color changer
    let redBtn= document.getElementById("red");
    let blueBtn= document.getElementById("blue");
    let blackBtn= document.getElementById("black");
    redBtn.addEventListener("click",function(){
        document.body.style.backgroundColor="red"
        document.body.style.color="white"
    })
    blueBtn.addEventListener("click",function(){
        document.body.style.backgroundColor="blue"
        document.body.style.color="black"
    })
    blackBtn.addEventListener("click",function(){
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
    })




    // sticky navbar
    
   window.addEventListener("scroll",function(){
    let menu= document.getElementById("menu")
        if (window.pageYOffset >621){
            menu.classList.add("sticky")
        }else{
            menu.classList.remove("sticky")
        }
    })





    // // FORM VALIDATOR
    let username = document.getElementById("username")
    let pass = document.getElementById("pass")
    function test(){
     let flag1=true
     let flag2=true
     if(username.value==""){
         document.getElementById("userer").innerHTML="Please enter Username"
         flag1=false
     }else if(username.value.length<3){
         document.getElementById("userer").innerHTML="Please enter min 3 characters"
         flag1=false
     }else{
        document.getElementById("userer").innerHTML=""
        flag1=true
     }
     if(pass.value==""){
         document.getElementById("passer").innerHTML="Please enter Password"
         flag2=false
     }else if(pass.value.length<3){
         document.getElementById("passer").innerHTML="Please enter min 3 characters"
         flag2=false
     }else{
            document.getElementById("passer").innerHTML=""
           
            flag2=true
     }
     if (flag1 && flag2){
        return true
     }else{
        return false
     }};




    //       image slider       /// 





    
    let flags = 0
    function controller(elm){
        flags= flags+elm    
        slide(flags)
    }
    slide(flags)
    
    
    function slide(e){
        let slides= document.getElementsByClassName("slide")
        for(let y of slides){
            y.style.display="none"
        }
        if (flags==slides.length){
            flags=0;
            e=0;
        }else if(flags<0){
            flags=slides.length -1;
            e=flags;
        }
        slides[e].style.display="block";
    }



        // stop watch// 

let flag= false;
let minsec=00;
let sec=00;
let min= 00;
let hour=00;
function start(){
    if (flag==false){
        flag=true;
        stopwatch();
        
    }else{
        
    }
}
function stop(){
    flag=false;
}
function reset(){
    flag= false;
    minsec=00
    sec=00;
    min= 00;
    hour=00;
    document.getElementById("minsec").innerHTML="00"
    document.getElementById("min").innerHTML="00"
    document.getElementById("sec").innerHTML="00"
    document.getElementById("hour").innerHTML="00"
}
function stopwatch(){
    if(flag==true){
        minsec=minsec +1
        if(minsec==100){
            sec=sec+1
            minsec=0
        }
        if(sec==60){
            min=min+1
            sec=0
        }
        if(min==60){
            hour=hour+1
            min=0
        }
        if (minsec<10){
            document.getElementById("minsec").innerHTML="0" + minsec
        }else{
            document.getElementById("minsec").innerHTML=minsec
        }
        if (sec<10){
            document.getElementById("sec").innerHTML="0" + sec
        }else{
            document.getElementById("sec").innerHTML=sec
        }
        if (min<10){
            document.getElementById("min").innerHTML="0" + min
        }else{
            document.getElementById("min").innerHTML=min
        }
        if (hour<10){
            document.getElementById("hour").innerHTML="0" + hour
        }else{
            document.getElementById("hour").innerHTML=hour
        }
        setTimeout("stopwatch()",10)
    } 
}