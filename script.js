const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container"); 

function addTask()
{
  if(inputBox.value ==''){
    alert("You must write something!")
  }
  else
  {
       let li=document.createElement("li");//creating element li
       li.innerHTML=inputBox.value;//adding the value to li
       listcontainer.appendChild(li);//displaying the value in list
       let span=document.createElement("span");
       span.innerHTML="\u00d7";
       li.appendChild(span); 
    }
  inputBox.value= "" ;
  saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

 function saveData()//storing data in our browser 
 {
 localStorage.setItem("data",listcontainer.innerHTML); 
 }

 function showTask()//whenever refreshed,data should be displayed 
 {
  listcontainer.innerHTML=localStorage.getItem("data");
 }
 showTask();