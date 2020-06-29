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
}

var UserTicket={
    Username:'',
    Recipe:'',
}