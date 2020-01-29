// var handleSubmit = require('./js/formHandler')
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'

import './styles/resets.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/base.scss'

console.log(checkForName);
console.log(handleSubmit);

alert("I EXIST")
console.log("CHANGE!!");

export {
    checkForName, 
    handleSubmit
}
