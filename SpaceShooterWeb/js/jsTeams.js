var teamsAllInfo ="";
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsediii');


    fetch('./json/equipos.json')
        .then(function (response) {
            return response.json();
            
        })
        .then(function (data) {
            //console.log(data);
            teamsAllInfo = data;
            for (let i = 0; i < data.equipos.length; i++) {
                document.getElementById("containerTeams").innerHTML +=
                    '<div class="col-md-2 teamContainer" id="' + data.equipos[i].id + '"><img src="../SpaceShooterWeb/img/teamsLogo/' + data.equipos[i].name + '.png" alt="..." class="img-thumbnail"></div>';
                /*        '<div class="col-3 teamContainer"><img src="../SpaceShooterWeb/img/teamsLogo/cloud9.png" alt="..." class="img-thumbnail">'+data.equipos[i].name+'</div>';*/
            }
            let elementsArray = document.querySelectorAll(".teamContainer");

            elementsArray.forEach(function (elem) {
                elem.addEventListener("click", function () {
                  
                    document.getElementById("containerTeams").style.display ="none";
                    document.getElementById("headerTeams").style.display ="none";

                    document.getElementById("jugadoresEquipo").style.visibility ="visible";

                    teamInfo(this.id);

                });
            });
        })
        .catch(function (err) {
            console.log(err);
        })
});

function teamInfo(id){

    var id = id -1;
 
    document.getElementById("teamInfo").innerHTML +="<h4>"+teamsAllInfo.equipos[id].name+"</h4><p>Europe</p>";
   document.getElementById("teamImg").innerHTML +='<img src="../SpaceShooterWeb/img/teamsLogo/'+teamsAllInfo.equipos[id].name +'.png" alt="..."class="img-thumbnail">';

  //document.getElementById("teamImg").innerHTML +='<img src="../SpaceShooterWeb/img/teamsLogo/g2.png" alt="..."class="img-thumbnail">';



}
