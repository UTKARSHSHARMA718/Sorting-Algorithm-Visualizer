// let arr = [5, 6, 4, 8, 1, 2];

function selection(){
    c_delay=0;
    
    div_update(divs[i],div_sizes[i],"red");//Color update
    
    let indexMin = 0;

    for (var i = 0; i < array_size - 1; i++) {
    
        div_update(divs[i],div_sizes[i],"red");//Color update


        indexMin = i;
        
        
        for (var j = i+1; j < array_size; j++) {

            div_update(divs[j],div_sizes[j],"yellow");//Color update

           
            if (div_sizes[j] < div_sizes[indexMin]) {

                if(indexMin!=i){

                    div_update(divs[indexMin],div_sizes[indexMin],"blue");//Color update
                 }
                 div_update(divs[indexMin],div_sizes[indexMin],"blue");//Color update
     

                indexMin = j;

                div_update(divs[indexMin],div_sizes[indexMin],"red");//Color update
            }

            else{
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(indexMin!=i){

            let temp = div_sizes[indexMin];
            div_sizes[indexMin] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[indexMin],div_sizes[indexMin],"red");//Color update
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[indexMin],div_sizes[indexMin],"blue");//Color update
        }

        div_update(divs[i],div_sizes[i],"green");//Color update
    }

    div_update(divs[i],div_sizes[i],"green");//Color update

    enable_buttons();
}

// console.log(arr);
