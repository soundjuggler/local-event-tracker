const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const notePopup = document.getElementById("notePopup");
const closePopup = document.getElementById("closePopup");
const noteDate = document.getElementById("noteDate");
const noteText = document.getElementById("noteText");
const saveNote = document.getElementById("saveNote");
const notesList = document.getElementById("notesList");

let currentDate = new Date();
let selectedDate;

// Load notes from localStorage
let notes = JSON.parse(localStorage.getItem("calendarNotes")) || {};

function renderCalendar() {
    daysContainer.innerHTML = "";
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    
    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();
    
    monthYear.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

    for (let i = 0; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= lastDate; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        let dateKey = `${year}-${month + 1}-${day}`;

        if (day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayDiv.classList.add("today");
        }

        if (notes[dateKey]) {
            let noteIndicator = document.createElement("span");
            noteIndicator.classList.add("note");
            dayDiv.appendChild(noteIndicator);
        }

        dayDiv.addEventListener("click", () => openNotePopup(dateKey));

        daysContainer.appendChild(dayDiv);
    }

    renderNotesList();
}

function openNotePopup(date) {
    selectedDate = date;
    noteDate.textContent = `Events for ${selectedDate}`;
    noteText.value = notes[selectedDate] || "";
    notePopup.style.display = "flex";
}

saveNote.addEventListener("click", () => {
    if (noteText.value.trim()) {
        notes[selectedDate] = noteText.value.trim();
    } else {
        delete notes[selectedDate];
    }
    localStorage.setItem("calendarNotes", JSON.stringify(notes));
    notePopup.style.display = "none";
    renderCalendar();
});

closePopup.addEventListener("click", () => {
    notePopup.style.display = "none";
});

prevMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Function to update the sidebar list
function renderNotesList() {
    notesList.innerHTML = "";
    Object.keys(notes).forEach(date => {
        let li = document.createElement("li");
        li.textContent = `${date}: ${notes[date]}`;
        li.addEventListener("click", () => openNotePopup(date));
        notesList.appendChild(li);
    });
}

renderCalendar();
