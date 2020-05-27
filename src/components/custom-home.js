import page from 'page'
import HyperHTMLElement from 'hyperhtml-element'

class CustomHome extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'exit']
  }

  created() {
    this.entry = 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'vh-100 flex flex-column justify-between animated ' + this.entry

    this.render()
  }

  render() {
    const header = `flex flex-wrap justify-between items-center bg-black-60`
    const titleContainer = `flex items-center`
    const image = `h3 h4-l`

    const h1 = `w-100 f3 f1-l fw5 fw4-ns athelas light-gray`
    const TITLE = `Public Sector Services`

    const nav = `ml3 flex justify-around w-100-s`
    const font = `f4-l tc ttc athelas light-green hover-black-60`
    const bg = `bg-animate hover-bg-gold`
    const padding = `pv2 pv3-m pv4-l ph3 ph5-l`
    const navSpan = `pointer ${padding} ${bg} ${font}`

    return this.html`
      <header class=${header}>
        <div class=${titleContainer}>
          <img class=${image} src="pss_logo_hires.png" alt="goldenrod circular brush stroke"/>
          <a href="/" class="link">
            <h1 class=${h1}>${TITLE}</h1>
          </a>
        </div>
        
        <nav class=${nav} onclick="${this}">
          <span class=${navSpan} data-href="/about">about</span>
          <span class=${navSpan} data-href="/services">services</span>
          <span class=${navSpan} data-href="/contact">contact</span>
          <span class=${navSpan} data-href="/bio">bio</span>
        </nav>
        <div class="dn db-ns"></div>
      </header>
      
      <main id="main-area" class="pa2 overflow-auto"/>`
  }

  onclick(e) {
    if (e.target.nodeName !== 'SPAN') return e

    // component styles
    const active = ['bg-gold']
    const inactive = ['light-green']

    const navLink = e.target
    const siblings = navLink.parentElement.children

    for (let el of siblings) {
      el.classList.remove(...active)
      el.classList.add(...inactive)
    }

    navLink.classList.add(...active)
    navLink.classList.remove(...inactive)

    // navigation
    page(navLink.dataset.href)
  }
}

CustomHome.define('custom-home')
