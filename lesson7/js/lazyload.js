// get all images with data src attribute 
const images = document.querySelectorAll("img[data-src]");

// peramiters set for IntersectingObserver to text loading 
const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
}; 

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => (image.removeAttribute("data-src"));
}

//Check if the Intersecting Observer is supported 

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imgobserver.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
  } else {
      imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

