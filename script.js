function swap()
{
    img1=document.getElementById("img_1").src;
    img2=document.getElementById("img_2").src;
    document.getElementById("img_1").src=img2;
    document.getElementById("img_2").src=img1;
}