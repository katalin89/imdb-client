function createRow(film){
    let tr=document.createElement("tr");
    tr.innerHTML=`
    <td>${film.id}</td>
    <td>${film.title}</td>
    <td>${film.year}</td>
    <td>${film.description}</td>

    `
    
    return tr;
}

function attachRows(arr){
    for(let i=0;i<arr.length;i++){
        container.appendChild(createRow(arr[i]));
    }
}

