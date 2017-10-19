var myCoffee = {
  flavor: "espresso",
  temperature: "piping hot",
  ounces: 100,
  milk: true,
  reheat: function(){
      if(myCoffee.temperature=== "cold")
          {
              myCoffee.temperature = "piping hot";
              alert("your coffe is heated again ");
          }
  } 
};
myCoffee.temperature="cold";
myCoffee["temperature"] = "lukewarm";
myCoffee.reheat();