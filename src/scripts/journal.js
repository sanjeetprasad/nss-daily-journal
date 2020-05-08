/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/

fetch("http://localhost:3000/entries") // Fetch from the API
    .then(entries => entries.json() )  // Parse as JSON
    .then(entries => {
        console.table(entries)
        renderJournalEntries(entries)// What should happen when we finally have the array?
    })

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
//renderJournalEntries(journalEntries)