fetch("http://localhost:8080/kati/film").then(data=>{
return data.json();
}).then(data=>{
    attachRows(data)
})

