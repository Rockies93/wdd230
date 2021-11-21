//Calls datasrc 
let imagesToLoad = document.querySelectorAll('img[data-src]');

//switch src and datasrc and remove datasrc
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//load new src
imagesToLoad.forEach((img) => {
    loadImages(img);
});

//lazy load
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} 
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

  