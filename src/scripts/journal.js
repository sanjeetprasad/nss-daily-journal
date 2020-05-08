/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

const JournalEntries = [
    {
    date: "5/4/20",
    concepts: "Es6 modules",
    entry: "keep track of the study",
    mood: "hsppy"
},

{
    date: "4/15/20",
    concepts: "Styling with css, Semantic HTML, Debugger",
    entry: "I got so much of deep knowledge of css and html and debugger was amazing",
    mood: "happy"
},

{
    date: "4/25/20",
    concepts: "DOM Manipulating, Object, Function, API and Fetching data",
    entry: "I enjoy learning object, Function,API and fetching data",
    mood: "happy"
}
]

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <h1>${journalEntry.concepts}</h1>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.date}</p>
    <p>${journalEntry.mood}</p>
    `
}

const renderJournalEntries = (entries) => {
    for (let i = 0; i < entries.length; i++) {
        const journalElement = document.querySelector(".entryLog");
        journalElement.innerHTML += makeJournalEntryComponent(entries[i]);
        
    }

}
renderJournalEntries(journalEntries)