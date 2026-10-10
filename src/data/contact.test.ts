import { describe,it,expect } from 'vitest';
import { contactSchema } from './contact';
const valid={name:'Sample Visitor',email:'visitor@example.com',topic:'Student inquiries',message:'I would like to discuss research supervision.'};
describe('Contact form validation',()=>{
 it('accepts a complete student inquiry',()=>expect(contactSchema.safeParse(valid).success).toBe(true));
 it('rejects an invalid email address',()=>expect(contactSchema.safeParse({...valid,email:'not-an-email'}).success).toBe(false));
 it('requires a selected topic',()=>expect(contactSchema.safeParse({...valid,topic:''}).success).toBe(false));
 it('rejects an empty name',()=>expect(contactSchema.safeParse({...valid,name:' '}).success).toBe(false));
 it('requires a meaningful message',()=>expect(contactSchema.safeParse({...valid,message:' '}).success).toBe(false));
});
