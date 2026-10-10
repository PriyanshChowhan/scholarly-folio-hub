export interface Book {title:string; subtitle:string; year:number; publisher:string; description:string; cover:'teal'|'paper'|'ink'}
export const books:Book[] = [
 {title:'The Thoughtful Organization',subtitle:'Strategy, people, and the work of change',year:2025,publisher:'Northbridge Academic Press',description:'A practical, research-informed guide to building organizations that learn, adapt, and create lasting value.',cover:'teal'},
 {title:'Strategy in Practice',subtitle:'Beyond plans and presentations',year:2022,publisher:'Westhaven Publishing',description:'An exploration of how strategy emerges through everyday decisions, routines, and relationships.',cover:'paper'},
 {title:'Leading Through Uncertainty',subtitle:'A human approach to organizational change',year:2019,publisher:'Meridian Scholarly Press',description:'Why curiosity, trust, and thoughtful judgment matter most when the future is unclear.',cover:'ink'},
];
