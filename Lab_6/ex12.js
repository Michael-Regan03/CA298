(function () {

 });


 let show = function() {
    console.log('Anonymous function');
};


function add(x,y){
    let result = x + y
    console.log(result)
}


function printer(x ,y){
    add(x,y)
}

printer(5 ,6, show)