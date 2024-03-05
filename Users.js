function loadData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}
loadData();

function displayData(data){
   const sectionId = document.getElementById('user');
   for(const users of data){
    const div = document.createElement('div');
    div.classList.add("user")
    div.innerHTML = `
        <h3>${users.name}</h3>
        <h5>${users.username}</h5>
        <h4>${users.email}</h4>
        <h2>${users.address}</h2>
        <h4>${users.phone}</h4>
        <a href='${users.website}'>website</a>
    `;
    sectionId.appendChild(div);

    console.log(users);
   }
}