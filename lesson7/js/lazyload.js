// get all images with data src attribute 
const images = document.querySelectorAll("img[data-src]");


function preloadImage(img) {
    cosnt src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}
// peramiters set for IntersectingObserver to text loading 
const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px -500px 0px"
};

//check if intersecting observer is supported 
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imageOptions);

images.forEach(image => {
    imgObserver.observe(image);
})