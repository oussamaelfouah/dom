let content=document.getElementById("content")
let btn=document.getElementById("btn")
btn.onclick = () => {
    if(content.className ==""){
        content.className ="open";
        btn.innerHTML= 'collapse now';
    }else {
        content.className = "";
        btn.innerHTML = "Expand";
    }
}
