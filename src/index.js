console.log('%c HI', 'color: firebrick');
//      -------------- first------------- //
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
function fetchimg() {
return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => showImg(json));
}
function showImg(json)
{
    let listImg=document.getElementById('dog-image-container');
    
    for(let i=0;i<json.message.length;i++)
    {
      let img=document.createElement('img');
      img.src=json.message[i];
      listImg.appendChild(img);
    }
}


//     ------------- second ^ Fourth-----------     //
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function fetchBre() {
return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => showBre(json));
}
   
function showBre(json)
{
    let listBre = document.getElementById('dog-breeds'); 
    //let sel=document.getElementById('breed-dropdown');
    listBre.innerHTML="";
    let numLi=0; //set different id for each li
    for(let element in json.message)
    {
      if(element[0] == document.getElementById("breed-dropdown").value)
      {
      let bre=document.createElement('li');
      bre.setAttribute("id",`color${numLi}`);
      numLi++;
      bre.addEventListener('click',function(){
      bre.style.color="red";
      });
      bre.innerHTML=element;
      listBre.appendChild(bre);
      }
    }
}

// for(let j=0;j<listBre.childElementCount;j++){
//   let btn=document.get
//   document.addEventListener('click', function() {
  
// });
// }

document.addEventListener('DOMContentLoaded', function() {
   fetchimg();
  fetchBre();
});


// let letters=['a','b','c','d','e','f','j','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
     //  let selected=0;
//     {
//   var x = ;
//   document.getElementById("demo").innerHTML = "You selected: " + x;
// }
//     sel.addEventListener("",function ()
//     {
//     for(let j=0;j<26;j++)
//     {
//       if(sel.options[j].selected)
//       {
//         selected=letters[j];
//         return letters[j];
//       }
//     }
//     });





