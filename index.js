function allLongestStrings(inputArray) {
  let lengthMax=0;
 
  for(let i=0;i<inputArray.length;i++) {
      if(inputArray[i].length>=lengthMax) {
          lengthMax=inputArray[i].length;
      }
  }
  
  let longestString=inputArray.filter(function(string) {
      return string.length==lengthMax;
  })
  console.log(longestString);
}

allLongestStrings(["Nam","Phuoc","Hung","Quang"]);

// Bai 2:
function alternatingSums(a) {
    let tongteam1=0;
    let tongteam2=0;
    let tong=[];
    for(let i=0;i<a.length;i++) {
        if(i%2==0) {
           tongteam1+=a[i];
        }
        else{
            tongteam2+=a[i];
        }
    }
    tong.push(tongteam1,tongteam2);
    console.log(tong);
    
}
alternatingSums([60, 40, 55, 75, 64] );

// Bai 3:
let btnAutoColor=document.querySelector(".btn-autocolor");
let hexcolor=document.getElementsByClassName("Hex-color")[0];
let colorhex=document.querySelector(".color");
let backgroundAutocolor=document.querySelector(".autocolor");




btnAutoColor.onclick=function() {
    let letters="0123456789ABCDEF";
    let color="#";
    
    for(let i=0;i<6;i++ ) {
        color+=letters[Math.floor(Math.random()*16)];

    }
    backgroundAutocolor.style.backgroundColor=`${color}`;
    colorhex.innerHTML=`<span>${color}</span>`;
    hexcolor.appendChild(colorhex);
   


}

