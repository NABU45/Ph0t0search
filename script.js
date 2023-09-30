const accessKey="WLxMlbZZ6hVmKNfR-63OEJyZnGJcUOUT28tgI_Jin-4";

const formEl= document.querySelector("form");
const inputEl=document.querySelector("search-inpu");
const searchResults=document.querySelector("search-results");
const showMore= document.querySelector("show-more-button");

let inputData ="";
let page=1;

async function searchImages(){
    inputData= inputEl.ariaValueMax;
    const url =`https://api.unsplash.com/photos?page=${page}&query=${inputData}&client_id=${accessKey})`;

    const response=await fetch(url);
    const data=await response.json();

    const results= data.results;

    if(page== 1){
        searchResults.innerHTM = "";
    }
    results.map((result) =>{
        const imageWrapper= document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image= document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink= document.createElement('a');
        imageLink.href=result.link.html;
        imageLink.target ="_blank";
        imageLink.textContent=result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
        
    });

    page++;
    if(page>1){
        showMore.style.display='block';
    }
}


formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click",(event)=>{
    searchImages();
});