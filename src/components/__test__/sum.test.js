import { sum } from "../sum" 
test("Sum function calculate sum of two",()=>{
    
    let result=sum(4,4);
    expect(result).toBe(8)
})