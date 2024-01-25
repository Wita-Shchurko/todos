# Todos app ✔️

[Open app](https://wita-shchurko.github.io/todos)

The Todos application is built using the React library and TypeScript, leveraging an API(https://mate.academy/students-api) for task management. Users can perform various operations such as adding, editing (by double-clicking on the task name), deleting tasks, marking tasks as completed, and clearing the list of completed tasks.

To prevent the addition of duplicate tasks, there is a validation check that displays an error message if a user attempts to add a task that already exists in the list. Users can close the error message by clicking on the corresponding button, or the messages will automatically disappear after 3 seconds.

Tasks can be filtered using the "All," "Active," and "Completed" buttons, allowing users to view specific subsets of their tasks.

When adding a new task, leading and trailing spaces are trimmed. Additionally, the application enforces the rule that an empty string cannot be added as a task.

After sending a POST request to the API, the input block is disabled until a response is received from the API, preventing further user input during this time.