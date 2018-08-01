var x = [
    {
        yellow: "1",
        blue: "2"
    },
    {
        yellow: "5",
        blue: "7"
    }
];   

//console.log(Object.keys(x[1]));

// x.forEach(function(obj) {
//     console.log(obj)
// })

var row = ""
for(var key in x[0]) {
    row = row + "   " + key
    //console.log(key)
}
console.log(row)