
$(document).ready(function(){

  var arr  = [];
  var storeValue = "";
  var result = 0;

      $("button").click(function(){
          var buttonValue = $(this).attr("value");
          $("#outputArea").val(buttonValue);
        //   alert(buttonValue);
           if(buttonValue == "="){
              arr.push(storeValue);
              doArithmetic(arr);

           }
           else if(isNaN(buttonValue) == false || buttonValue == "."){
             if(!storeValue.length){
               storeValue  = buttonValue;
             }
             else{
             storeValue  = storeValue + buttonValue;
             }
            $("#outputArea").val(storeValue);
         }
         else if(buttonValue == "+" || buttonValue == "-" || buttonValue == "/"
                || buttonValue == "*"){
                  $("#outputArea").val(buttonValue);
                    arr.push(storeValue);
                    storeValue = "";
                    for (var i = 0; i < arr.length; i++) {
                        if(arr[i] == "+" || arr[i] == "-" || arr[i] == "/" ||
                        arr[i] == "*"){
                        arr =  doArithmetic(arr);
                        }
                    }
                    arr.push(buttonValue);
          }
          else if(buttonValue == "CE" || buttonValue == "AC"){
                  storeValue = "";
                  arr  = [];
                  result = "";
                  $("#outputArea").val(0);
          }


          function doArithmetic(arr){
            if(arr[1] == "+"){
              var firstNum = parseFloat(arr[0]);
              var secNum = parseFloat(arr[2])
              result = firstNum+secNum;
              $("#outputArea").val(result);
              arr = [result];
              storeValue = "";
              return arr;
            }
            else if (arr[1] == '-') {
              var firstNum = parseFloat(arr[0]);
              var secNum = parseFloat(arr[2])
              result = firstNum - secNum;
              $("#outputArea").val(result);
              arr = [result];
              storeValue = "";
              return arr;
            }
            else if (arr[1] == '*') {
              var firstNum = parseFloat(arr[0]);
              var secNum = parseFloat(arr[2])
              result = firstNum * secNum;
              $("#outputArea").val(result);
              arr = [result];
              storeValue = "";
              return arr;
            }
            else if (arr[1] == '/') {
              var firstNum = parseFloat(arr[0]);
              var secNum = parseFloat(arr[2])
              result = firstNum / secNum;
              $("#outputArea").val(result);
              arr = [result];
              storeValue = "";
              return arr;
            }
          }
    });

});
