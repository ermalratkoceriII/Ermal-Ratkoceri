function CreateTicket(){
    var Container = document.getElementById('ContactContainer');
  
    var createBox = document.createElement('div');
    var createDiv = document.createElement('div');
    var createTitle = document.createElement('h3');
    var createParagraph = document.createElement('p');

    UserTicket.Username = document.getElementById('User').value;
    var createUsernameTitle = document.createTextNode(UserTicket.Username);

    UserTicket.Recipe = document.getElementById('Recipe').value;
    var createRecipeText = document.createTextNode(UserTicket.Recipe);

    createTitle.appendChild(createUsernameTitle);
    createParagraph.appendChild(createRecipeText);

    createDiv.appendChild(createTitle);
    createDiv.appendChild(createParagraph);
    Container.appendChild(createBox);
    createBox.appendChild(createDiv);

    createBox.className='box';
    createDiv.className='content';

    createBox.style.maxWidth="725px";
    createDiv.style.height="75%";

    var ContactButtons = document.getElementsByName('ContactButtons');

    var Useri = document.getElementById('User');
    var TextBox = document.getElementById('Recipe');

    if(Useri.value.trim() == "")
    {
        alert("Pleas fill in username!");
        var count = document.getElementsByClassName('content').length;
        console.log(count);
        if(count > 1){
            Container.removeChild(createBox);
        }
    }if(TextBox.value.trim() == "")
    {
        alert("Please fill in the recipe!");
        var count = document.getElementsByClassName('content').length;
        console.log(count);
        if(count > 1){
            Container.removeChild(createBox);
        }
    }else if(!Useri.value.trim() == ""){
        
    var count = document.getElementsByClassName('content').length;
    console.log(count);

    if(count > 1){
        Container.removeChild(createBox);
        Container.replaceChild(createBox, Container.childNodes[2]);
    }
    ContactButtons[0].classList.add('hide');
    ContactButtons[0].classList.remove('show');
    ContactButtons[1].classList.remove('hide');
    ContactButtons[1].classList.add('show');
    }
}

function hideButton(){
    var ContactButtons = document.getElementsByName('ContactButtons');

    ContactButtons[0].classList.add('show');
    ContactButtons[1].classList.add('hide');
}

window.onLoad = hideButton();

var UserTicket={
    Username:'',
    Recipe:'',
}