// this function creates the base of the html
function createHtmlPage(teamCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
        <!-- this allows me to input as many cards as the user inputs to the html -->
        ${teamCards}
        </div>
        </div>
        </main>
        
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    </html>
    
    `
}

// this generates the card specifically for the manager
function generateManager (manager) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h3>${manager.name}</h3>
        <h4>Manager</h4><i class="fa-solid fa-starship-freighter"></i>
    </div>
    <div class="card-body">
        <p class="id">ID- ${manager.id}</p>
        <p class="email">Email- <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office-number">Office Number- ${manager.officeNumber}</p>
    </div>
    </div>
    </div>
    `;
};

// this generates the card specifically for the engineer
function generateEngineer (engineer) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4><i class="fa-solid fa-starfighter"></i>
    </div>
    <div class="card-body">
        <p class="id">ID- ${engineer.id}</p>
        <p class="email">Email- <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github- <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
    </div>
    </div>
    </div>
    `;
};

// this generates the card specifically for the intern
function generateIntern (intern) {
    return `<div class="col-4 mt-4">
    <div class="card h-100">
    <div class="card-header">
        <h3>${intern.name}</h3>
        <h4>Intern</h4><i class="fa-solid fa-starfighter-twin-ion-engine"></i>
    </div>
    <div class="card-body">
        <p class="id">ID- ${intern.id}</p>
        <p class="email">Email- <a href="mailto:${intern.email}">${intern.email} target="_blank"</a></p>
        <p class="school">School- ${intern.school}</p>
    </div>
    </div>
    </div>
    `;
};

// this function if it takes in certain data AKA role in this case it will add it to an array to populate in the created html base
generateHTML = (data) => {
    const cardArray = [];
    const foo = (e) => {
        
            const role = e.getRole();
            if (role == 'Manager') {
                cardArray.push(generateManager(e));
            }
            if (role == 'Engineer') {
                cardArray.push(generateEngineer(e));
            }
            if (role == 'Intern') {
                cardArray.push(generateIntern(e));
            }
            
        
    }
    data.map((elem)=> foo(elem))
    const teamCards = cardArray.join('');

    const inputTeam = createHtmlPage(teamCards);

    return inputTeam;
}

// this is the function i exported and called on in a different file
module.exports = generateHTML;