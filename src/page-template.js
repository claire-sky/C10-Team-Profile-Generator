// generate individual cards for team members
const generateCard = teamData => {
    
    // destructure data
    const { name, id, email, role, ...data } = teamData;
    
    return `
    <h2>${name}</h2>
    <h3>${role}</h3>
    <p>ID: ${id}</p>
    <p>Email: <a href="mailto:${email}">${email}</a></p>
    <p>${generateExtra(data)}</p>
    `;
};

// generate last line based on role
const generateExtra = data => {
    const { office, github, school } = data;

    if (office) {
        return `
        <p>Office Number: ${office}</p>
        `;
    } else if (github) {
        return `
        <p>GitHub: <a href="https://github.com/${data.github}">${data.github}</a></p>
        `;
    } else {
        return `
        <p>School: ${school}</p>
        `;
    };
};

// generate html
module.exports = teamData => {
    console.log(teamData);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
    </head>

    <body>
        <header class="b-container fluid">
            <div class="row">
                <h1 class="col text-center bg-primary bg-gradient p-4 text-light">Team Profile</h1>
            </div>
        </header>
        <div class="b-container fluid">
            <div class="row bg-info bg-gradient justify-content-around">
                <main class="col col-8 bg-light m-2 rounded">
                    <div class="row justify-content-around">
                       ${generateCard(teamData)}
                    </div>
                </main>
            </div>
        </div>
    </body>
    </html>
    `;
};