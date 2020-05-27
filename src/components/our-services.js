import HyperHTMLElement from 'hyperhtml-element'

class OurServices extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'entry', 'exit']
  }

  created() {
    this.entry = this.entry || 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'db avenir animated ' + this.entry

    this.render()
  }

  render() {
    const bg = `bg-animate bg-white-90 hover-bg-gold`
    const nav = `flex flex-wrap`

    const anchorClass = `link pv2 ph3 br2 light-green hover-mid-gray ${bg}`
    const left = `${anchorClass} br--left-ns`
    const middle = `${anchorClass} br0-ns`
    const right = `${anchorClass} br--right-ns`

    const topLink = `pa2 f5 ttu link light-green`
    const TOP_TEXT = `^ top`

    return this.html`
<div class="pa3">
<h1 id="our-services" class="mt0 mb3 mb2 lh-title fw5 ttc">services</h1>
<nav id="article-nav" class=${nav}>
    <a class=${left} href="#homeland-security">Homeland Security</a>
    <a class=${middle} href="#executive-team-support">Executive Team Support</a>
    <a class=${middle} href="#public-safety-consolidations-efficiencies">Public Safety Consolidations</a>
    <a class=${right} href="#controversial-development-project-strategies">Controversial Development Strategy</a>
</nav>

<article class="mt3 cf w-100 ph2 ph3-ns lh-copy">
  <div class="fl w-100 w-50-ns mr4 measure measure-wide-ns">
    <h2 id="overview" class="athelas lh-title mv0">
    Overview 
    </h2>
    
    <p>
    <span>PUBLIC SECTOR SERVICES</span> (PSS) is built upon decades of leadership and experience 
    with government operations.
    </p>
    <p> As the founder of PSS, Marcia Raines is a tenured local
    government leader that has been recognized statewide as a leader working with cities,
    counties, special districts and private clients, providing high level strategic approaches to
    issues confronting communities in today’s complex environment.
    </p>
    <p>
    Her vast network of public and private contacts combined with a strong understanding of public 
    policy have resulted in successful innovative solutions to numerous complex long unresolved issues.
    </p>
    <p>
    PSS has insight into navigating the system and the network and contacts to reach out and
    find a solution.
    </p>
    <p> Projects undertaken have generated success in working City Councils and
    civic committees to address budget constraints, resolve labor issues, enhance executive
    team performance, create consolidations, reach approval and construction of
    controversial projects, and achieve approval of strategic partnerships to create resilient
    communities.
    </p>
    <p>
    Examples of projects include campaigns to increase tax base, spur heading
    construction of public facilities incorporating large cross section of stakeholder interests,
    restructuring municipal debt, rebuilding public marinas, fire stations, converting public
    facilities into alternative uses, organizing community plans for revitalization of
    downtown to resolve flooding issues, attracting developer interest in civic projects,
    managing major transportation projects completed on time and on budget, breaking long
    standing roadblocks to progress and creating innovative approaches to resolve harsh
    fiscal issues.
    </p>
    <p>
    Areas of expertise include; homeland security issues, public safety consolidations,
    executive team support, strategic planning and development support for controversial
    projects.
    </p>
    
    <h2 id="homeland-security" class="athelas lh-title">
    Homeland Security 
    <a class=${topLink} href="#our-services">${TOP_TEXT}</a>
    </h2>
    
    <p>
    Ensure your agency is ‘crisis ready’ for the next emergency by preparing for the
    multiple agency, multiple day outages and the optimal recovery.
    </p>
    <p> This level of
    preparation encompasses preparing staff organization wide to support public
    safety responses, preparing for multiple agency efforts, communicating with
    residents and managing recovery efforts after the event.
    </p>
    <p> PSS has managed
    multiple emergencies and worked with FEMA on the latest tools.
    </p>
    <p> We can work
    with your team to prepare for the best possible outcomes.
    </p>
    <p> Examples include
    destruction of community center, support for airport disaster, support for
    neighboring community disaster, massive flooding of downtown areas and a
    major industrial catastrophic incident.
    </p>
    <p> Issues are numerous and include; cross
    agency communication, identification of and recording location and access to
    community resources such as food, transportation, alternative power, preparing
    methods to locate staff and city equipment in emergency situations, planning for
    prolonged outages of public services and utilities and cost recovery.
    </p>

    <h2 id="public-safety-consolidations-efficiencies" class="athelas lh-title">
    Public Safety Consolidations &amp; Efficiencies <a class=${topLink} href="#our-services">${TOP_TEXT}</a>
    </h2>

    <p>
    Successful shared services created by PSS cross a variety of agencies including
    fire, police, libraries, code compliance, recreation and housing programs.
    </p>
    <p> These
    projects often involve multiple agencies and numerous stakeholders.
    </p>
    <p> Projects
    include establishing new levels of service delivery by identifying shared service
    possibilities including incorporating all stakeholder groups in crafting approaches,
    contracting amongst agencies with expertise in specific areas of service, splitting
    staff and facility responsibility, standardizing vehicles, equipment and facilities
    between neighboring agencies to allow efficiencies in operations, consolidating
    functions such as payroll, dispatch and management positions.
    </p>
    <p> Projects have also
    included examining and implementation of new governance models and
    identification of best practices for a variety of agencies.
    </p>
  </div>

  <div class="fl w-100 w-50-ns measure measure-wide-ns">
    <h2 id="executive-team-support" class="athelas lh-title">
    Executive Team Support 
    <a class="dn-ns pa2 f5" href="#our-services">${TOP_TEXT}</a>
    </h2>

    <p>
    PSS is experienced in preparing and operating team building exercises that
    engage and strengthen the executive team to better meet changing community
    needs in areas such as effective civic engagement, use of inclusionary approaches
    and implementing sustainable operations.
    </p>
    <p> Completed projects include work with
    executive teams to become more innovative, progressive and successful in
    meeting the ever-expanding demands from the public.
    </p>
    <p> Examples used include
    implementing maximize use of volunteers citywide, implementing new systems
    for record keeping and communication, reorganizing staff including redefinition
    of roles and responsibilities accompanied by training opportunities and techniques
    used effectively include mentoring and on-boarding of entire teams to improve
    collaboration, auditing departments using in-house teams to build enhanced
    methods of service delivery,
    </p>
    
    <h2 id="controversial-development-project-strategies" class="athelas lh-title">
    Controversial Development Project Strategies 
    <a class=${topLink} href="#our-services">${TOP_TEXT}</a>
    </h2>
    
    <p>
    PSS assists private entities in working with agencies and special districts on
    approval and construction of complex, controversial projects in ways that result in
    healthy communities and achieve realistic goals of the proponents.
    One of the projects PSS is proudest of involved charting a path to the future for a
    community served with a major financial federal judgement resulting from a land
    use decision.
    </p>
    <p> This judgement had the potential to bankrupt the community.
    </p>
    <p> PSS
    created a team of experts to assist the community in navigating the path forward.
    Now a decade later the community is looking forward to a sustainable future.
    </p>
    <p>
    PSS experience includes identifying and engaging stakeholders, structuring
    finance packages, shaping ballot measures, gaining support for rate increases and
    successfully navigation Coastal Commission concerns.
    </p>
    <p> The broad spectrum of
    projects ranges from renovating downtowns, rebuilding aging infrastructure,
    refinancing debt, defining partnerships, building support for new facilities to
    resurrecting decade old stalemates and successfully completing projects.
    </p>
    <p> Projects
    have included Devil Slide/Highway 1 in San Mateo County, the Martinez Marina,
    the Martinez Water System storage facilities, the Millbrae wastewater facility,
    Safeway markets, Westin/Aloft complex remodel, Contra Costa County hospital,
    Oceana retail center and reconstruction of county facilities for the county seat in
    Contra Costa County.
    </p>
    <p>
    PSS projects include attracting developers talented in working with the
    communities to define a successful project, engage the community to define
    specific plans, and working through approval, permitting and construction to
    deliver a successful project.
    </p>
  </div>
</article>
`
  }
}

OurServices.define('our-services')
