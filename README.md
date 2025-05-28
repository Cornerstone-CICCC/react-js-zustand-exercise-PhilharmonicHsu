[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/R90hgPeP)
# React JS - Zustand Exercise

**Goal:** Implement global state management with React and Zustand.

## Instructions 📖

1. Create a React project called by running `npm create vite@latest zustand-exercise`.
2. Create a `user.store.ts` inside your `stores` directory that has these states:

    - `users` (array of User)
    - `addUser` (function)
    - `deleteUser` (function)
  
   Here are the type `User` object properties:

    - `firstname` (string)
    - `lastname` (string)
    - `age` (number)
    - `hobbies` (string array)

4. In your `User.tsx` component, output all the list of users in a list.
5. In each list, create a **Delete** button which triggers the `deleteUser` function from the store.
6. Create a form below the list with three input fields (one for firstname, one for lastname, and one for age).
7. Create a list of checkboxes for hobbies.
8. Clicking the **Add User** button will add the new user to the users array.
9. *BONUS:* Try wrapping your store using the `persist` function of Zustand so that the data gets stored in local storage.
10. Commit and push your changes.

Good luck! 🎉🎉🎉
