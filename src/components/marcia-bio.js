import HyperHTMLElement from 'hyperhtml-element'

class MarciaBio extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'entry', 'exit']
  }

  created() {
    this.entry = this.entry || 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'db w-100 pa3 bg-near-white near-black avenir lh-copy animated ' + this.entry

    this.render()
  }

  render() {
    return this.html`
<h2 class="athelas lh-title">
    Respected City Manager and tenured local government leader
</h2>
<p>
Marcia Raines managed three cities in Northern California over the past 30 years. She has held
leadership positions in several professional organizations including serving as the President of the
City Managers Department for the League of California Cities, Board member of the California
<img class="fl-l mr3-l mv3-l" width="320" height="446" src="mraines.png">
City Management Foundation, Chairperson of the San Mateo County City Managers Association,
Treasurer of the San Mateo County Housing and Regional Trust (HEART) and currently serves
on the boards of the San Mateo County Sheriff Activity League.
</p>
<p>
She has a reputation as an innovator in issues confronting local governments, and as a creative
problem solver. Marcia semi-retired in early 2018, formed Public Sector Services, and is currently
teaching, mentoring and consulting for cities, counties and special districts on topics including the following:
</p>
<ul class="list">
  <li class="mb2">• Preparing management teams to support public safety efforts and provide communities with leadership in the next emergency situation,</li>
  <li class="mb2">• Mentoring new members of the management to rapidly engage in organizational leadership,</li>
  <li class="mb2">• Designing and implementing shared services consolidations,</li>
  <li class="mb2">• Advising public and private clients on strategic methods to address complex projects.</li>
</ul>
<p>
Marcia has been a guest speaker at USC, Golden Gate University and San Francisco State
University on public policy topics including crisis management, emerging issues facing local
managers and career development.
</p>
<p>
Marcia studied Urban Planning at California State Polytechnic University, Pomona. Her graduate
work focused on Homeland Security Issues confronting local governments with the Naval
Postgraduate School, Center for Homeland Defense and Security in Monterey.
She and her family live in the San Francisco Bay Area.
</p>`
  }
}

MarciaBio.define('marcia-bio')
