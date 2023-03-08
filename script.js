/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

/*
- creare un array di oggetti
- indicare per ogni membro nome, ruolo e foto.

- Creare l’array di oggetti con le informazioni fornite.

- Stampare su console, per ogni membro del team, le informazioni di nome, 
    ruolo e la stringa della foto

- Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

let team = [
    {
        name: 'Wayne Barnett',
        position: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        position: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        position: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        position: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        position: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        position: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]


for(let i = 0; i < team.length; i++) {

    console.log('nome: ' + team[i].name);
    console.log('cognome: ' + team[i].position);
    console.log('foto: ' + team[i].image);


    
    const listEl = document.getElementById('list');
    
    const newElement = document.createElement('li')
    listEl.append(newElement);

    newElement.innerText = (team[i]);
}



