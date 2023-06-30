// content.js
const elements = document.querySelectorAll('*');
const elementImage = document.querySelectorAll('img');
console.log("chek element", elementImage)

elements.forEach((element) => {
  element.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const replacedText = text.replace(/JavaScript/gi, 'AAAAA');
 
      if (replacedText !== text) {
        node.textContent = replacedText;
      }
    }
  });
});

console.log("demo99999999999 from basic extension")