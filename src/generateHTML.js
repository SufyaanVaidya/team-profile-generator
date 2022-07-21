const cardArray = [];
const personCard = cardArray.join('');
function createHtmlPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Page</title>
    </head>
    <body>
        <header>
            <h1>Your Team Profile ✨</h1>
        </header>
        <main>
        <div class= "container">
        <div class="row justify-content-center" id="employee-cards">
        ${}
        </div>
        </div>
        </main>
        
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </html>
    
    `
}

function generateManager (manager) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h3>${manager.name}</h3>
        <h4>Manager</h4>
    </div>
    <div class="card-body">
        <p class="id">ID- ${manager.id}</p>
        <p class="email">Email- <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office-number">Office Number- ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;
}

function generateEngineer (engineer) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h3>${engineer.name}</h3>
        <h4>Manager</h4>
    </div>
    <div class="card-body">
        <p class="id">ID- ${engineer.id}</p>
        <p class="email">Email- <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github- <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    </div>
    </div>
    `;
}


createHtmlPage();