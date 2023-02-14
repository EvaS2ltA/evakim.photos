//In the block of code below I store fullsized images and resized images in constants using getElementById method.

const fullSizedImageEl1 = document.getElementById("FlszImg1")
const fullSizedImageEl2 = document.getElementById("FlszImg2")
const fullSizedImageEl3 = document.getElementById("FlszImg3")
const fullSizedImageEl4 = document.getElementById("FlszImg4")
const fullSizedImageEl5 = document.getElementById("FlszImg5")
const fullSizedImageEl6 = document.getElementById("FlszImg6")
const fullSizedImageEl7 = document.getElementById("FlszImg7")
const fullSizedImageEl8 = document.getElementById("FlszImg8")
const fullSizedImageEl9 = document.getElementById("FlszImg9")
const fullSizedImageEl10 = document.getElementById("FlszImg10")
const fullSizedImageEl11 = document.getElementById("FlszImg11")
const fullSizedImageEl12 = document.getElementById("FlszImg12")
const fullSizedImageEl13 = document.getElementById("FlszImg13")
const fullSizedImageEl14 = document.getElementById("FlszImg14")
const fullSizedImageEl15 = document.getElementById("FlszImg15")
const fullSizedImageEl16 = document.getElementById("FlszImg16")
const fullSizedImageEl17 = document.getElementById("FlszImg17")
const fullSizedImageEl18 = document.getElementById("FlszImg18")
const fullSizedImageEl19 = document.getElementById("FlszImg19")
const fullSizedImageEl20 = document.getElementById("FlszImg20")

const resizedImageEl1 = document.getElementById("RszdImg1")
const resizedImageEl2 = document.getElementById("RszdImg2")
const resizedImageEl3 = document.getElementById("RszdImg3")
const resizedImageEl4 = document.getElementById("RszdImg4")
const resizedImageEl5 = document.getElementById("RszdImg5")
const resizedImageEl6 = document.getElementById("RszdImg6")
const resizedImageEl7 = document.getElementById("RszdImg7")
const resizedImageEl8 = document.getElementById("RszdImg8")
const resizedImageEl9 = document.getElementById("RszdImg9")
const resizedImageEl10 = document.getElementById("RszdImg10")
const resizedImageEl11 = document.getElementById("RszdImg11")
const resizedImageEl12 = document.getElementById("RszdImg12")
const resizedImageEl13 = document.getElementById("RszdImg13")
const resizedImageEl14 = document.getElementById("RszdImg14")
const resizedImageEl15 = document.getElementById("RszdImg15")
const resizedImageEl16 = document.getElementById("RszdImg16")
const resizedImageEl17 = document.getElementById("RszdImg17")
const resizedImageEl18 = document.getElementById("RszdImg18")
const resizedImageEl19 = document.getElementById("RszdImg19")
const resizedImageEl20 = document.getElementById("RszdImg20")

const fullSizedScreenEl = document.getElementById("FullSizeImageScreen")
const clickedImage = document.getElementById("FullSizeImage")

function checkId(imageId) //This function checks what resized image was clicked and returns the sourse of a corresponding fullsized image. The sourse of the corresponding fullsized image will be stored in the variable called clickedImageSource.
{
    var clickedImageSource = ""
    if (imageId=="RszdImg1")
    {
        clickedImageSource=fullSizedImageEl1.src
    }

    if (imageId=="RszdImg2")
    {
        clickedImageSource=fullSizedImageEl2.src
    }

    if (imageId=="RszdImg3")
    {
        clickedImageSource=fullSizedImageEl3.src
    }

    if (imageId=="RszdImg4")
    {
        clickedImageSource=fullSizedImageEl4.src
    }

    if (imageId=="RszdImg5")
    {
        clickedImageSource=fullSizedImageEl5.src
    }

    if (imageId=="RszdImg6")
    {
        clickedImageSource=fullSizedImageEl6.src
    }

    if (imageId=="RszdImg7")
    {
        clickedImageSource=fullSizedImageEl7.src
    }

    if (imageId=="RszdImg8")
    {
        clickedImageSource=fullSizedImageEl8.src
    }

    if (imageId=="RszdImg9")
    {
        clickedImageSource=fullSizedImageEl9.src
    }

    if (imageId=="RszdImg10")
    {
        clickedImageSource=fullSizedImageEl10.src
    }

    if (imageId=="RszdImg11")
    {
        clickedImageSource=fullSizedImageEl11.src
    }

    if (imageId=="RszdImg12")
    {
        clickedImageSource=fullSizedImageEl12.src
    }

    if (imageId=="RszdImg13")
    {
        clickedImageSource=fullSizedImageEl13.src
    }

    if (imageId=="RszdImg14")
    {
        clickedImageSource=fullSizedImageEl14.src
    }

    if (imageId=="RszdImg15")
    {
        clickedImageSource=fullSizedImageEl15.src
    }

    if (imageId=="RszdImg16")
    {
        clickedImageSource=fullSizedImageEl16.src
    }

    if (imageId=="RszdImg17")
    {
        clickedImageSource=fullSizedImageEl17.src
    }

    if (imageId=="RszdImg18")
    {
        clickedImageSource=fullSizedImageEl18.src
    }

    if (imageId=="RszdImg19")
    {
        clickedImageSource=fullSizedImageEl19.src
    }

    if (imageId=="RszdImg20")
    {
        clickedImageSource=fullSizedImageEl20.src
    }

    return clickedImageSource
}

function openFullSizeImage(imageId) //This function opens a fullsized image by changing its display propery to flex.
{
    fullSizedScreenEl.style.display="flex"
    clickedImage.src=checkId(imageId)
}

function closeFullSizeImage() //This function closes a fullsized image screen.
{
    fullSizedScreenEl.style.display="none"
}