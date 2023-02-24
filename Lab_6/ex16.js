let text = '{ "students" : [' +
'{ "name":"John" , "age":"19", "address" : "123 street" , "sayHello" : "Hello my name is .. John" },' +
'{ "name":"steve" , "age":"20", "address" : "321 street" ,  "sayHello" : "Hello my name is .. steve"},' +
'{ "name":"michael" , "age":"19", "address" : "132 street",  "sayHello" : "Hello my name is .. michael" } ]}';


const obj = JSON.parse(text);

for(var i=0;i<obj.students.length;i++)
{
    console.log(obj.students[i].sayHello );

}