var mark= {
    name: "mark",
    tshirtColor: "navy blue"
};
var lisa = {
    name: "lisa",
    tshirtColor: "red"
    
};
function  Friend(name, tshirtColor){
    this.name =name;
    this.tshirtColor =tshirtColor;
}
var denny = new Friend("denny" , "green");
alert(denny.name);