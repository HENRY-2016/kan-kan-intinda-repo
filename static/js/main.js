
// 192.168.43.23


function CreateCustomAlertBox()
{
    this.render = function(dialog){
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let AlertBoxDisplayArea = document.getElementById('alert-box-display-area');
        let HtmlAlertBox = document.getElementById('alert-box');
        AlertBoxDisplayArea.style.display = "block";
        AlertBoxDisplayArea.style.height = winH+"px";
        HtmlAlertBox.style.left = (winW/2) - (550 * .5)+"px";
        HtmlAlertBox.style.top = "100px";
        HtmlAlertBox.style.display = "block";
        document.getElementById('alert-box-header').innerHTML = "Network Or Server Error ";
        document.getElementById('alert-box-body').innerHTML = dialog;
        document.getElementById('alert-box-footer').innerHTML = '<button class="ok-alert-btn" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function()
        {
            document.getElementById('alert-box').style.display = "none";
            document.getElementById('alert-box-display-area').style.display = "none";
        }
}
var Alert = new CreateCustomAlertBox();

function ShowAlertBox (){Alert.render('<center>Please turn on <br> your network <br>and <br> Try Again</center>')}


// Bigtime
function LoadClientUsingGitHub ()
{
    window.location='https://henry-2016.github.io/bake4me-client-staff-admin-server-repo/clientindex.html';
    
}

function  LoadStaffUsingGitHub ()

{
    window.location='https://henry-2016.github.io/bake4me-client-staff-admin-server-repo/staffindex.html';
}

function  LoadSchoolUsingGitHub ()

{

    window.location='https://henry-2016.github.io/bake4me-client-staff-admin-repo/staffindex.html';
}

// Localhost



function LoadClientUsingLocalHost ()
{
    window.location='http://192.168.43.23/bake4me-php/clientindex.php';
    
}

function  LoadStaffUsingLocalHost ()

{
    window.location='http://192.168.43.23/bake4me-php/staffindex.php';
}


// linode
function LoadClientUsingLinode ()
{
    window.location='http://178.79.182.213/bake4me-php/customerindex.php';
    
}

function  LoadStaffUsingLinode ()

{
    window.location='http://178.79.182.213/bake4me-php/staffindex.php';
}

