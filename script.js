// FILTER FEATURE

function filterImages(category){

    let images =document.getElementsByClassName("image");

    for(let i = 0; i < images.length; i++){

        if(category === "all"){

            images[i].style.display = "block";
        }

        else if(
            images[i].classList.contains(category)
        ){

            images[i].style.display = "block";
        }

        else{

            images[i].style.display = "none";
        }
    }
}

// MODAL FEATURE

const galleryImages =
document.querySelectorAll(".gallery img");

const modal =
document.getElementById("modal");

const modalImg =
document.getElementById("modalImg");

const closeBtn =
document.querySelector(".close");

// OPEN MODAL

galleryImages.forEach(function(img){

    img.addEventListener("click",function(){

        modal.style.display = "flex";

        modalImg.src = this.src;
    });

});

// CLOSE MODAL

closeBtn.addEventListener("click",function(){

    modal.style.display = "none";

});

// CLOSE WHEN CLICK OUTSIDE IMAGE

modal.addEventListener("click",function(e){

    if(e.target !== modalImg){

        modal.style.display = "none";
    }

});