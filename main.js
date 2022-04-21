
//definning the variables
let inp_as=document.getElementById('a_size'),array_size=inp_as.value;
let inp_gen=document.getElementById('a_generate');
let inp_aspeed=document.getElementById('a_speed');


// selecting algorithm buttons
let butts_algos=document.querySelectorAll(".algos button");

let div_sizes=[];
let divs=[];
let margin_sizes;
let count=document.getElementById("array_container");
count.style="flex-direction:row";

// generating and updating array
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("click",update_array_size);


//function for generating array

function generate_array(){


    count.innerHTML="";

    for(let i=0;i<array_size;i++){

        // generated a random number
        div_sizes[i] = Math.floor(Math.random()  * 0.5 * (inp_as.max - inp_as.min)) + 10;
       //created a div
        divs[i]=document.createElement("div");
        // appended the div in the html 
        count.appendChild(divs[i]);
        //set margin between the divs
        margin_sizes=0.1;

        // set CSS to show the color and height of the divs
        divs[i].style=" margin:0% " + margin_sizes + "%; background-color:blue; width:" + (100/array_size-(2*margin_sizes)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}



// running the appropiate or selected algo
function update_array_size(){

    array_size=inp_as.value;// taking value from user slider
    generate_array(); // generating random array;
}

window.onload=update_array_size();

//Running the appropriate algorithm.
for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",run_algo);
}


function disable_buttons(){

        // using loop so we can disable all buttons in one go...
        for(let i=0;i<butts_algos.length;i++){

            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_locked");
            

            butts_algos[i].disabled=true;
            inp_as.disabled=true;
            inp_gen.disabled=true;
            inp_aspeed.disabled=true;

        }
    

}


function run_algo(){
       
    disable_buttons();

    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble":bubble();
             break;
        case "Selection":selection();
             break;
        case "Insertion":Insertion();
             break;
        case "Merge":Merge();
             break;
        case "Quick":Quick();
             break;
        case "Heap":Heap();
             break;
    
        default:
            break;
    }


}