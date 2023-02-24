let text = '{ "students" : [' +
'{ "name":"John" , "age":"19", "address" : "123 street" },' +
'{ "name":"steve" , "age":"20", "address" : "321 street" },' +
'{ "name":"michael" , "age":"19", "address" : "132 street" } ]}';


const obj = JSON.parse(text);

console.log(obj)
