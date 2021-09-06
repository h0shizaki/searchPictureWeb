function addImageElement(keyword,index){
    const imageElement = document.createElement('img');
    imageElement.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

    const galleryElement = document.querySelector('.gallery');
    galleryElement.appendChild(imageElement);
}

function searchPhotos(e){
    keyword = e.target.value ;
    
    if(e.key === 'Enter' && keyword){
        clearPhotos();
        clearInput()

        for(let i = 1 ; i<=9;i++){
            addImageElement(keyword,i);
        }
    }
}

function clearPhotos(){
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '' ;
}
function clearInput(){
    const inputElement = document.querySelector('.text-input');
    inputElement.value = '' ;
}

function run(){

    const inputElement = document.querySelector('.text-input');
    inputElement.addEventListener('keydown', searchPhotos);

}
run()