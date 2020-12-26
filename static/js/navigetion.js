


function CreateCustomAlertBox()
{
    console.log("Called")
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
        document.getElementById('alert-box-header').innerHTML = "Network Error ";
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



function LoadDashboard()
{
    window.location = 'index.html'
    // if(!navigator.onLine) {CreateCustomAlertBox ()}
    // if(navigator.onLine) {window.location = 'index.html'}
}

function LoadPremiumColourChart()
{
    window.location = 'premium.html'

    // if(!navigator.onLine) {CreateCustomAlertBox ()}
    // if(navigator.onLine) {window.location = 'premium.html'}
}

function LoadDeveloper()
{
    window.location = 'developer.html'

    // if(!navigator.onLine) {CreateCustomAlertBox ()}
    // if(navigator.onLine) {window.location = 'developer.html'}
}


function ShowNavigetionLinks() 
{
    var x = document.getElementById("links-div");
    if (x.className.indexOf("w3-show") == -1) {x.className += " w3-show";} 
    else { x.className = x.className.replace(" w3-show", "");}
}


function ShowLinks ( )
{
    Htmldiv = document.getElementById('links-div');

    // links
    Link1 = document.createElement('label');
    Link2 = document.createElement('label');


    Link1.setAttribute('class', 'navi-links-labels font-styls-links')
    Link2.setAttribute('class', 'navi-links-labels font-styls-links')

    // Attaching functions .....
    Link1.setAttribute('onclick','LoadPremiumIndex()');
    Link2.setAttribute('onclick','LoadPremiumColourChart()');

    Link1.innerHTML = 'Dashbord';
    Link2.innerHTML = 'Premium';
    

    Htmldiv.appendChild(Link1);
    Htmldiv.appendChild(Link2);   
}

