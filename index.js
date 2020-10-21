let n=document.querySelectorAll(".drum").length;
for(let i=0;i<n;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
let audio;
  if(i>2)
  {
    audio = new Audio("sounds/tom-"+(n-i)+".mp3");
  }
  else{

    if(i==0)
    audio = new Audio("sounds/crash.mp3");
    else if (i==1)
    audio = new Audio("sounds/kick-bass.mp3");
    else
    audio = new Audio("sounds/snare.mp3");
  }
    audio.play();
  });

function makeSound(key){
  let audio;
  switch(key)
  {
    case 'w' : {
      audio=new Audio("sounds/crash.mp3");
    }
    break;
    case 'a' : {
      audio=new Audio("sounds/kick-bass.mp3");
    }
    break;
    case 's' : {
        audio=new Audio("sounds/snare.mp3");
    }
    break;
    case 'd' : {
        audio=new Audio("sounds/tom-1.mp3");
    }
    break;
    case 'j' : {
        audio=new Audio("sounds/tom-2.mp3");
    }
    break;
    case 'k' : {
        audio=new Audio("sounds/tom-3.mp3");
    }
    break;
    case 'l' : {
        audio=new Audio("sounds/tom-4.mp3");
    }
    break;
  }
      audio.play();

}
document.addEventListener("keydown",function(e){
  makeSound(e.key);
  animation(e.key);
  });

function animation(key)
{
  let activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
activeButton.classList.remove("pressed");},100);
}

}
