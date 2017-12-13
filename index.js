function shout(string){
  return string.toUpperCase();
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(`${string.toUpperCase()}`)
}
function logWhisper(string){
  console.log(`${string.toLowerCase()}`)
}
<<<<<<< HEAD
function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }
  if (string.toUpperCase() === string){
  return "YES INDEED!"
}
  if (string === "I love you, Grandma."){
    return "I love you, too."
}
=======

function sayHitoGrandma(string){
  if (string.isLowerCase() === string){
    return "I can't hear you!"
  }
  if (string.isUpperCase() === string){
    return "YES INDEED!"
  }
  if (string == "I love you, Grandma."){
    return "I love you, too."
  }
>>>>>>> 4a8f1e7faa6ff25bdacc5e2bc16c71f5a293062b
}