let pyramid = 10;
    let result = "";
    for(let i = 1 ; i <= pyramid ; i++) {
        for(j = pyramid ; j > i ; j--) {
          result += " ";
        }
        for(j = 1 ; j<= i ; j++) {
          result += '*' + " ";
        }
        result += "\n";
    }
    console.log(result);
