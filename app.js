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
    // Changing 'Upload Image' text to fileName
    document.getElementById('uploadButtonTextId').innerText = fileName;
    // Displaying Close Btn
    document.getElementById('removeButtonId').style.display = 'block';
    // Changing upload btn width to 90%
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
        // Hidding loader image
        document.getElementById('previewLoaderId').style.display='none';
        // Displaying umbrella image
        document.getElementById('umbrellaImageId').style.display='block';
        // Hidding loader image in upload btn
        document.getElementById('previewLoaderButtonId').style.display='none';
        // Displaying uplaod image in upload btn
        document.getElementById('uploadImageButtonId').style.display='block';
        if (color === 'yellow') {
            // Changing Backgrounf color
            document.body.style.backgroundColor = "rgb(255, 254, 230)"; 
            // Changing Uplaod btn color
            document.getElementById('uploadButtonDivId').style.backgroundColor= 'yellowgreen';
            // Changing Close btn color
            document.getElementById('removeButtonId').style.backgroundColor = 'yellowgreen';
            // Changing umbrella image
            document.getElementById('umbrellaImageId').src='Yellowumbrella.png'
        } else if (color === 'pink') {
            // Changing Backgrounf color
            document.body.style.backgroundColor = "rgb(255, 230, 255)"; 
            // Changing Uplaod btn color
            document.getElementById('uploadButtonDivId').style.backgroundColor= color;
            // Changing Close btn color
            document.getElementById('removeButtonId').style.backgroundColor = color;
            // Changing umbrella image
            document.getElementById('umbrellaImageId').src='Pinkumbrella.png'
        } else {
            // Changing Backgrounf color
            document.body.style.backgroundColor = "rgb(252, 230, 255)"; 
            // Changing Uplaod btn color
            document.getElementById('uploadButtonDivId').style.backgroundColor= 'lightskyblue';
            // Changing Close btn color
            document.getElementById('removeButtonId').style.backgroundColor = 'lightskyblue';
            // Changing umbrella image
            document.getElementById('umbrellaImageId').src='Blueumbrella.png'
        }
    }

    // Hidding Umbrella Image
    document.getElementById('umbrellaImageId').style.display='none';
    // Hidding Uplaod Image
    document.getElementById('uploadImageButtonId').style.display='none';
    // Dislplaying loader image of upload btn
    document.getElementById('previewLoaderButtonId').style.display='block';
    // Dislplaying loader image
    document.getElementById('previewLoaderId').style.display='block';
    // Changing color of loader image
    document.getElementById('previewLoaderId').style.color=color;

    // # seconds timoeout, so we can see loader image
    const myTimeout = setTimeout(executeChange, 3000);    
};

const removeUploadImage = () => {
    // Changing upload file text to 'Upload Image'
    document.getElementById('uploadButtonTextId').innerText = 'Upload Image';
    // Hidding close btn
    document.getElementById('removeButtonId').style.display = 'none';
    // Changing width of upload btn to 100%
    document.getElementById('uploadButtonDivId').style.width= '100%';
}