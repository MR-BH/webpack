/**
 * Created by shenghua on 2017/1/13.
 */
//CommonJS风格
// function generateText() {
//     var element = document.createElement('h2');
//     element.innerHTML = "Hello h2 world";
//     return element;
// }
//
// module.exports = generateText;

export default function () {
    var element = document.createElement('h2')
    element.innerHTML = "Hello h2 workd hahaha"
    return element
}