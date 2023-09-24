// API à utiliser pour le travail: https://randomuser.me/api/?results=5
fetch('https://randomuser.me/api/?results=5')
.then(response => response.json())
.then(data => {
    let output = '<h1>TP2</h1>';
    data.results.forEach(function(element) {
        output += '<img src=' + element.picture.large + '><br/>';
        output += element.name.first +' '+ element.name.last +'<br/>';
        output += element.email +'<br/><p style="margin-bottom: 2rem"></p>';
    });
    document.getElementById('container').innerHTML = output;
})
const container = document.getElementById('container');
container.style.marginLeft = '5rem';
container.style.fontWeight = 'bold';

