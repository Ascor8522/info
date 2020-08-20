fetch("curators.json")
.then(response => response.json())
.then(response => {
    response.curators.forEach(curator => {
        let li = document.createElement("li");
        let a = document.createElement("a");
            a.href = `https://scratch.mit.edu/users/${curator.username}`;
        let img = document.createElement("img");
            img.src = `https://cdn.scratch.mit.edu/get_image/user/${curator.id}_170x170.png`;
        let span = document.createElement("span");
            span.innerText = "@" + curator.username;
        a.appendChild(img);
        a.appendChild(span);
        li.appendChild(a);
        document.getElementById("curatorsList").appendChild(li);
    });
});
