/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 * global window, document
**/

const scrollTo = (id) => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 20)
  return false
}

export const onRouteUpdate = (window) => {
  if (window.location && window.location.hash) {
    setTimeout(scrollTo(window.location.hash).bind(this), 10)
  }
}