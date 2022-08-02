const fs = require("fs");


function htnl_Generator(data){
    let data_team = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

</head>

<body>
        <nav>
            <div class="nav-wrapper deep-purple accent-4">
              <a href="" class="brand-logo">Team Generator</a>
            </div>
        </nav>

    <div class="row">
`
data.forEach(element => {
    data_team+= add_team(element);
    
});

data_team+=`
</div>

</body>
</html>
`
return data_team;
}

function add_team(team){
    return `
    <div class="col s4">
    <div class="card deep-purple accent-1">
      <div class="card-content black-text">
        <span class="card-title">${team.name}</span>
        <table>
          <thead>
              <tr>
                  <th>${team.position}</th>
              </tr>
              <tr>
                  <td>${team.id}</td> 
              </tr>
              <tr>
              <a href="${team.email}">${team.email}</a>
              </tr>
              <tr>
              <a href="https://github.com/${team.github}">${team.github}</a>
              </tr>
          </thead>
      </table>
        
      </div>
    </div>
  </div>`

  
}

module.exports = htnl_Generator;