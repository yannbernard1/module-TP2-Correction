document.getElementById('date').valueAsDate=new Date();
document.getElementById('savoir').focus();

function ajouter() {
    let savoir = document.getElementById('savoir').value;
    let auteur = document.getElementById('auteur').value;
    let date = document.getElementById('date').valueAsDate;

    if (savoir !== '' && auteur !== '' && date !== '') {
        let nouvelElement = document.createElement('li');
        let pSavoir = document.createElement('p');
        pSavoir.innerText=savoir;
        let pAuteur = document.createElement('p');
        pAuteur.innerText=auteur;
        let pDate = document.createElement('p');
        pDate.innerText=(date.getDate()).toString().padStart(2, "0")+'/'
            +(date.getMonth()+1).toString().padStart(2, "0")+'/'
            +date.getFullYear();
        nouvelElement.appendChild(pSavoir);
        nouvelElement.appendChild(pAuteur);
        nouvelElement.appendChild(pDate);
        // nouvelElement.innerText = savoir + ' par ' + auteur + ' le ' + date;
        nouvelElement.className='elementNouveau';
        nouvelElement.addEventListener('click', supprimer);
        document.getElementById('liste').appendChild(nouvelElement);
        document.getElementById('savoir').value = '';
        document.getElementById('auteur').value = '';
    } else {
        alert('Tous les champs doivent etre remplis.');
    }
}

function supprimer() {
    if (confirm(this.firstChild.innerText + ' doit etre supprimé ?')) {
        this.remove();
    }
}