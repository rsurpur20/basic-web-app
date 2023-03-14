export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "mitun and roshni" 
    );
  }
  if (query.toLowerCase().includes("numbers is the largest")) {
    // const numbers = query.match("/\d+/g");
    // const largest = Math.max(...numbers.map(Number));
    let queryArray = query.toLowerCase().split(":");
    let nums = queryArray[1]
    let queryArraynums = nums.toLowerCase().split(",");
    let first = parseInt(queryArraynums[0]);
    let second = parseInt(queryArraynums[1]);
    let third = parseInt(queryArraynums[2]);
    return Math.max(first, second, third).toString();
    
  }
  if (query.toLowerCase().includes("plus")) {
    // const numbers = query.match("/\d+/g");
    // const largest = Math.max(...numbers.map(Number));
    let queryArray = query.toLowerCase().split(" ");
    // let nums = queryArray[1]
    // let queryArraynums = nums.toLowerCase().split(",");
    let first = parseInt(queryArray[2]);
    let second = parseInt(queryArray[4]);
    return (first+second).toString();
    
  }
  if (query.toLowerCase().includes("square and a cube")) {
    let queryArray = query.toLowerCase().split(":");
    let nums = queryArray[1] 
    let queryArraynums = nums.toLowerCase().split(",");
    
    let result = [];
    for (let i = 0; i > queryArraynums.length; i++) {
      const num = queryArraynums[i]
      if (Number.isInteger(Math.sqrt(parseInt(num)))) {
        if (Number.isInteger(Math.cbrt(parseInt(num)))) {
          result.push(num)
        }
       }
    } 
      
    return result.toString();
    
  }

  return "";
}
