export type Category = 'Award'|'Fellowship'|'Editorial Role'|'Recognition'|'Service';
export interface Achievement {year:number;title:string;organization:string;description:string;category:Category;featured:boolean}
export const achievements:Achievement[] = [
 {year:2026,title:'Distinguished Scholar Award',organization:'Association for Organizational Inquiry',description:'Recognizing sustained contributions to research on organizational adaptation and strategic change.',category:'Award',featured:true},
 {year:2026,title:'Keynote: The Human Side of Strategy',organization:'Global Forum on Organizations',description:'Invited opening keynote on thoughtful leadership and the future of organizational life.',category:'Recognition',featured:false},
 {year:2025,title:'University Award for Teaching Excellence',organization:'Northbridge University',description:'For innovative, inclusive teaching that bridges management research and practice.',category:'Award',featured:true},
 {year:2025,title:'Associate Editor',organization:'Journal of Strategic Organizations',description:'Supporting rigorous and relevant scholarship in strategy and organizational research.',category:'Editorial Role',featured:false},
 {year:2024,title:'Best Paper Award',organization:'Annual Conference on Management & Society',description:'For “The Quiet Architects of Change,” co-authored with J. Hartwell.',category:'Award',featured:true},
 {year:2024,title:'Visiting Research Fellowship',organization:'Westhaven Institute for Advanced Studies',description:'A semester-long fellowship studying the relational foundations of resilience.',category:'Fellowship',featured:false},
 {year:2023,title:'Chair, Strategy & Organizations Division',organization:'Management Research Society',description:'Leading an academic community dedicated to advancing strategy research.',category:'Service',featured:false},
 {year:2022,title:'Research Impact Recognition',organization:'Northbridge School of Business & Society',description:'Recognizing the translation of organizational learning research into executive practice.',category:'Recognition',featured:false},
 {year:2021,title:'Editorial Board Member',organization:'Organization & Management Review',description:'Contributing to peer review and scholarly development.',category:'Editorial Role',featured:false},
 {year:2020,title:'Early Career Mentoring Fellowship',organization:'Meridian Foundation for Scholarship',description:'Supporting emerging researchers through a cross-institutional mentoring network.',category:'Fellowship',featured:false},
];
export const memberships = ['Association for Organizational Inquiry','Management Research Society','European Network for Responsible Business'];
