import { z } from 'zod';
export const contactTopics = ['Speaking invitations','Consulting & advisory','Student inquiries','Media requests','Other'] as const;
export const contactSchema=z.object({name:z.string().trim().min(2,'Please enter your name.'),email:z.string().trim().email('Please enter a valid email address.'),topic:z.enum(contactTopics,{errorMap:()=>({message:'Please choose a topic.'})}),message:z.string().trim().min(10,'Please write a message of at least 10 characters.')});
export type ContactValues=z.infer<typeof contactSchema>;
export const audiences=[
 {title:'Speaking invitations',description:'Keynotes, panel discussions, and conversations on strategy, organizations, and leadership.',icon:'speaking'},
 {title:'Consulting & advisory',description:'Research-informed perspectives for organizations navigating complex strategic challenges.',icon:'consulting'},
 {title:'Student inquiries',description:'Questions about courses, doctoral supervision, and opportunities to explore ideas together.',icon:'students'},
 {title:'Media requests',description:'Commentary and interviews on organizational change and the human side of business.',icon:'media'},
];
