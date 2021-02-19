var friendsAge = [17, 15, 12, 14, 13, 21]; 
var ami2 = {
    age:17, 
    weight:55, 
    height:65, 
    color:'blue'
}; 

var lookingFor = 'age'; 
var myAge = ami2[lookingFor]; 
ami2.weight = 95; 
console.log(ami2); 