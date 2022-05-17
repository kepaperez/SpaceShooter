var teamsAllInfo = "";
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

                    document.getElementById("containerTeams").style.display = "none";
                    document.getElementById("headerTeams").style.display = "none";

                    document.getElementById("jugadoresEquipo").style.visibility = "visible";
                    document.getElementById("headerTeam").style.visibility = "visible";

                    teamInfo(this.id);

                });
            });
        })
        .catch(function (err) {
            console.log(err);
        })
});

function teamInfo(id) {

    var id = id - 1;
    fetch('./json/partidas.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var sorted = data.partidas.sort(function (a, b) { return b.score - a.score });
            console.log(sorted);
            for (let i = 0; i < data.partidas.length; i++) {
                if (data.partidas[i].id_equipo == id) {
                    document.getElementById("jugadoresEquipo").innerHTML +=
                        `<div class="card m-2 p-2" style="width: 18rem;background-color:#011536;">
                            <img src="../SpaceShooterWeb/img/default-avatar.jpg" class="card-img-top " alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">`+ data.partidas[i].name +` </h5>
                                </div>
                        </div>`;
                }
            }
        })
        .catch(function (err) {
            console.log(err);
        })


    document.getElementById("teamInfo").innerHTML += "<h4>" + teamsAllInfo.equipos[id].name + "</h4><p>Europe</p>";
    document.getElementById("teamImg").innerHTML += '<img src="../SpaceShooterWeb/img/teamsLogo/' + teamsAllInfo.equipos[id].name + '.png" alt="..."class="img-thumbnail">';

    //document.getElementById("teamImg").innerHTML +='<img src="../SpaceShooterWeb/img/teamsLogo/g2.png" alt="..."class="img-thumbnail">';



}
