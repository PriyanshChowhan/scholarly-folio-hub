/** EDIT CONTENT HERE: All records in src/data are fictional sample placeholders.
 * Replace profile, publications, books, courses, writing, achievements and grants.
 * Contact and newsletter forms are demonstration-only and do not send data. */
export const profile = {
  name: 'Adrian Mercer', title: 'Professor of Management', university: 'Northbridge University',
  department: 'School of Business & Society', email: 'adrian.mercer@example.com',
  positioning: 'Understanding organizations. Rethinking strategy.',
  introduction: 'I study how organizations adapt, how people make decisions, and how thoughtful leadership can create lasting value — for business and society.',
  bio: [
    'My work sits at the intersection of strategy and organizational behavior. Over the past two decades, I have explored a simple question: why do some organizations learn and adapt, while others struggle to change?',
    'At Northbridge University, I work with students, colleagues, and business leaders to understand the human side of strategic decisions. My current research examines organizational resilience, responsible innovation, and the changing nature of work.',
    'I earned my PhD in Management at the fictional Westhaven Institute and began my career studying decision-making in family-owned firms. Before joining Northbridge, I held research and teaching appointments across Europe and Asia.'
  ],
  stats: [{value:20,suffix:'+',label:'Years of teaching'}, {value:64,suffix:'',label:'Research publications'}, {value:3200,suffix:'+',label:'Students taught'}, {value:15,suffix:'',label:'Countries reached'}],
  interests: [
    {title:'Strategy & Adaptation', description:'How organizations navigate uncertainty, build resilience, and find new paths to growth.', icon:'compass'},
    {title:'Organizations & People', description:'The everyday decisions, relationships, and routines that shape organizational life.',icon:'people'},
    {title:'Responsible Innovation', description:'How businesses turn new ideas into meaningful progress for people and society.',icon:'sprout'},
    {title:'Leadership & Change', description:'What it takes to lead thoughtfully when the familiar ways of working no longer fit.',icon:'change'}
  ],
  currentResearch:'Exploring how middle managers build organizational resilience during periods of technological change.',
  currentTeaching:'Teaching Strategic Management (MBA) and the doctoral seminar in Organizations & Change, Autumn 2026.',
  office:'Room 412, Ashford Building', address:'24 University Lane, Northbridge, NB1 4HQ', officeHours:'Tuesday, 14:00–16:00 · by appointment', updated:'October 2026',
};
export const socialLinks = [
  {label:'LinkedIn', href:'https://www.linkedin.com/', icon:'linkedin'},
  {label:'Google Scholar', href:'https://scholar.google.com/', icon:'scholar'},
  {label:'ORCID', href:'https://orcid.org/', icon:'orcid'},
  {label:'Email',href:`mailto:${profile.email}`,icon:'email'},
];
