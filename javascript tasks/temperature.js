
function putOnCoat(temperature){
    if(temperature < 50){
        console.log("Put on a coat");
    }else{
        console.log("Don't put on a coat")
    }
}

function putOnCoat2(temperature){
    let sentence = "";
    if(temperature < 50 && temperature > 30){
        sentence += "Put on a coat "   
    }else if(temperature < 30 && temperature > 0){
        sentence += "Pants and vest are fine."
    }else if(temperature < 0){
        sentence = "Stay inside"   
    }
    else{
        sentence += "Pants and vest are fine"   
    }
    return sentence;
}
 putOnCoat(49);
 putOnCoat2(49);
 putOnCoat2(-5);


