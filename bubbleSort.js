// let arr = [5, 2, 3, 1, 4, 6];

function bubble() {
  c_delay = 0;
  for (let i = 0; i < array_size-1; i++) {
    //updating colour
    //when we are moving through numbers the color of lines should get yellow for a while
    let jj;
    for (var j = 0; j < array_size - 1 - i; j++) {

      div_update(divs[j], divs[j], "yellow");

      if (div_sizes[j] > div_sizes[j + 1]) {

        div_update(divs[j], div_sizes[j], "red"); // updating the height

        div_update(divs[j + 1], div_sizes[j + 1], "red"); // updating the height


        let temp = div_sizes[j];

        div_sizes[j] = div_sizes[j + 1];

        div_sizes[j + 1] = temp;

        div_update(divs[j], div_sizes[j], "red"); // updating the height

        div_update(divs[j + 1], div_sizes[j + 1], "red"); // updating the height

      }
      div_update(divs[j], div_sizes[j], "blue"); // updating the colour
      jj=j;
    }
    div_update(divs[j], div_sizes[j], "green"); // updating the colour

  }
  div_update(divs[0], div_sizes[0], "green"); // updating the colour
  
  // enabling the buttons
  enable_buttons();
}

// console.log(arr);
