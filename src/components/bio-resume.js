import HyperHTMLElement from 'hyperhtml-element'
import MarciaResume from './marcia-resume'
import MarciaBio from './marcia-bio'

class BioResume extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'entry', 'exit']
  }

  created() {
    this.entry = this.entry || 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'db animated ' + this.entry

    this.render()
  }

  render() {
    return this.html`
<div class="flex flex-wrap flex-nowrap-l">
  <marcia-bio class="w-50"></marcia-bio>
  <marcia-resume id="marcia-raines-resume" class="w-50"></marcia-resume>
</div>`
  }
}

BioResume.define('bio-resume')
