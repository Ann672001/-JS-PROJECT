# -JS-PROJECT

TO-DO LIST APP

1.Adding Tasks:
The user can enter a task in the input box.
Clicking the "Add" button adds the task to the list.
If the input box is empty and the "Add" button is clicked, an alert is shown to remind the user to enter a task.

2.Removing Tasks:
Each task in the list is displayed with a delete icon (✗).
Clicking the delete icon (✗) removes the corresponding task from the list.

3.Checking Tasks:
Clicking on a task in the list toggles its "checked" status.
Checked tasks are visually distinguished by a strikethrough style.

4.Local Storage:
The app uses localStorage to store the list of tasks.
When tasks are added or removed, the data is saved to localStorage.
When the page is refreshed, the saved data is retrieved from localStorage and displayed in the list, so tasks are not lost.

Here's a breakdown of the key functions:

1.addTask(): Adds a new task to the list when the "Add" button is clicked.

2.Event listener on listcontainer: Handles checking and deleting tasks.

3.saveData(): Stores the task list in the browser's localStorage.

4.showTask(): Retrieves and displays the task list from localStorage when the page is loaded or refreshed.
