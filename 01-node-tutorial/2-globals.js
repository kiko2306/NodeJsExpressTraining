// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

//getting the path of the folder
console.log(__dirname)
//setting an interval of time to show a message
setInterval(() => {
  console.log('hello world')
}, 1000)