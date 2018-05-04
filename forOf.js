// for...of only hold on array and string
let articleParagraphs = document.querySelectorAll('article');
for (let paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}