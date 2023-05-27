// cmd l and cmd o

/**
 * Create an arrow function that will be called when an image is selected.
 */
const uploadImage = (event) => {
    /**
     * Get the selected files.
     */
    const imageFiles = event.target.files;
    const fileName = imageFiles[0].name;
    document.getElementById('uploadButtonTextId').innerText = fileName;
    document.getElementById('removeButtonId').style.display = 'block';
    document.getElementById('uploadButtonDivId').style.width= '90%';
    /**
     * Count the number of files selected.
     */
    const imageFilesLength = imageFiles.length;
    /**
     * If at least one image is selected, then proceed to display the preview.
     */
    if (imageFilesLength > 0) {
        /**
         * Get the image path.
         */
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        /**
         * Select the image preview element.
         */
        const imagePreviewElement = document.querySelector("#uploadImageId");
        /**
         * Assign the path to the image preview element.
         */
        imagePreviewElement.src = imageSrc;
        /**
         * Show the element by changing the display value to "block".
         */
        imagePreviewElement.style.display = "block";
    }
};

const changeImageColor = (color) => {
    const executeChange = () => {
        document.getElementById('previewLoaderId').style.display='none';
        document.getElementById('umbrellaImageId').style.display='block';
        document.getElementById('previewLoaderButtonId').style.display='none';
        document.getElementById('uploadImageButtonId').style.display='block';
        if (color === 'yellow') {
            document.body.style.backgroundColor = "rgb(255, 254, 230)"; 
            document.getElementById('uploadButtonDivId').style.backgroundColor= 'yellowgreen';
            document.getElementById('removeButtonId').style.backgroundColor = 'yellowgreen';
            document.getElementById('umbrellaImageId').src='Yellowumbrella.png'
        } else if (color === 'pink') {
            document.body.style.backgroundColor = "rgb(255, 230, 255)"; 
            document.getElementById('uploadButtonDivId').style.backgroundColor= color;
            document.getElementById('removeButtonId').style.backgroundColor = color;
            document.getElementById('umbrellaImageId').src='Pinkumbrella.png'
        } else {
            document.body.style.backgroundColor = "rgb(252, 230, 255)"; 
            document.getElementById('uploadButtonDivId').style.backgroundColor= 'lightskyblue';
            document.getElementById('removeButtonId').style.backgroundColor = 'lightskyblue';
            document.getElementById('umbrellaImageId').src='Blueumbrella.png'
        }
    }

    document.getElementById('umbrellaImageId').style.display='none';
    document.getElementById('uploadImageButtonId').style.display='none';
    document.getElementById('previewLoaderButtonId').style.display='block';
    document.getElementById('previewLoaderId').style.display='block';
    document.getElementById('previewLoaderId').style.color=color;

    const myTimeout = setTimeout(executeChange, 1000);    
};

const removeUploadImage = (event) => {
    document.getElementById('uploadButtonTextId').innerText = 'Upload Image';
    document.getElementById('removeButtonId').style.display = 'none';
    document.getElementById('uploadButtonDivId').style.width= '100%';
}