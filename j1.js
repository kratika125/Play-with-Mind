let boxes=document.querySelectorAll(".box");
let rese=document.querySelector(".reset");
let nese=document.querySelector("#bu");
let msgc=document.querySelector(".new");
let msg=document.querySelector("#msg");
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] ];
    let c="on";
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(c=="on"){
        box.innerHTML="X";
    c="off";
        }
        else{
            box.innerHTML="0";
            c="on";
        }
        box.disabled=true;
        check();

    });
          
});
const r=()=>{
    c="on";
    l();
    msgc.classList.add("hide");

}

const l=()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";
    }
}

const last=()=>{
    for(let box of boxes)
    box.disabled=true;
}
const show=(w)=>{
    msg.innerText=`Congrats!! The Winner is ${w}`;
    msgc.classList.remove("hide");
    last();
    
}
const check=()=>{
    for(let p of arr){
        let a=boxes[p[0]].innerText;
        let b=boxes[p[1]].innerText;
        let c=boxes[p[2]].innerText;
        if(a!="" && b!="" && c!=""){
        if(a==b && b==c)
            show(a);
        }


    }


}
rese.addEventListener("click",r);
nese.addEventListener("click",r);