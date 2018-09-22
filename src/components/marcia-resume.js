import HyperHTMLElement from 'hyperhtml-element'

class MarciaResume extends HyperHTMLElement {
  static get observedAttributes() {
    return ['timeout', 'entry', 'exit']
  }

  created() {
    this.entry = this.entry || 'fadeIn'
    this.exit = this.exit || 'fadeOut'
    this.className = 'w-100 bg-moon-gray near-black avenir lh-copy animated ' + this.entry

    this.render()
  }

  render() {
    return this.html`
<style
     type="text/css">@import url('https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98');

ul.lst-kix_list_1-0 {
  list-style-type: none
}

.lst-kix_list_3-0 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-7 {
  list-style-type: none
}

ul.lst-kix_list_5-8 {
  list-style-type: none
}

.lst-kix_list_3-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_3-2 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-5 {
  list-style-type: none
}

ul.lst-kix_list_5-6 {
  list-style-type: none
}

ul.lst-kix_list_1-3 {
  list-style-type: none
}

.lst-kix_list_3-5 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-0 {
  list-style-type: none
}

ul.lst-kix_list_1-4 {
  list-style-type: none
}

ul.lst-kix_list_1-1 {
  list-style-type: none
}

.lst-kix_list_3-4 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_1-2 {
  list-style-type: none
}

ul.lst-kix_list_5-3 {
  list-style-type: none
}

ul.lst-kix_list_1-7 {
  list-style-type: none
}

.lst-kix_list_3-3 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_5-4 {
  list-style-type: none
}

ul.lst-kix_list_1-8 {
  list-style-type: none
}

ul.lst-kix_list_5-1 {
  list-style-type: none
}

ul.lst-kix_list_1-5 {
  list-style-type: none
}

ul.lst-kix_list_5-2 {
  list-style-type: none
}

ul.lst-kix_list_1-6 {
  list-style-type: none
}

.lst-kix_list_3-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_3-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_3-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-1 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-8 {
  list-style-type: none
}

.lst-kix_list_5-7 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-6 {
  list-style-type: none
}

.lst-kix_list_5-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_5-8 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-7 {
  list-style-type: none
}

ul.lst-kix_list_4-0 {
  list-style-type: none
}

ul.lst-kix_list_4-1 {
  list-style-type: none
}

.lst-kix_list_5-4 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-4 {
  list-style-type: none
}

.lst-kix_list_5-5 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_4-5 {
  list-style-type: none
}

ul.lst-kix_list_4-2 {
  list-style-type: none
}

ul.lst-kix_list_4-3 {
  list-style-type: none
}

.lst-kix_list_6-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_6-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-8 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_3-7 {
  list-style-type: none
}

ul.lst-kix_list_3-8 {
  list-style-type: none
}

ul.lst-kix_list_3-1 {
  list-style-type: none
}

ul.lst-kix_list_3-2 {
  list-style-type: none
}

ul.lst-kix_list_3-0 {
  list-style-type: none
}

ul.lst-kix_list_3-5 {
  list-style-type: none
}

ul.lst-kix_list_3-6 {
  list-style-type: none
}

ul.lst-kix_list_3-3 {
  list-style-type: none
}

ul.lst-kix_list_3-4 {
  list-style-type: none
}

.lst-kix_list_4-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_4-6 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_6-6 {
  list-style-type: none
}

ul.lst-kix_list_6-7 {
  list-style-type: none
}

ul.lst-kix_list_6-4 {
  list-style-type: none
}

ul.lst-kix_list_2-8 {
  list-style-type: none
}

ul.lst-kix_list_6-5 {
  list-style-type: none
}

ul.lst-kix_list_6-8 {
  list-style-type: none
}

ul.lst-kix_list_2-2 {
  list-style-type: none
}

.lst-kix_list_1-0 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_2-3 {
  list-style-type: none
}

ul.lst-kix_list_2-0 {
  list-style-type: none
}

ul.lst-kix_list_2-1 {
  list-style-type: none
}

ul.lst-kix_list_6-2 {
  list-style-type: none
}

ul.lst-kix_list_2-6 {
  list-style-type: none
}

ul.lst-kix_list_6-3 {
  list-style-type: none
}

.lst-kix_list_1-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-2 > li:before {
  content: "\\0025cf  "
}

ul.lst-kix_list_2-7 {
  list-style-type: none
}

ul.lst-kix_list_6-0 {
  list-style-type: none
}

ul.lst-kix_list_2-4 {
  list-style-type: none
}

ul.lst-kix_list_6-1 {
  list-style-type: none
}

ul.lst-kix_list_2-5 {
  list-style-type: none
}

.lst-kix_list_1-3 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-4 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-7 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-5 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-6 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-0 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-1 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_1-8 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-2 > li:before {
  content: "\\0025cf  "
}

.lst-kix_list_2-3 > li:before {
  content: "\\0025cf  "
}

ol {
  margin: 0;
  padding: 0
}

table td, table th {
  padding: 0
}

.c4 {
  margin-left: 36pt;
  padding-top: 0pt;
  padding-left: 0pt;
  padding-bottom: 4px;
  orphans: 2;
  widows: 2;
  text-align: justify;
  line-height: 1.2;
}

.c8 {
  margin-left: 36pt;
  padding-top: 0pt;
  text-indent: -36pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c7 {
  margin-left: 36pt;
  padding-top: 0pt;
  padding-left: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c15 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: right;
  height: 12pt
}

.c6 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left;
  height: 12pt
}

.c11 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12pt;
  font-family: "Times New Roman";
  font-style: normal
}

.c0 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12pt;
  font-family: "Gentona";
  font-style: normal
}

.c18 {
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  vertical-align: baseline;
  font-size: 12pt;
  font-family: "Calibri";
  font-style: normal
}

.c10 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c20 {
  padding-top: 0pt;
  padding-bottom: 0pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: justify
}

.c3 {
  padding-top: 0pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: justify
}

.c9 {
  padding-top: 0pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c27 {
  padding-top: 14pt;
  padding-bottom: 14pt;
  line-height: 1.2;
  orphans: 2;
  widows: 2;
  text-align: left
}

.c28 {
  font-family: "Symbol";
  color: #006d84;
  font-weight: 400
}

.c5 {
  font-family: "FontAwesome";
  color: #006d84;
  font-weight: 400
}

.c2 {
  vertical-align: baseline;
  font-family: "Gentona";
  font-weight: 400
}

.c22 {
  text-decoration: none;
  vertical-align: baseline;
  font-style: normal
}

.c23 {
  color: #000000;
  text-decoration: none;
  font-size: 12pt
}

.c1 {
  font-weight: 700;
  font-family: "Gentona"
}

.c16 {
  font-size: 14pt;
  color: #006d84
}

.c13 {
  font-weight: 400;
  font-family: "Gentona"
}

.c12 {
  padding: 0;
  margin: 0
}

.c19 {
  margin-left: 36pt;
  padding-left: 0pt
}

.c25 {
  color: #000000;
  font-size: 12pt
}

.c21 {
  font-weight: 700;
  font-family: "Times New Roman"
}

.c24 {
  font-weight: 400;
  font-family: "Times New Roman"
}

.c17 {
  height: 12pt
}

.c14 {
  font-style: italic
}

.c29 {
  margin-right: 18pt
}

.title {
  padding-top: 24pt;
  color: #000000;
  font-weight: 700;
  font-size: 36pt;
  padding-bottom: 6pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

.subtitle {
  padding-top: 18pt;
  color: #666666;
  font-size: 24pt;
  padding-bottom: 4pt;
  font-family: "Georgia";
  line-height: 1.2;
  page-break-after: avoid;
  font-style: italic;
  orphans: 2;
  widows: 2;
  text-align: left
}

li {
  color: #000000;
  font-size: 12pt;
  font-family: "Calibri"
}

p {
  margin: 0;
  color: #000000;
  font-size: 12pt;
  font-family: "Calibri"
}

h3 {
  padding-top: 14pt;
  color: #000000;
  font-weight: 700;
  font-size: 14pt;
  padding-bottom: 4pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

h4 {
  padding-top: 12pt;
  color: #000000;
  font-weight: 700;
  font-size: 12pt;
  padding-bottom: 2pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

h5 {
  padding-top: 11pt;
  color: #000000;
  font-weight: 700;
  font-size: 11pt;
  padding-bottom: 2pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}

h6 {
  padding-top: 10pt;
  color: #000000;
  font-weight: 700;
  font-size: 10pt;
  padding-bottom: 2pt;
  font-family: "Calibri";
  line-height: 1.2;
  page-break-after: avoid;
  orphans: 2;
  widows: 2;
  text-align: left
}
</style>

<div class="mt5 pa3">
  <div class="mw7 lh-copy pv4 ph5 bw3 b--silver bg-near-white">
    <p class="c27"><span class="c1 c16">Marcia Raines </span></p>
    <p class="c9"><span class="c13">mraines.pss@gmail.com </span><span class="c28">&bull;</span><span
         class="c5">&nbsp;</span><span class="c13">650.995.4743 </span></p>
    <p class="c9"><span class="c1 c16">EDUCATION </span></p>
    <p class="c10"><span class="c1">Master of Arts </span></p>
    <p class="c10"><span class="c13">Homeland Security Issues </span></p>
    <p class="c10"><span class="c13 c14">Naval Postgraduate School, Monterey </span></p>
    <p class="c10"><span class="c13">Center for Homeland Defense and Security<br></span><span
         class="c13 c14">&nbsp;</span>
    </p>
    <p class="c10"><span class="c1">Bachelor of Science </span></p>
    <p class="c10"><span class="c13">Urban Planning </span></p>
    <p class="c10"><span class="c2 c14 c23">California State Polytechnic University, Pomona </span></p>
    <p class="c6"><span class="c2 c23 c14"></span></p>
    <p class="c10"><span class="c22 c1 c25">Executive Seminar graduate </span></p>
    <p class="c10"><span class="c13 c14">UC Berkeley </span></p>
    <p class="c9 c17"><span class="c1 c16 c22"></span></p>
    <p class="c9"><span class="c22 c1 c16">EXPERIENCE </span></p>
    <p class="c9"><span class="c21">CEO, Founder </span><span class="c2">| </span><span
         class="c24">Public Sector Services </span><span class="c2">| </span><span class="c24">April 2018 </span><span
         class="c13">&ndash; </span><span class="c11">present </span></p>
    <p class="c9"><span class="c11">Public Sector Services (PSS) provides public and private clients with innovative and strategic approaches in difficult situations in working with local government agencies. PSS focuses on using leadership skills and experience to help clients navigate today&rsquo;s complex governmental atmosphere. &nbsp;Attention to detail, finding solutions that moves projects forward and resolve controversial issues is the focus of PSS.</span>
    </p>
    <p class="c9"><span class="c1">City Manager </span><span class="c2">| </span><span
         class="c13">City of Millbrae </span><span class="c2">| </span><span
         class="c13">December 2008 &ndash; April 2018 </span></p>
    <p class="c3"><span class="c13">The City of Millbrae is located about 15 miles south of San Francisco, adjacent to the San Francisco International Airport (SFO). Millbrae is a regional transit hub and a full-service city with 100 full time employees and a budget of $60 million. My accomplishments in Millbrae include the following: </span>
    </p>
    <ul class="c12 lst-kix_list_1-0 start">
      <li class="c4"><span class="c0">Led preparation of Economic Development Strategic Plan to establish Millbrae&rsquo;s path forward for long-term economic sustainability. </span>
      </li>
      <li class="c4"><span class="c0">Managed City through economic downturn of 2008 to 2012 including facilitation and coordination of numerous innovative actions to increase efficiencies while preserving critical services. </span>
      </li>
      <li class="c4"><span class="c0">Identified unfunded liabilities and fiscal imbalance at beginning of my time in Millbrae and conducted &ldquo;MILLBRAE NOW&rdquo; community workshops with the Council to define a new reality. </span>
      </li>
      <li class="c4"><span class="c0">Worked with community stakeholders to define approach to achieving fiscal sustainability, including revenue enhancement strategies. </span>
      </li>
      <li class="c4"><span class="c0">With unanimous Council support, led successful ballot measure to move the City Treasurer function into the City&rsquo;s Finance Department to eliminate duplication of efforts. </span>
      </li>
      <li class="c4"><span class="c0">With unanimous Council support, led successful ballot measures to extend a parcel tax generating $1.2 million annually for Fire Services and to establish an increase in local transit occupancy tax. </span>
      </li>
      <li class="c4"><span class="c0">Established shared services agreements with neighboring cities in both Police and Fire Services and moved agreements to the next level to realize greater long-term savings. </span>
      </li>
      <li class="c4"><span class="c0">Successfully coordinated transfer of City Police Services to County Sheriff&rsquo;s Office resulting in over $1.5 million annual savings. </span>
      </li>
      <li class="c4"><span class="c0">Attracted a $30 million 1% ARRA (American Recovery Relief Act) loan to refurbish the City&rsquo;s 35-year-old wastewater treatment plant to reduce environmental exposure and to be consistent with the City&rsquo;s sustainable objectives. </span>
      </li>
      <li class="c4"><span class="c0">Coordinated with Bay Area Rapid Transit (BART) to define criteria consistent with the City&rsquo;s Redevelopment Plan and selected a developer for a major hotel and office development adjacent to the Millbrae Station. </span>
      </li>
      <li class="c3 c19"><span class="c0">Coordinated with neighboring community of San Bruno during major catastrophic event, the September 9, 2010 PG&amp;E pipeline explosion. Assisted with emergency center operations, staffing, equipment and recovery needs. </span>
      </li>
    </ul>
    <p class="c9"><span class="c1">City Manager </span><span class="c2">| </span><span
         class="c13">City of Half Moon Bay </span><span class="c2">| </span><span
         class="c13">October 2006 - December 2008<br>The City of Half Moon Bay is a coast side community with 60 full time municipal employees and a budget of $29 million. My accomplishments included the following: </span>
    </p>
    <ul class="c12 lst-kix_list_2-0 start">
      <li class="c7"><span class="c0">Upon my arrival, raised awareness of long-standing legal issue over land use dispute with developer and the potential for an unfunded liability. </span>
      </li>
      <li class="c7"><span class="c0">Recruited team of experts to minimize federal judgment and negotiate final settlement acceptable to the Council and fiscally sustainable for the community. </span>
      </li>
      <li class="c7"><span
           class="c0">Developed of a five-year budget forecast including a Capital Improvement Plan. </span>
      </li>
      <li class="c7"><span class="c0">With unanimous Council support, successfully passed an increase in transit occupancy tax. </span>
      </li>
      <li class="c7"><span
           class="c0">Developed of a three-year Strategic Plan with a six-month detailed operations plan. </span></li>
      <li class="c7"><span
           class="c0">Successfully led the organization in the transition to a new City Attorney. </span>
      </li>
      <li class="c7"><span class="c0">Recruited department heads and initiated development of an Executive Team. </span>
      </li>
      <li class="c7"><span class="c0">Initiated and implemented organizational and operational improvements in each department. </span>
      </li>
      <li class="c7"><span class="c0">Established Human Resources Department, created standards of performance, and resolved outstanding workers compensation claims, resulting in improved accountability. </span>
      </li>
      <li class="c7"><span
           class="c0">Worked with local schools regarding major capital refurbishment of facilities. </span>
      </li>
      <li class="c7"><span class="c0">Facilitated completion of long outstanding major highway improvements through coordination with CALTRANS and San Mateo County. </span>
      </li>
      <li class="c7"><span class="c0">Created a public/private partnership to acquire a community park to provide an entry statement for the City. </span>
      </li>
      <li class="c9 c19"><span class="c0">Engaged the community as necessary to address and resolve various controversial issues. </span>
      </li>
    </ul>
    <p class="c9"><span class="c1">Director of Environmental Services Agency </span><span class="c2">| </span><span
         class="c13">San Mateo County </span><span class="c2">| </span><span
         class="c0">September 2000 - October 2006 </span></p>
    <p class="c3"><span class="c0">The Environmental Services Agency provides most of the municipal like services to the 79,000 residents of the unincorporated areas of San Mateo County and some services to various cities in the County. The agency had 500 regular and volunteer staff, an annual operating budget of $70 million, plus a capital projects list of $23 million. Departments within the Agency included; Animal Control, Agricultural Inspection Weights &amp; Measures, UC Extension Services, Fire, Library, LAFCo, Parks, Planning and Building. Some of my accomplishments in this position included the following: </span>
    </p>
    <ul class="c12 lst-kix_list_3-0 start">
      <li class="c4"><span class="c0">Reduced budget demands on the general fund by 20% resulting in a 7:1 ratio leverage of general fund dollars spent to actual cost of programs delivering services to the public. </span>
      </li>
      <li class="c4"><span class="c0">Redefined cost allocation for animal control services resulting in $1 million savings for the County general fund, while enhancing service delivery levels. </span>
      </li>
      <li class="c4"><span
           class="c0">Revised animal control contracts so that services are linked to the facility lease. </span></li>
      <li class="c4"><span class="c0">Coordinated airport planning through the Airport Roundtable and Airport Land Use Commission. </span>
      </li>
      <li class="c4"><span class="c0">Directed preparation of Airport Master Plans for SFO, San Carlos and Half Moon Bay airports. </span>
      </li>
      <li class="c4"><span class="c0">Refined fire protection services to maintain level of service while significantly reducing costs. </span>
      </li>
      <li class="c4"><span class="c0">Developed scanner pricing ordinance with no increase in cost to consumers and the County, while reducing erroneous charges to consumers. </span>
      </li>
      <li class="c4"><span class="c0">Developed weed management area with no cost to landowners, providing services to farmers and agricultural community. </span>
      </li>
      <li class="c4"><span class="c0">Oversaw 60% change in personnel in library services with increase in service delivery level. </span>
      </li>
      <li class="c4"><span class="c0">Reduced library system charges to the general fund by $500,000. </span></li>
      <li class="c4"><span class="c0">Facilitated a new agreement between eleven cities and the County for the library system resolving staffing, financing and facility issues. </span>
      </li>
      <li class="c4"><span class="c0">Worked with newly formed Arts Commission to establish a strategic plan for the arts and begin implementation, including display of art in public buildings. </span>
      </li>
      <li class="c4"><span class="c0">Oversaw transition of one-third of personnel in the park system, with increase in training and modernization of operations. </span>
      </li>
      <li class="c4"><span class="c0">Managed transition to countywide park operations resulting in significant cost savings without reducing services. </span>
      </li>
      <li class="c4"><span class="c0">Negotiated reimbursement for reduction in tax dollars resulting from annexation of agricultural lands to open space districts. </span>
      </li>
      <li class="c4"><span class="c0">Moved toward full cost recovery of Development Review Services over a two-year period, resulting in a $2 million savings to the general fund, with ongoing savings not yet realized. </span>
      </li>
      <li class="c3 c19"><span
           class="c0">Coordinated business development efforts with coast side business community. </span></li>
    </ul>
    <p class="c9"><span class="c1">City Manager </span><span class="c2">| </span><span
         class="c13">City of Martinez </span><span class="c2">| </span><span class="c0">1997-2000 </span></p>
    <p class="c3"><span class="c13">Assistant City Manager/Economic Development Manager </span><span
         class="c2">| </span><span class="c0">1984 - 2000 Administrative Services Director, Public Works Director, Community Development Director, Associate Planner </span>
    </p>
    <p class="c3"><span class="c0">The City of Martinez is a historic city with a population of 35,000, serving as the county seat to Contra Costa County. It is a full-service city with a FY 2000 general fund budget of $23 million, a capital project budget of $16 million and 130 employees. Accomplishments during this assignment included: </span>
    </p>
    <ul class="c12 lst-kix_list_4-0 start">
      <li class="c4"><span class="c0">Developed framework for initial establishment of a Community Foundation and recommendations for allocation of $200,000 annual fund to community-based organizations. </span>
      </li>
      <li class="c4"><span class="c0">Worked with Contra Costa County to coordinate plans and policies to accommodate new facilities for courts, hospital and general services. </span>
      </li>
      <li class="c4"><span class="c0">Managed 10 MGD water system and implemented water system improvements resulting in enhanced water quality, while controlling rates. </span>
      </li>
      <li class="c4"><span class="c0">Managed grant application and voter approval (86% approval) of flood control project to reduce downtown flooding. </span>
      </li>
      <li class="c4"><span
           class="c0">Implemented construction of multimodal transportation station serving regional needs. </span></li>
      <li class="c4"><span class="c0">Privatized marina and refinanced $25 million in loans that had accumulated over a 30-year period. </span>
      </li>
      <li class="c4"><span class="c0">Initiated community-based events such as &ldquo;First Night&rdquo;; a family based alcohol-free New Year&rsquo;s celebration. </span>
      </li>
      <li class="c4"><span class="c0">Worked with industry representatives to streamline process times by devising a state-of-the-art telecommunications ordinance accepted by environmental community representatives. </span>
      </li>
      <li class="c4"><span
           class="c0">Worked with local business leaders to establish business friendly environment.</span>
      </li>
      <li class="c4"><span class="c0">Established a municipal council of leaders focused on coordinating services to the community. </span>
      </li>
      <li class="c4"><span class="c0">Served on the board of non-profit community organizations in order to coordinate partnerships between the City, schools and business groups. </span>
      </li>
      <li class="c4"><span class="c0">Initiated a 5-year CIP for the City. </span></li>
      <li class="c4"><span class="c0">Administered solid waste and recycling franchises. </span></li>
      <li class="c4"><span class="c0">Developed program to meet AB 949 recycling objectives. </span></li>
      <li class="c4"><span class="c0">Negotiated labor agreements. </span></li>
      <li class="c4"><span class="c0">Initiated Economic Development program focused on the downtown area. </span></li>
      <li class="c4"><span class="c0">Worked with regional business leaders to establish partnerships with municipal leaders. </span>
      </li>
      <li class="c3 c19"><span class="c0">Established partnerships with local industry leaders and converted annual contributions to locally driven funding mechanisms. </span>
      </li>
    </ul>
    <p class="c8"><span class="c1 c16">ADDITIONAL QUALIFICATIONS </span></p>
    <p class="c8"><span class="c1">Professional Affiliations </span></p>
    <ul class="c12 lst-kix_list_5-0 start">
      <li class="c4"><span class="c0">ICMA (International City Management Association) Awards Panel, 2010-2017, Chair 2017, President&rsquo;s appointment </span>
      </li>
      <li class="c4"><span
           class="c0">ICMA 2010 San Jose Conference Host Committee and Volunteer Coordinating Committee </span></li>
      <li class="c4"><span
           class="c0">ICMA 2012 Phoenix Conference Host Committee, Awards Committee representative </span>
      </li>
      <li class="c4"><span class="c0">ICMA 2013-2016 Award Committee appointment by President of ICMA</span></li>
      <li class="c4"><span class="c0">ICMA Credentialed Manager status, 2012-2018 </span></li>
      <li class="c4"><span class="c0">ICMA Service Award, 40 years-2018 </span></li>
      <li class="c4"><span class="c0">Cal-ICMA (California chapter &ndash; International City Management Association) Board 2008 to 2018 </span>
      </li>
      <li class="c4"><span class="c0">Cal-ICMA Governance and Nominations Committee, 2008-2010 </span></li>
      <li class="c4"><span class="c0">CCMF (California City Management Foundation) Board 2007 to 2018 </span></li>
      <li class="c4"><span class="c0">CCMF member highlight 2013 </span></li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, President 2014-15, Board member 2010 to 2018 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, At-Large Representative for Northern California cities under 100,000 population, 2010-2012 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, Conference Planning Committee appointed by Department President 2009, 2010 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, Policy Committee: Public Safety 2010, Environmental Quality 2009, and Community Services 2008 </span>
      </li>
      <li class="c4"><span class="c0">ILG (Institute for Local Government), Board member 2016 to 2018</span></li>
      <li class="c4"><span class="c0">San Mateo County City Managers Association, Vice Chair 2011, Chair 2012, member 2007 to 2018</span>
      </li>
      <li class="c4"><span
           class="c0">San Mateo County SAL (Sheriff&rsquo;s Activity League) Board, 2014 to present</span>
      </li>
      <li class="c4"><span
           class="c0">San Mateo County HEART (Housing Endowment and Regional Trust) Treasurer, 2016 to 2018</span></li>
      <li class="c4"><span class="c0">Contra Costa County City Managers Association, member 1997-2001 </span></li>
      <li class="c4"><span class="c0">Leadership Contra Costa graduate, 2000 </span></li>
      <li class="c4"><span class="c0">Boys &amp; Girls Club of Martinez, Board member, 1995-2000 </span></li>
      <li class="c4"><span class="c0">Martinez Area Chamber of Commerce, Board member 1995-2000 </span></li>
      <li class="c4"><span class="c0">Rotary International, Martinez, Redwood City and Half Moon Bay 1996-2009, Paul Harris fellow 2005, Board member 1998-2000</span>
      </li>
      <li class="c3 c19"><span class="c0">Sonrisas Dental, Board member 2004-2006 </span></li>
    </ul>
    <p class="c8"><span class="c1">Recent Public Speaking </span></p>
    <ul class="c12 lst-kix_list_6-0 start">
      <li class="c4"><span class="c0">POST (Police Officers Standards &amp; Training) lecturer &ldquo;The Police Chief /City Manager relationship,&rdquo; 2012, 2013 </span>
      </li>
      <li class="c4"><span class="c0">League of California Cities, City Manager Department, &ldquo;The New Normal,&rdquo; 2009 and &ldquo;Making Shared Services a Reality,&rdquo; 2011, &ldquo;How to Successfully Consolidate Public Safety Units,&rdquo; 2013 </span>
      </li>
      <li class="c4"><span class="c0">USC Public Policy Master&rsquo;s program, &ldquo;Internships,&rdquo; &ldquo;Case Studies in Decision Making&rdquo;, &ldquo;Crucible Moments,&rdquo; &ldquo;Finding the Right Job to Build Your Career,&rdquo; 2011-2016 </span>
      </li>
      <li class="c4"><span class="c0">San Francisco State University Public Administration Master&rsquo;s program, &ldquo;Crucible Moments&rdquo;, &ldquo;Shared Services,&rdquo; 2015-2017 </span>
      </li>
      <li class="c4"><span class="c0">Golden Gate University Business School, &ldquo;Public-Private Partnerships,&rdquo; 2017 </span>
      </li>
      <li class="c4"><span
           class="c0">San Mateo County, Council of Cities, &ldquo;Shared Services&rdquo;, 2010-2011 </span>
      </li>
      <li class="c3 c19"><span class="c0">State of California Assembly/Senate Joint Committee on Local Government Transparency and Compensation, &ldquo;Public Employee Compensation,&rdquo; September 2010 </span>
      </li>
    </ul>
    <p class="c6"><span class="c11"></span></p>
    <p class="c17 c20"><span class="c11"></span></p>
    <p class="c6"><span class="c18"></span></p>
    <div><p class="c15"><span class="c18"></span></p>
      <p class="c6 c29"><span class="c18"></span></p></div>
  </div>
</div>
`
  }
}

MarciaResume.define('marcia-resume')
