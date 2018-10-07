import page from 'page'
import HyperHTMLElement from 'hyperhtml-element'

class CustomHome extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'exit']
  }

  created() {
    this.entry = 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'db pa2 animated ' + this.entry

    this.render()
  }

  render() {
    const navClass = "pointer w-50 w-25-ns f5 f4-ns pv3 bg-animate bg-mid-gray hover-bg-gold light-green hover-mid-gray"
    return this.html`
      <h1 class="f3 f2-m f1-l fw5 fw4-ns mt0 mb2 ml2 ml3-ns avenir">Public Sector Services</h1>
      <nav class="ml3-ns mw8 br2 flex flex-wrap tc ttu f4 tracked athelas" onclick="${this}">
        <span class=${navClass} data-href="/about">about</span>
        <span class=${navClass} data-href="/services">services</span>
        <span class=${navClass} data-href="/contact">contact</span>
        <span class=${navClass} data-href="/bio">bio</span>
      </nav>
      <main id="main-area"/>`
  }

  onclick(e) {
    if (e.target.nodeName !== 'SPAN') return e
    // component styles
    const navLink = e.target
    const siblings = Array.from(navLink.parentElement.children)
    siblings.forEach(el => {
      el.classList.remove('bg-gold', 'mid-gray')
      el.classList.add('bg-mid-gray', 'light-green')
    })
    navLink.classList.add('bg-gold', 'mid-gray')
    navLink.classList.remove('bg-mid-gray', 'light-green')

    // navigation
    page(navLink.dataset.href)
  }
}

CustomHome.define('custom-home')
