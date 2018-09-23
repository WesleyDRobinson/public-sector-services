import page from 'page'
import HyperHTMLElement from 'hyperhtml-element'

class CustomHome extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'exit']
  }

  created() {
    this.entry = 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'db animated ' + this.entry

    this.render()
  }

  render() {
    const navClass = "pv3 ph4 bg-animate bg-dark-green hover-bg-light-green light-green hover-orange"
    return this.html`
      <div>
        <h1 class="f2 ml2 ml3-ns avenir">Public Sector Services</h1>
        <nav class="ph2 ph3-ns flex flex-wrap tc ttu f4 tracked athelas" onclick="${this}">
          <div style="width:190px;" class=${navClass} data-href="/about">about</div>
          <div style="width:190px;" class=${navClass} data-href="/services">services</div>
          <div style="width:190px;" class=${navClass} data-href="/contact">contact</div>
          <div style="width:190px;" class=${navClass} data-href="/bio">bio</div>
        </nav>
      </div>
      <main id="main-area"/>`
  }

  onclick(e) {
    if (e.target.nodeName !== 'DIV') return e
    // component styles
    const navLink = e.target
    const siblings = Array.from(navLink.parentElement.children)
    siblings.forEach(el => {
      el.classList.remove('bg-orange', 'dark-green')
      el.classList.add('bg-dark-green', 'light-green')
    })
    navLink.classList.add('bg-orange', 'dark-green')
    navLink.classList.remove('bg-dark-green', 'light-green')

    // navigation
    page(navLink.dataset.href)
  }
}

CustomHome.define('custom-home')
