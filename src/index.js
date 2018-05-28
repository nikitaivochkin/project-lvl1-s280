import readlineSync from 'readline-sync';
const questionOfName = () => {
    console.log(`Hello, ${readlineSync.question('May I have your name?: ')}!`)
}
export default questionOfName;