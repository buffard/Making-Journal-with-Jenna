import { dataManager } from "./dataManager"
import { formManager } from "./formManager"
import { domRender } from "./domRender"

const saveJournal = (activeUser) => {
    document.querySelector("#input").addEventListener("click", (evt) => {
        const entry = {
            title: document.querySelector("#title").value,
            content: document.querySelector("#content").value,
            date: document.querySelector("#date").value,
            mood: document.querySelector("#mood").value,
            userId: parseInt(activeUser)
        }
        if (evt.target.id.startsWith("saveBtn")) {
      //this will check to make sure all inputs are filled out before saving to our database
            if (!entry.title || !entry.content || !entry.date || !entry.mood) {
                alert("please fill out form!")
            } else {
        //save the info            then once the promise is fufilled
                dataManager.saveEntry(entry).then(() => {
                      //clear our inputs
                    formManager.clearForm()
                   //and post it to the DOM
                    domRender(activeUser)
                })
            }
        }
        if (evt.target.id.startsWith("editBtn")) {
          const id = evt.target.id.split("!")[1]
          dataManager.editEntry(entry, id).then(()=> {
            formManager.clearForm()
            domRender(activeUser)
            document.getElementById(`editBtn!${id}`).id = "saveBtn"
          })
        }
    })
}

export { saveJournal }