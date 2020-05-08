function shtoLajmin(){
   
    var createDiv = document.createElement('div');
    var createTitle = document.createElement('h3');
    var createParagraph = document.createElement('p');
    var createFooter = document.createElement('h6');
    var createImg = document.createElement('img');

    Lajmi.titulli = document.getElementById('titulli-new').value;
    var createTitleText = document.createTextNode(Lajmi.titulli);
    
    Lajmi.permbajtja = document.getElementById('permbajtja-new').value;
    var createParagraphText = document.createTextNode(Lajmi.permbajtja);
    
    var createFooterText = document.createTextNode(Lajmi.footeri);
    
    Lajmi.fotoja = document.getElementById('Ubt-Logo');
    var foto = document.createTextNode(Lajmi.fotoja);

    createImg.appendChild(foto);
    createTitle.appendChild(createTitleText);
    createParagraph.appendChild(createParagraphText);
    createFooter.appendChild(createFooterText);

    var RightSide = document.getElementById('RightSide');

    createDiv.appendChild(createImg);
    createDiv.appendChild(createTitle);
    createDiv.appendChild(createParagraph);
    createDiv.appendChild(createFooter);
    RightSide.appendChild(createDiv);

    createDiv.className='form-group';

    var count = document.getElementsByClassName("form-group").length
    console.log(count);

    var DivItem = RightSide.children[3];
    
    if(count > 4){
        RightSide.removeChild(createDiv);
        RightSide.replaceChild(createDiv, DivItem);
    }
}

var Lajmi={
    titulli:'',
    permbajtja:'',
    footeri:'Ubt-News',
    fotoja:'',
}