import {formManager} from "./formManager"
import {domRender} from "./domRender"
import {saveJournal} from "./saveJournal"
import {edJournal} from "./edJournal"

const journal = (activeUser) => {
//below will display our form on the page
document.querySelector("#input").innerHTML = formManager.htmlForm()
domRender(activeUser)
saveJournal(activeUser)
edJournal(activeUser)
}

export {journal}