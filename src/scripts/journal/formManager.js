//html representation and clear functions
const formManager = {
    htmlForm: () => {
        return `<div>
  Title:<br>
  <input type="text" name="Title" id="title"><br>
  Content:<br>
  <input type="textarea" name="Content" id="content"><br>
  Date:<br>
  <input type="date" name="Date" id="date"><br>
  Mood:<br>
  <input type="text" name="Mood" id="mood"><br>
  <button id="saveBtn">Save</button>
</div>`
    },
    clearForm: () => {
        document.querySelector("#title").value =  ""
        document.querySelector("#content").value =  ""
        document.querySelector("#date").value =  ""
        document.querySelector("#mood").value =  ""
    }
}

export {formManager}