
let liElementsLeft = document.querySelectorAll('li:nth-of-type(odd)');
let liElementsRight = document.querySelectorAll('li:nth-of-type(even)');
function articleInViewport(element) {
var rect = element.getBoundingClientRect();
  return (
        rect.top < 600
    );
}
document.addEventListener('scroll', function () {
    liElementsLeft.forEach(li => {
    if (articleInViewport(li)) {
            li.classList.add('articlemoveleft');
        }
  })
  liElementsRight.forEach(li => {
    if (articleInViewport(li)) {
            li.classList.add('articlemoveright');
        }
  })
});