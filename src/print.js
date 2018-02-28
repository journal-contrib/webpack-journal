export default function printMe() {
  if (process.env.NODE_ENV === 'production') {
    console.log("Updating print.js pro...")  
  } else {
    console.log("Updating print.js ...")
  }
}
