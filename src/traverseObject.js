function traverseObj (obj){
  for (let key in obj){
    if (typeof obj[key] === 'object'){
      console.log(obj[key])
      traverseObj(obj[key])
    } else {
      console.log(obj[key])
    }
  }
}
let obj = {
  isbn: "123-456-222",  
  author: {
      lastname: "Doe",
      firstname: "Jane"
  },
  editor: {
      lastname: "Smith",
      firstname: "Jane"
  },
  title: "The Ultimate Database Study Guide",  
  category: "Non-Fiction"
 }