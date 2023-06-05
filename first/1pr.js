// Funcao para pegar todos os blog no portal
function get() {

    fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings/", {
        headers: { Authorization: 'Basic ' + btoa('test@liferay.com:test') }
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}

// Funcao para postar um blog no portal com titulo e descricao
function post() {
    fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/20119/blog-postings/", {
        method: "POST",
        headers: {
            Authorization: 'Basic ' + btoa('test@liferay.com:test'),
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            headline: "Primeiro Pull Request",
            articleBody: "That is a description for my first blog"
        })
    })}

// Funcao para pegar um blog ESPECIFICO do portal, usando ID do blog
function getId() {
    fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${document.getElementById('inputget').value}`, {
        headers: {
            Authorization: 'Basic ' + btoa('test@liferay.com:test'),
        }
    })

    .then((response) => response.json())
    .then((data) => console.log(data));
}

// Funcao para deletar um blog ESPECIFICO do portal, usando ID do blog
function deleteId() {
    fetch(`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${document.getElementById('inputdelete').value}`,{
          
    method: "DELETE",    
    headers: {
        Authorization: 'Basic ' + btoa('test@liferay.com:test'),
    }
})}
  