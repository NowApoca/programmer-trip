(() => {
    const getName = (person) => person.lastname;

    //const han = {    firstname: "Han", lastname: "Solo"};
    //const luke = {    firstname: "Luke", lastname: "Skywalker"}; 
    //const leia = {    firstname: "Leia", lastname: "Organa"};
    //const people = [    han, luke, leia,luke, leia,han, luke, leia];
    //console.time("engine"); 
    //for(var i = 0; i < 1000 * 1000 * 1000; i++) {
    //    getName(people[i & 5]);
    //}
    // console.timeEnd("engine");


    
    //const han2 = {    firstname: "Han", };
    //const luke2 = {    lastname: "Skywalker"}; 
    //const leia2 = {    firstname: "Leia", lastname: "Organa"};
    //const people2 = [    han2, luke2, leia2,luke2, leia2,han2, luke2, leia2];
    //console.time("engine2"); 
    //for(var i = 0; i < 1000 * 1000 * 1000; i++) {
    //    getName(people2[i & 5]);
    //}
    // console.timeEnd("engine2");
    


    



    // const han3 = {    firstname: "Han", lastname: "Solo"};
    // const luke3 = {    firstname: null, lastname: "Skywalker"}; 
    // const leia3 = {    firstname: "Leia", lastname: null};
    //const people3 = [    han3, luke3, leia3,luke3, leia3, han3,luke3, leia3];
    //console.time("engine3"); 
    //for(var i = 0; i < 1000 * 1000 * 1000; i++) {
    //    getName(people3[i & 5]);
    //}
    // console.timeEnd("engine3");
})();

// 1: 1200ms
// 2: 1800ms
// 3: 1200ms

/*

el aumento de tiempo se debe a que el engine optimiza haciendo un duck typing. cada uno de los literals de aca pertenece a una clase. en el primer ejemplo pertenece a una clas de objetos que tiene frst y lastname en ese orden.
en el segundo tenemos 3 clases: una de firstname, otra de lastname y otra de first y lastname
En la tercera tenemos la primera clase

El performance se debe a que en la primera y la tercera se debe lookupear en una clase mientras que en la segunda en 3.

EL ORDEN DE FIELDS IMPORTA.

*/
