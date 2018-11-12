import {dataManager} from "./dataManager"
import {htmlEntry} from "./htmlEntry"


const dom = (entry) => {
    document.querySelector("#output").innerHTML += entry
}

const domRender = (activeUser) => {
    //the next line will clear the dom so that it does not repeat any inputs
    document.querySelector("#output").innerHTML = ""
    dataManager.getEntries(activeUser)
        .then(entries => {
            entries.forEach(entry => {
                const entryHtml = htmlEntry(entry)
                dom(entryHtml)
            })
        })
}

export {domRender}