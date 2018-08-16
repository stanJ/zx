function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
//为指定的dom元素添加样式
function addClass(ele, cls) {
  if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}
//删除指定dom元素的样式
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
      var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");//正则表达式，需要补血
      ele.className = ele.className.replace(reg, " ");
  }
} 
var plane = document.querySelector('.plane');
setTimeout(function () {
  removeClass(plane, 'plane-start');
  addClass(plane, 'plane-end');
}, 1000)