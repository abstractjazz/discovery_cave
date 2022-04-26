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
  
    const numberFolderArray=Array.from(folderContainer.querySelectorAll('.folder'))
    console.log(numberFolderArray)

    const dotsDiv=document.createElement('div')
    dotsDiv.id="dots-div"

    numberFolderArray.map(function(folder){
      
        folder.ondragover=function(e) {
            e.preventDefault();
        }
    
        folder.ondrop=function(e) {
            e.preventDefault();    
            // dotsDiv.style.borderColor="red" 
            console.log(e.target.innerText)
            var num = e.dataTransfer.getData('text')
            if (num == e.target.innerText) {
               folder.style.border="green 5px solid";
               setTimeout(function(){folder.remove()}, 1000)
               folderCheck();
            } else {
                folder.style.border="red 5px solid"
                const tryAgain=document.createElement('h1')
                tryAgain.innerText="try again!"
                folder.appendChild(tryAgain)
                setTimeout(function(){
                    tryAgain.remove()
                    folder.style.border="black 1px solid"
                }, 1500)
                
            }
          
        }

    })

    const folderCheck = () => {
        const numFolders=document.querySelectorAll('div#folder-container .folder')
        console.log(numFolders)
        if (numFolders.length == 1) {
            const h1 = document.querySelector('h1')
            h1.remove();
            const goodJob = document.createElement('h1')
            goodJob.innerText = "Good Job! Click the 'home' button to play another game."
            setTimeout(function(){folderContainer.appendChild(goodJob)}, 1000)
        }
    }


//USE DATATRANSFER.SET DATA AND GET DATA TO STORE AND RETRIEVE VALUE OF ID; THEN USE FOR CONDITIONAL

    const threeDots = document.createElement('img')
    threeDots.id="three-dots"
    threeDots.className="3"
    const fourDots = document.createElement('img')
    fourDots.id="four-dots"
    fourDots.className="4"
    const sevenDots = document.createElement('img')
    sevenDots.className="7"
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
        image.ondragstart=function(e){
            e.dataTransfer.setData('text', e.target.className)
            // console.log(e.target.className)
        }

        // dragevent.dataTransfer.setData("text", dragevent.target.id);
    })
}

const artListener=()=> {
    const activityFolder1=document.getElementById('folder-1')
    const activityFolder2=document.getElementById('folder-2')
    const activityFolder3=document.getElementById('folder-3')
    
    const dottedCircle = document.createElement('img')
    dottedCircle.className="circle"
    const dottedTriangle = document.createElement('img')
    dottedTriangle.className="triangle"
    const dottedSquare = document.createElement('img')
    dottedSquare.className="square"
    
    dottedCircle.src="./assets/dottedCircle.png"
    dottedTriangle.src="./assets/dottedTriangle.png"
    dottedSquare.src="./assets/dottedSquare.png"

    const numberFolderArray=Array.from(folderContainer.querySelectorAll('.folder'))
    console.log(numberFolderArray)

    activityFolder2.appendChild(dottedTriangle);
    activityFolder3.appendChild(dottedSquare);
    activityFolder1.appendChild(dottedCircle);
   

    const solidCircle = document.createElement('img')
    solidCircle.className="circle"
    const solidTriangle = document.createElement('img')
    solidTriangle.className="triangle"
    const solidSquare = document.createElement('img')
    solidSquare.className="square"
   
    const solidShapesDiv=document.createElement('div')
    solidShapesDiv.id="solid-shapes-div"

    numberFolderArray.map(function(folder){
      
        folder.ondragover=function(e) {
            e.preventDefault();
        }
    
        folder.ondrop=function(e) {
            e.preventDefault();    
            // dotsDiv.style.borderColor="red" 
            console.log(e.target.innerText)
            var shape = e.dataTransfer.getData('text')
            if (shape == e.target.className) {
               folder.style.border="green 5px solid";
               setTimeout(function(){folder.remove()}, 1000)
               folderCheck();
            } else {
                folder.style.border="red 5px solid"
                const tryAgain=document.createElement('h1')
                tryAgain.innerText="try again!"
                folder.appendChild(tryAgain)
                setTimeout(function(){
                    tryAgain.remove()
                    folder.style.border="black 1px solid"
                }, 1500)
                
            }
          
        }

    })

    const folderCheck = () => {
        const numFolders=document.querySelectorAll('div#folder-container .folder')
        console.log(numFolders)
        if (numFolders.length == 1) {
            const h1 = document.querySelector('h1')
            h1.remove();
            const goodJob = document.createElement('h1')
            goodJob.innerText = "Good Job! Click the 'home' button to play another game."
            setTimeout(function(){folderContainer.appendChild(goodJob)}, 1000)
        }
    }

    
    solidCircle.src="./assets/solidCircle.png"
    solidTriangle.src="./assets/solidTriangle.png"
    solidSquare.src="./assets/solidSquare.png"
    
    solidShapesDiv.appendChild(solidCircle)
    solidShapesDiv.appendChild(solidSquare)
    solidShapesDiv.appendChild(solidTriangle)
   
    const body = document.querySelector('body')
    console.log(body)
    document.body.appendChild(solidShapesDiv)


    const imageCollection=Array.from(document.querySelectorAll('#solid-shapes-div img'))

    console.log(imageCollection)
    imageCollection.map(function(image){
        image.draggable=true;
        image.ondragstart=function(e){
            e.dataTransfer.setData('text', e.target.className)
            console.log(e.target.className)
        }

        // dragevent.dataTransfer.setData("text", dragevent.target.id);
    })

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
