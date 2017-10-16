var Fruits = { "Bob" : [
    {"Fruit" : "Apples", "Serving_Size" : "1 Medium", "Calories" : "80", "Carbs" : "22g", "Protein" : "0g", "Fibre" : "5g", "Fat" : "0g", "Sodium" : "0mg"}, 
    {"Fruit" : "Peaches", "Serving_Size" : "1 Medium", "Calories" : "40", "Carbs" : "10g", "Protein" : "0.06g", "Fibre" : "1.5g", "Fat" : "0g", "Sodium" : "0mg"},
    {"Fruit" : "Nectarines", "Serving_Size" : "1 Medium", "Calories" : "70", "Carbs" : "16g", "Protein" : "1g", "Fibre" : "3g", "Fat" : "1g", "Sodium" : "0mg"},
    {"Fruit" : "Plums", "Serving_Size" : "1 Medium", "Calories" : "36", "Carbs" : "8.6g", "Protein" : "0.52g", "Fibre" : "1g", "Fat" : "0.41g", "Sodium" : "0mg"},
    {"Fruit" : "Asian Pears", "Serving_Size" : "1 Medium", "Calories" : "59", "Carbs" : "13g", "Protein" : "0.9g", "Fibre" : "4g", "Fat" : "0.1g", "Sodium" : "0mg"},
    {"Fruit" : "Strawberries", "Serving_Size" : "8 Medium", "Calories" : "70", "Carbs" : "17g", "Protein" : "1g", "Fibre" : "3g", "Fat" : "0.5g", "Sodium" : "0mg"},
    {"Fruit" : "Raspberries", "Serving_Size" : "10 Medium", "Calories" : "10", "Carbs" : "2.3g", "Protein" : "0.2g", "Fibre" : "1.2g", "Fat" : "0.1g", "Sodium" : "0.2mg"},
    {"Fruit" : "Blueberries", "Serving_Size" : "1 Cup", "Calories" : "83", "Carbs" : "21g", "Protein" : "1.1g", "Fibre" : "3.5g", "Fat" : "0.5g", "Sodium" : "1mg"},
    {"Fruit" : "Pumpkins", "Serving_Size" : "1 Cup ", "Calories" : "49", "Carbs" : "12g", "Protein" : "2g", "Fibre" : "3g", "Fat" : "0g", "Sodium" : "0mg"}]};

var Fruit_String = JSON.stringify(Fruits);

window.localStorage.setItem("Fruit_Store", Fruit_String);
var Fruit=[], Serving_Size=[], Calories=[], Carbs=[], Protein=[], Fibre=[], Fat=[], Sodium=[];
var Fruit_Call = window.localStorage.getItem("Fruit_Store");

var Fruit_JSON = JSON.parse(Fruit_Call);

for (i=0; i<Fruit_JSON.item.length; i++)
{
    var Counter = Fruit_JSON.item[i];
    Fruit[i] = Counter.Fruit;
    Serving_Size[i] = Counter.Serving_Size;
    Calories[i] = Counter.Calories;
    Carbs[i] = Counter.Carbs;
    Protein[i] = Counter.Protein;
    Fibre[i] = Counter.Fibre;
    Fat[i] = Counter.Fat;
    Sodium[i] = Counter.Sodium;
}

var optNo=0;
$("#opt1").click(function(){optNo=0;DisplayInfo()});
$("#opt2").click(function(){optNo=1;DisplayInfo()});
$("#opt3").click(function(){optNo=2;DisplayInfo()});
$("#opt4").click(function(){optNo=3;DisplayInfo()});
$("#opt5").click(function(){optNo=4;DisplayInfo()});
$("#opt6").click(function(){optNo=5;DisplayInfo()});
$("#opt7").click(function(){optNo=6;DisplayInfo()});
$("#opt8").click(function(){optNo=7;DisplayInfo()});
$("#opt9").click(function(){optNo=8;DisplayInfo()});

function DisplayInfo()
{
    $("#Disp").text(Serving_Size[optNo])
}