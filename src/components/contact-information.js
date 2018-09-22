import HyperHTMLElement from 'hyperhtml-element'

class ContactInformation extends HyperHTMLElement {
  static
  get observedAttributes() {
    return ['timeout', 'entry', 'exit']
  }

  created() {
    this.entry = this.entry || 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'db pa3 avenir animated ' + this.entry

    this.render()
  }

  render() {
    return this.html`
<div class="mw6 ml3 pa3 bg-near-white">
  <h1>
    <a class="link dark-gray" href="/bio">
        Marcia Raines
    </a>
  </h1>
  <div class="flex flex-column">
    <a class="f3 mb3 dark-green hover-orange" href="https://www.linkedin.com/in/marcia-raines-b25298a4/">LinkedIn</a>
    <a class="f3 mb3 dark-green hover-orange" href="tel:+16509954743">650.995.4743</a>
    <a class="f3 mb3 dark-green hover-orange" href="mailto:mraines.pss@gmail.com">mraines.pss@gmail.com</a>
  </div>
</div>`
  }
}

ContactInformation.define('contact-information')
