
export async function getPhotos() {
   const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => {
            let photosContainer = document.querySelector(".photosContainer");
            for (let i = 0; i < 1 && i < json.length; i++) {
                let image = document.createElement('img');
                image.setAttribute('src', json[1].thumbnailUrl);
                photosContainer.append(image);
            }
        });
}

export async function addImage() {
     getPhotos();
}

document.getElementById('addButton').addEventListener('click', addImage);