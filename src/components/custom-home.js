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
    const navClass = "pv3 ph4 bg-animate bg-mid-gray hover-bg-gold light-green hover-mid-gray"
    return this.html`
      <div>
        <h1 class="f1 fw4 ml2 ml3-ns avenir">Public Sector Services</h1>
        <nav class="ph2 ph3-ns flex flex-wrap tc ttu f4 tracked athelas" onclick="${this}">
          <div style="width:190px;" class=${navClass + ' br2 br--left'} data-href="/about">about</div>
          <div style="width:190px;" class=${navClass} data-href="/services">services</div>
          <div style="width:190px;" class=${navClass} data-href="/contact">contact</div>
          <div style="width:190px;" class=${navClass + ' br2 br--right'} data-href="/bio">bio</div>
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
