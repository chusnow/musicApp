export function addClass(el, className) {
  // console.log(el.className)
  if (hesClass(el, className)) {
    return
  }
  let newClass = el
    .className
    .split(' ')
  // console.log(newClass)
  newClass.push(className);
  el.className = newClass.join(' ')
}

export function hesClass(el, className) {
  let reg = RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const repix = 'data-'
  name = repix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
