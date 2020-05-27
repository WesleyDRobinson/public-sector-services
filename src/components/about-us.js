import HyperHTMLElement from 'hyperhtml-element'

class AboutUs extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'entry']
  }

  created() {
    this.entry = this.entry || 'fadeIn'
    this.className = 'db pa3 avenir animated ' + this.entry

    this.render()
  }

  render() {
    return this.html`
<h1 id="our-services" class="fw5 mt0 mb2 lh-title ttc">about</h1>
<article class="mw7 ph3 ph4-ns lh-copy">
    <p>
    Public Sector Services (PSS) is a results-oriented firm with direct responsive
    service for public and private clients. Communication is streamlined and adaptable to client
    needs. The firm’s knowledge of government operations and extensive network, which provides clients
    with a strong advantage in expanding market share using collaborative techniques.
    We know how government works and what targets are needed to get projects prioritized.
    </p> 
    <p>PSS uses their leadership skills and experience to help clients navigate today’s complex government
    atmosphere. Founded in early 2018, the firm provides public and private clients with innovative
    and strategic approaches in difficult situations, paying attention to details in order to support
    accomplishing client goals. Areas of expertise include:
      <ul class="list pl2 fw5">
        <li>❏ Executive team support</li> 
        <li>❏ Homeland security issues</li> 
        <li>❏ Public safety consolidations</li> 
        <li>❏ Development support for controversial projects</li> 
      </ul>
    </p>
    <img class="fl-l mr4-l mv3-l" width="320" height="446" src="mraines.png">
    <p>
    PSS works with agencies to select and mentor the best candidates for their executive team, find
    efficiencies in operational areas and define solutions that will move the organization forward.
    PSS assists private entities in working with agencies on approval and construction of complex,
    controversial projects in ways that result in healthy communities and achieve realistic goals of
    the proponents.
    </p>
    <p>
    Marcia Raines is the founding principal and sole proprietor of PSS. For over three decades she
    has worked in top level management of cities, counties, and special districts in the San Francisco
    Bay Area. Her leadership roles have given her a strong understanding of the components of
    government organizations and the communities they serve. She is familiar with the requirements,
    operations and concerns of City Councils, Planning Commissions, Board of Supervisors, School
    Boards, special district boards and the state, federal and special agencies that regulate them. 
    </p>
    <p>
    As a recognized leader statewide, Marcia's network is exhaustive. She successfully works with groups in
    addressing budget constraints, resolving labor issues, creating successful executive teams,
    forming consolidations, achieving approval and construction of controversial projects, and
    creating strategic partnerships that move communities forward. Ms. Raines has managed
    campaigns to increase tax base, spur headed construction of public facilities incorporating large
    cross section of stakeholder interests, restructured municipal debt, rebuilt public marinas, fire
    stations, converted public facilities into alternative uses, led community plans for revitalization
    of downtown including addressing flooding issues, attracted developer interest to civic projects,
    brought transportation projects in on time and on budget and created innovative approaches to
    resolve harsh fiscal issues.
    </p>
    <p>
    As City Manager in Millbrae she managed the public entitlement process and civic engagement
    for controversial developments at the BART station, managed the city’s finances to establish
    healthy reserves, managed community change including implementing public safety
    consolidations, updated facilities and renovated of the business areas of the community. Her
    work included transforming programs and services to reflect the diversity of the community.
    </p>
    <p>
    Prior to her appointment in Millbrae, as City Manager for the City of Half Moon Bay she worked
    with stakeholders to define the future course of the city following a major federal judgement
    which could have financially crippled the city. Prior to her Half Moon Bay role, she served as
    Environmental Services Agency Director for San Mateo County with responsibility for many of
    the municipal-like services provided by the County, responsible for coordination of county
    services and programs with each of the 20 cities in the County. In this assignment she formed
    multiple consolidations across city-county lines all of which remain effective and in place today,
    resulting in multiple agencies with financial efficiencies while improving service delivery.
    Before joining the County, Ms. Raines was City Manager of Martinez where she held multiple
    leadership positions in the organization including Assistant City Manager, Economic
    Development Director, and Public Works Director. She successfully led renovation of the
    downtown area by eliminating flooding with the overwhelming consent of the major property
    owner, Contra Costa. County.
    </p>
    <p>
    
    Marcia has held numerous positions on professional boards including that of President of the
    League of California Cities, City Manager’s Department, serving on the California City
    Managers Foundation Board for over a decade, the California Chapter of the International City
    Managers Association and the Institute for Local Government Boards. She has worked as a
    mentor to next generation professionals at local universities for over a decade. Marcia recently
    completed her master’s degree in Homeland Security Issues from the Naval Postgraduate School
    where her thesis focused on enhancing transportation sector emergency coordination. She holds
    a degree in Urban and Regional Planning from Cal Poly, Pomona and is a graduate of the UC
    Berkley Executive Seminar.
    </p>
</article>`
  }
}

AboutUs.define('about-us')
