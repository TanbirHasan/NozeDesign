
document.getElementById('amonia').style.display = "none"
document.getElementById('formal').style.display = "none"
document.getElementById('nitrogen').style.display = "none"
document.getElementById('butanol').style.display = "none"
document.getElementById('particulate').style.display = "none"
document.getElementById('ethanol').style.display = "none"
document.getElementById('tobacco').style.display = "none"
document.getElementById('humidity').style.display = "none"



function matterstopic(data){


    console.log("button clicked",data)

    if (data === "carbon") {
      document.getElementById("amonia").style.display = "none";
      document.getElementById("carbon").style.display = "block";
      document.getElementById("formal").style.display = "none";
      document.getElementById("nitrogen").style.display = "none";
      document.getElementById("butanol").style.display = "none";
      document.getElementById("particulate").style.display = "none";
      document.getElementById("ethanol").style.display = "none";
      document.getElementById("tobacco").style.display = "none";
      document.getElementById("humidity").style.display = "none";
    } 

    else if(data === "amonia"){
          document.getElementById("amonia").style.display = "block";
          document.getElementById("carbon").style.display = "none";
          document.getElementById("formal").style.display = "none";
          document.getElementById("nitrogen").style.display = "none";
          document.getElementById("butanol").style.display = "none";
          document.getElementById("particulate").style.display = "none";
          document.getElementById("ethanol").style.display = "none";
          document.getElementById("tobacco").style.display = "none";
          document.getElementById("humidity").style.display = "none";

    }
    
    else if (data === "formal") {
      document.getElementById("amonia").style.display = "none";
      document.getElementById("carbon").style.display = "none";
      document.getElementById("formal").style.display = "block";
      document.getElementById("nitrogen").style.display = "none";
      document.getElementById("butanol").style.display = "none";
      document.getElementById("particulate").style.display = "none";
      document.getElementById("ethanol").style.display = "none";
      document.getElementById("tobacco").style.display = "none";
      document.getElementById("humidity").style.display = "none";
    } else if (data === "nitrogen") {
      document.getElementById("amonia").style.display = "nonw";
      document.getElementById("carbon").style.display = "none";
      document.getElementById("formal").style.display = "none";
      document.getElementById("nitrogen").style.display = "block";
      document.getElementById("butanol").style.display = "none";
      document.getElementById("particulate").style.display = "none";
      document.getElementById("ethanol").style.display = "none";
      document.getElementById("tobacco").style.display = "none";
      document.getElementById("humidity").style.display = "none";
    } else if (data === "butanol") {
      document.getElementById("amonia").style.display = "nonw";
      document.getElementById("carbon").style.display = "none";
      document.getElementById("formal").style.display = "none";
      document.getElementById("nitrogen").style.display = "none";
      document.getElementById("butanol").style.display = "block";
      document.getElementById("particulate").style.display = "none";
      document.getElementById("ethanol").style.display = "none";
      document.getElementById("tobacco").style.display = "none";
      document.getElementById("humidity").style.display = "none";
    } else if (data === "particulate") {
      document.getElementById("amonia").style.display = "nonw";
      document.getElementById("carbon").style.display = "none";
      document.getElementById("formal").style.display = "none";
      document.getElementById("nitrogen").style.display = "none";
      document.getElementById("butanol").style.display = "none";
      document.getElementById("particulate").style.display = "block";
      document.getElementById("ethanol").style.display = "none";
      document.getElementById("tobacco").style.display = "none";
      document.getElementById("humidity").style.display = "none";
    } else if (data === "ethanol") {
      document.getElementById("amonia").style.display = "nonw";
      document.getElementById("carbon").style.display = "none";
      document.getElementById("formal").style.display = "none";
      document.getElementById("nitrogen").style.display = "none";
      document.getElementById("butanol").style.display = "none";
      document.getElementById("particulate").style.display = "none";
      document.getElementById("ethanol").style.display = "block";
      document.getElementById("tobacco").style.display = "none";
      document.getElementById("humidity").style.display = "none";
    } else if (data === "tobacco") {
      document.getElementById("amonia").style.display = "nonw";
      document.getElementById("carbon").style.display = "none";
      document.getElementById("formal").style.display = "none";
      document.getElementById("nitrogen").style.display = "none";
      document.getElementById("butanol").style.display = "none";
      document.getElementById("particulate").style.display = "none";
      document.getElementById("ethanol").style.display = "none";
      document.getElementById("tobacco").style.display = "block";
      document.getElementById("humidity").style.display = "none";
    }
    else{
         document.getElementById("amonia").style.display = "nonw";
         document.getElementById("carbon").style.display = "none";
         document.getElementById("formal").style.display = "none";
         document.getElementById("nitrogen").style.display = "none";
         document.getElementById("butanol").style.display = "none";
         document.getElementById("particulate").style.display = "none";
         document.getElementById("ethanol").style.display = "none";
         document.getElementById("tobacco").style.display = "none";
         document.getElementById("humidity").style.display = "block";

    }

}


     document.getElementById("eng-image").style.display = "none";
     
     document.getElementById("nasa-text").style.display = "none";
     
     document.getElementById("eng-text").style.display = "none";

function nasaeng(data){
    if(data === "nasa"){
        document.getElementById("eng-image").style.display = "none"
        document.getElementById("nasa").style.display = "block";
             
     document.getElementById("nasa-text").style.display = "block";
                  document.getElementById("eng-text").style.display = "none";
    }
    else if(data === 'eng'){
         document.getElementById("eng-image").style.display = "block";
        document.getElementById("nasa").style.display = "none";
             document.getElementById("eng-text").style.display = "block";
                  document.getElementById("nasa-text").style.display = "none";
    }
    else{

    }

        
    }



    var counter = 0;
    var i = setInterval(function () {
       document.getElementById("nasa-link").click();
  

      counter++;
      if (counter === 100) {
        clearInterval(i);
      }
    }, 1000);


    

        var counter = 0;
        var i = setInterval(function () {
          
                  document.getElementById("eng-link").click();

          counter++;
          if (counter === 200) {
            clearInterval(i);
          }
        }, 6000);



        var counter = 0;
        var i = setInterval(function () {
           document.getElementById("nasa-link").click();

          counter++;
          if (counter === 200) {
            clearInterval(i);
          }
        }, 10000);