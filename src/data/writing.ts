export type WritingType = 'Articles'|'Op-eds'|'Blog'|'Newsletter';
export interface Writing {id:string; title:string; date:string; type:WritingType; summary:string; source:string; readTime:number; featured:boolean; body:string[]}
const body = [
 'Organizations rarely change in a single decisive moment. Change is built through conversations, experiments, and the choices people make when no one is watching. The challenge for leaders is to make those small choices point in a shared direction.',
 'In my work with organizations, I return to three questions: what are we learning, whose perspective have we not heard, and what would make us reconsider our assumptions? These questions create room for a more thoughtful kind of strategy.',
 'The practical lesson is modest but important. Give teams time to reflect, make disagreement safe, and treat your strategy as a working hypothesis rather than a finished answer. Adaptation begins when curiosity becomes a habit.',
 'This is fictional sample writing, provided as a placeholder for a future article. All research observations and examples above are illustrative, not actual findings.'
];
export const writing: Writing[] = [
 {id:'quiet-work',title:'The quiet work of organizational change',date:'Sep 2026',type:'Articles',summary:'Why the most meaningful transformations begin with everyday conversations, not grand announcements.',source:'The Management Review',readTime:8,featured:true,body},
 {id:'better-questions',title:'Better strategy starts with better questions',date:'Aug 2026',type:'Op-eds',summary:'In an age of instant answers, the ability to ask the right question is an underrated leadership skill.',source:'The Business Observer',readTime:5,featured:true,body},
 {id:'learning',title:'What learning organizations actually do differently',date:'Jul 2026',type:'Blog',summary:'A few practical habits that separate genuine learning from another workshop on the calendar.',source:'Notes on Organizations',readTime:6,featured:true,body},
 {id:'uncertainty',title:'A field guide to leading through uncertainty',date:'Jun 2026',type:'Newsletter',summary:'Three ideas for making thoughtful decisions when the picture is incomplete.',source:'The Thoughtful Organization',readTime:4,featured:false,body},
 {id:'middle-managers',title:'In praise of middle managers',date:'May 2026',type:'Articles',summary:'The overlooked people translating ambitious strategies into real organizational progress.',source:'The Management Review',readTime:9,featured:false,body},
 {id:'responsible',title:'Innovation needs a wider definition of success',date:'Apr 2026',type:'Op-eds',summary:'New does not always mean better. Responsible innovation asks who benefits and at what cost.',source:'The Business Observer',readTime:5,featured:false,body},
 {id:'meeting',title:'The meeting after the meeting',date:'Mar 2026',type:'Blog',summary:'What informal conversations reveal about trust, voice, and the way decisions really get made.',source:'Notes on Organizations',readTime:6,featured:false,body},
 {id:'pause',title:'The strategic value of a pause',date:'Feb 2026',type:'Newsletter',summary:'Sometimes the most productive thing a team can do is stop and reflect.',source:'The Thoughtful Organization',readTime:3,featured:false,body},
 {id:'purpose',title:'When purpose meets the budget',date:'Jan 2026',type:'Articles',summary:'The real test of organizational values is how they shape difficult resource decisions.',source:'Business & Society Today',readTime:7,featured:false,body},
];
