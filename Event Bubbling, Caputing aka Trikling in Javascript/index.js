document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log('Grandparent Clicked')
},false);

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log('Parent Clicked')
},false);


document.querySelector("#child")
.addEventListener('click', () => {
    console.log('Child Clicked')
},false);


document.querySelector("#grandparent1")
.addEventListener('click', () => {
    console.log('Grandparent Clicked')
},true);

document.querySelector("#parent1")
.addEventListener('click', () => {
    console.log('Parent Clicked')
},true);


document.querySelector("#child1")
.addEventListener('click', () => {
    console.log('Child Clicked')
},true);


document.querySelector("#grandparent2")
.addEventListener('click', () => {
    console.log('Grandparent Clicked')
},true); //capturing

document.querySelector("#parent2")
.addEventListener('click', () => {
    console.log('Parent Clicked')
},false);//bubbling 


document.querySelector("#child2")
.addEventListener('click', () => {
    console.log('Child Clicked')
},true); //capturing


document.querySelector("#grandparent3")
.addEventListener('click', () => {
    console.log('Grandparent Clicked')
},true); //capturing

document.querySelector("#parent3")
.addEventListener('click', () => {
    console.log('Parent Clicked')
},false);//bubbling 


document.querySelector("#child3")
.addEventListener('click', () => {
    console.log('Child Clicked')
},false); //bubbling

//Stop propogation on parent

document.querySelector("#grandparent4")
.addEventListener('click', () => {
    console.log('Grandparent Clicked')
},false); 

document.querySelector("#parent4")
.addEventListener('click', (e) => {
    console.log('Parent Clicked')
    e.stopPropagation();
},false); 


document.querySelector("#child4")
.addEventListener('click', () => {
    console.log('Child Clicked')
},false); 


// Stop propogation on child

document.querySelector("#grandparent5")
.addEventListener('click', () => {
    console.log('Grandparent Clicked')
},false); 

document.querySelector("#parent5")
.addEventListener('click', (e) => {
    console.log('Parent Clicked')    
},false); 


document.querySelector("#child5")
.addEventListener('click', (e) => {
    console.log('Child Clicked')
    e.stopPropagation();
},false); 

// Stop propogation on grandparent

document.querySelector("#grandparent6")
.addEventListener('click', (e) => {
    console.log('Grandparent Clicked');
    e.stopPropagation();
},true); // event capture

document.querySelector("#parent6")
.addEventListener('click', (e) => {
    console.log('Parent Clicked')    
},true);  // event capture


document.querySelector("#child6")
.addEventListener('click', (e) => {
    console.log('Child Clicked')    
},true); // event capture