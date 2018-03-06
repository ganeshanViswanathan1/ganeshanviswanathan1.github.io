/*
JavsScript
*/

  var ref = new Firebase("https://proyectorpi.firebaseio.com/");

 
  ref.once("value", function(res) {

    var sensorBP = res.child("sensor/BP");
    var valueSensorBP = sensorBP.val()
    $('#BP').text(valueSensorBP);

    var sensorheartrate = res.child("sensor/heartrate");
    var valueSensorheartrate = sensorheartrate.val()
    $('#heartrate').text(valueSensorheartrate);
    
    

    image(valueSensorheartrate,valueSensorBP)

  });

 
  ref.on("child_changed", function(res) {

    var valueSensorBP = res.val().BP
    $('#BP').text(valueSensorBP);

    var valueSensorheartrate = res.val().heartrate
    $('#heartrate').text(valueSensorheartrate);
    
            

    sensor(valueSensorheartrate,valueSensorBP)

  });        

  

  function sensor(valueSensorheartrate, valueSensorBP){

    if(valueSensorheartrate>=7){

        console.log("Es de dia");

        if(valueSensorBP<17){

          console.log("dia frio");
          $("#imgDiaFrio").siblings().fadeOut(3000);
          $("#imgDiaFrio").fadeIn(3000);
          $("#dia").text("Dia Frio");

        }
        else if(valueSensorBP>17 && valueSensorBP<=23){
          console.log("dia fresco");
          $("#imgDiaFresco").siblings().fadeOut(3000);
          $("#imgDiaFresco").fadeIn(3000)
          $("#dia").text("Dia Fresco");
        }

        else if(valueSensorBP>24){
          console.log("dia Calido");
          $("#imgDiaCalido").siblings().fadeOut(3000);
          $("#imgDiaCalido").fadeIn(3000);
          $("#dia").text("Dia Calido");
        }

    }else{
        console.log("Es de noche");
        $("#imgNoche").siblings().fadeOut(3000);
        $("#imgNoche").fadeIn(3000);          
        $("#dia").text("Noche");

    }
 }       