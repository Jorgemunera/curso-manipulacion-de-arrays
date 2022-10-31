const homeChores=[
    {name:'make the bed', state:'ok'},
    {name:'wash the dishes', state:'no'},
    {name:'sweep my room', state:'ok'},
    {name:'make lunch', state:'no'},
    {name:'mop', state:'no'},
    {name:'SLEEP', state:'no'}
];
//manipular DOM con javascript
const olChores=document.getElementById('chores');
const ulState=document.getElementById('states');

homeChores.forEach(chore=>{
    olChores.innerHTML+= `<li>${chore.name}</li>`;
    ulState.innerHTML+=`<li>  
    <label for="ck-ok">ok</label>
    <input type="checkbox" id="ck-ok">
    <label for="ck-no">no</label>
    <input type="checkbox" name="ck-no">
</li>`;
});