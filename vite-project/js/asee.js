
function remove2(name) {
    let x = [...name];
    x.splice(0,2) 
//the second argument tells you how many elements you want to delete in the array.
    console.log(x)
}

remove2("wooper");  
