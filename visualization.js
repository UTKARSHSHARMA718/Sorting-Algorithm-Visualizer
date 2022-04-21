
let speed=1000;

// taking speed from user input slider
input_aspeed=addEventListener("input",vis_speed);

function vis_speed(){

    let array_speed=inp_aspeed.value;

    //setting speed according to slider value;
    switch (parseInt(array_speed)) {
        case 1: speed=1;
            break;
        case 2: speed=10;
            break;
        case 3: speed=100;
            break;
        case 4: speed=1000;
            break;
        case 5: speed=10000;
            break;
    
        default:
            break;
    }

    delay_time= 10000 /(Math.floor(array_size/10) * speed); //Decrease numerator to increase speed.


}

let delay_time=10000/(Math.floor(array_size/10) * speed);//Decrease numerator to increase speed.

c_delay=0;//This is updated on every div change so that visualization is visible.

function  div_update(count , height ,color){


    window.setTimeout(
        function(){
            count.style=" margin:0% " + margin_sizes + "%; width:" + (100/array_size-(2*margin_sizes)) + "%; height:" + height + "%; background-color:" + color + ";";
        },
        c_delay += delay_time
        );
    
}

function enable_buttons(){

    window.setTimeout( function(){


        // using loop so we can enable all buttons in one go...
        for(let i=0;i<butts_algos.length;i++){

            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");
            

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;

        }
    },
    c_delay+=delay_time
    );
}