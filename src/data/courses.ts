export type Level = 'Undergraduate'|'MBA'|'Executive Education'|'PhD';
export interface Course {name:string;level:Level;term:string;description:string;institution:string}
export const courses:Course[] = [
 {name:'Foundations of Management',level:'Undergraduate',term:'Spring 2026',institution:'Northbridge University',description:'An introduction to the ideas, people, and practices that shape organizations. Students connect foundational concepts to real-world cases.'},
 {name:'Organizations & Society',level:'Undergraduate',term:'Autumn 2026',institution:'Northbridge University',description:'Exploring the relationship between business and society, with attention to purpose, responsibility, and the changing nature of work.'},
 {name:'Strategic Management',level:'MBA',term:'Autumn 2026',institution:'Northbridge University',description:'Developing the judgment to navigate competitive environments, make difficult trade-offs, and translate strategy into action.'},
 {name:'Leading Organizational Change',level:'MBA',term:'Spring 2026',institution:'Northbridge University',description:'A hands-on exploration of change through case discussions, simulations, and a collaborative consulting project.'},
 {name:'Strategy in Uncertain Times',level:'Executive Education',term:'November 2026',institution:'Northbridge Executive School',description:'A focused program for experienced leaders navigating disruption, innovation, and the need for organizational renewal.'},
 {name:'Responsible Leadership',level:'Executive Education',term:'Summer 2026',institution:'Northbridge Executive School',description:'Connecting purposeful leadership to the everyday decisions that build trust and deliver sustainable organizational value.'},
 {name:'Organizations & Change',level:'PhD',term:'Autumn 2026',institution:'Northbridge University',description:'A doctoral seminar examining classic and emerging perspectives on organizational adaptation, routines, and institutional change.'},
 {name:'Qualitative Research Design',level:'PhD',term:'Spring 2026',institution:'Northbridge University',description:'Developing rigorous, imaginative research through interviews, fieldwork, and the careful analysis of organizational processes.'},
];
export const students = [
 {name:'Clara West',thesis:'Learning Across Organizational Boundaries',year:2025,position:'Assistant Professor, Elmwood School of Management'},
 {name:'Daniel Avery',thesis:'Strategic Renewal in Family-Owned Firms',year:2024,position:'Research Fellow, Westhaven Institute'},
 {name:'Maya Rowan',thesis:'Purpose and Resource Allocation',year:2023,position:'Senior Researcher, Meridian Policy Lab'},
 {name:'Lucas Bell',thesis:'Trust During Digital Transformation',year:2022,position:'Lecturer, Ashfield Business School'},
];
export const testimonials = [
 {quote:'Professor Mercer helped me see strategy not as a set of frameworks, but as a way of asking better questions.',name:'Jamie Ellis',role:'MBA graduate, Class of 2025'},
 {quote:'A rare ability to connect rigorous research with the real challenges we face as leaders.',name:'Morgan Vale',role:'Executive Education participant'},
 {quote:'His encouragement to challenge assumptions changed the way I approach my own research.',name:'Alex Rowan',role:'PhD candidate, Management'},
];
