const pdf = new jsPDF();

const input = document.querySelector('#input-image');
const convert = document.querySelector('#convert');
const download = document.querySelector('#download');

const section = document.querySelector('#image-container');
const imageWidth = '300px';
const imageHeight = '300px';
const imageMargin = '10px';
const imageBorderRadius = '5px';

let width = pdf.internal.pageSize.getWidth();
let height = pdf.internal.pageSize.getHeight();;
let numberOfFiles;

//input event listener
input.addEventListener('input', (e) => {
    numberOfFiles = e.target.files.length; //get the number of files selected

    //loop throught the     selected files
    for (let i = 0; i < numberOfFiles; i++) {
        //create a new image element and set its properties
        let image = new Image();
        image.style.width = imageWidth; //set width
        image.style.height = imageHeight; //set height
        image.style.margin = imageMargin; //set margin
        image.style.borderRadius = imageBorderRadius;
        image.src = URL.createObjectURL(e.target.files[i]); //set source of the image file
        section.appendChild(image); //append each image to the image container

        pdf.addImage(image, 10, 10, width / 2, height / 2);
        pdf.addPage();
    }
});

download.addEventListener('click', () => {
    pdf.save("ImageToPDF.pdf");
});