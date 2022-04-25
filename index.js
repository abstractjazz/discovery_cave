console.log('I am in index.js')

const enterButton = document.getElementById('enter-button');
const introWrapper=document.getElementById('intro-wrapper');
const folderContainer=document.getElementById('folder-container');
const subjectFolders=document.querySelectorAll('div#folder-container .folder')
const folderArray=Array.from(subjectFolders)
const homeButton=document.getElementById('home-button')

const reload= ()=>{
location.reload();
return false;
}

homeButton.onclick=reload;

const showFolders = () => {
    introWrapper.remove();
    folderContainer.style.display="flex";
    folderContainer.style.justifyContent="center";
    folderContainer.style.alignItems="center";
    createHeadline("Choose an Activity");
    mathGameH1();
    artGameH1();
    readingGameH1();
}

const createHeadline = (headlineText,id) => {
    const headlineDiv = document.createElement('div')
    const headline = document.createElement('h1')
    headline.id="headline"
    headline.innerText=headlineText
    headlineDiv.appendChild(headline)
    folderContainer.appendChild(headlineDiv)
}

//functions to create subject content after folder click
const mathGameH1 = () => {
   const mathFolder=document.getElementById('math')
   mathFolder.addEventListener('click', function(){
       mathListener();
       createHeadline('Drag the dots to the correct number')
    })
}

const artGameH1 = () => { 
    const artFolder=document.getElementById('art')
    artFolder.addEventListener('click', function(){
        artListener();
        createHeadline('Match the shapes')
    })
}

const readingGameH1 = () => {
    const readingFolder=document.getElementById('reading')
    readingFolder.addEventListener('click', function(){
        readingListener();
        createHeadline('Match the uppercase and lowercase letters')
    })
}

const createFolders = () => {
    folderArray.map(folder => folder.remove())
    const activityFolder1 = document.createElement("div")
    const activityFolder2 = document.createElement("div")
    const activityFolder3 = document.createElement("div")
    activityFolder1.className='folder'
    activityFolder1.id='folder-1'
    activityFolder2.className='folder'
    activityFolder2.id='folder-2'
    activityFolder3.className='folder'
    activityFolder3.id='folder-3'
    folderContainer.appendChild(activityFolder1)
    folderContainer.appendChild(activityFolder2)
    folderContainer.appendChild(activityFolder3)
    const headline=document.getElementById('headline')
    headline.remove();
}

const mathListener=()=> {

    const activityFolder1=document.getElementById('folder-1')
    const activityFolder2=document.getElementById('folder-2')
    const activityFolder3=document.getElementById('folder-3')
   
    activityFolder1.innerText="3"
    activityFolder2.innerText="7"
    activityFolder3.innerText="4"
  
    const dotsDiv=document.createElement('div')
    dotsDiv.id="dots-div"

    folderContainer.ondragover=function(e) {
        e.preventDefault();
    }

    folderContainer.ondrop=function(e) {
        e.preventDefault();    
        dotsDiv.style.borderColor="red"

    }
    
    const threeDots = document.createElement('img')
    threeDots.id="three-dots"
    const fourDots = document.createElement('img')
    fourDots.id="four-dots"
    const sevenDots = document.createElement('img')
    sevenDots.id="seven-dots"

    threeDots.src="./assets/threedots.jpg"
    fourDots.src="./assets/fourdots.png"
    sevenDots.src="./assets/sevendots.jpg"
  
    dotsDiv.appendChild(threeDots)
    dotsDiv.appendChild(fourDots)
    dotsDiv.appendChild(sevenDots)
  
    const body = document.querySelector('body')
    document.body.appendChild(dotsDiv)

    const imageCollection=Array.from(document.querySelectorAll('#dots-div img'))


    imageCollection.map(function(image){
        image.draggable=true;
    })
}

const artListener=()=> {
    const activityFolder1=document.getElementById('folder-1')
    const activityFolder2=document.getElementById('folder-2')
    const activityFolder3=document.getElementById('folder-3')
    
    const dottedCircle = document.createElement('img')
    const dottedTriangle = document.createElement('img')
    const dottedSquare = document.createElement('img')
    
    dottedCircle.src="./assets/dottedCircle.png"
    dottedTriangle.src="./assets/dottedTriangle.png"
    dottedSquare.src="./assets/dottedSquare.png"

    activityFolder1.appendChild(dottedCircle);
    activityFolder2.appendChild(dottedTriangle);
    activityFolder3.appendChild(dottedSquare);

    const solidCircle = document.createElement('img')
    const solidTriangle = document.createElement('img')
    const solidSquare = document.createElement('img')
   
    const solidShapesDiv=document.createElement('div')
    solidShapesDiv.id="solid-shapes-div"
    
    solidCircle.src="./assets/solidCircle.png"
    solidTriangle.src="./assets/solidTriangle.png"
    solidSquare.src="./assets/solidSquare.png"
    
    solidShapesDiv.appendChild(solidCircle)
    solidShapesDiv.appendChild(solidTriangle)
    solidShapesDiv.appendChild(solidSquare)
   
    const body = document.querySelector('body')
    console.log(body)
    document.body.appendChild(solidShapesDiv)
}

const readingListener=()=> {
    const activityFolder1=document.getElementById('folder-1')
    const activityFolder2=document.getElementById('folder-2')
    const activityFolder3=document.getElementById('folder-3')
    
    const upperCaseA = document.createElement('img')
    const upperCaseQ = document.createElement('img')
    const upperCaseR = document.createElement('img')
    
    upperCaseA.src="./assets/upperCaseA.png"
    upperCaseQ.src="./assets/upperCaseQ.png"
    upperCaseQ.style.height = '100%'
    upperCaseR.src="./assets/upperCaseR.png"

    activityFolder1.appendChild(upperCaseA);
    activityFolder2.appendChild(upperCaseQ);
    activityFolder3.appendChild(upperCaseR);

    const lowerCaseA = document.createElement('img')
    const lowerCaseQ = document.createElement('img')
    const lowerCaseR = document.createElement('img')
   
    const lowerCaseDiv=document.createElement('div')
    lowerCaseDiv.id="lower-case-div"
    
    lowerCaseA.src="./assets/lowerCaseA.png"
    lowerCaseQ.src="./assets/lowerCaseQ.png"
    lowerCaseR.src="./assets/lowerCaseR.png"
    
    lowerCaseDiv.appendChild(lowerCaseA)
    lowerCaseDiv.appendChild(lowerCaseQ)
    lowerCaseDiv.appendChild(lowerCaseR)
   
    const body = document.querySelector('body')
    console.log(body)
    document.body.appendChild(lowerCaseDiv)
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev, div) {

  }
  
  function drop(ev, div) {
    
  }



enterButton.addEventListener('click', showFolders);
folderArray.map(folder=>folder.addEventListener('click',createFolders))
