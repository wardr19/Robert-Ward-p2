=======================
    Mini Habit Tracker
    Requirements Document
=======================

    1. Project Description

---------------------------------------------------------
The Mini Habit Tracker is a single-page web app that lets users define their own daily habits (for example, "Drink 8 glasses of water" or "Read for 30 minutes"), mark each habit done or undone, and see live count of how many habits they've completed.  Users can also remove habits they no longer want and reset all habits back to the undone state with a single click.

    2. Feature List (User Requirements)
--------------------------------------------------------------------------------
1. View a list of all defined habits
2. Add a new habit by entering its name
3. Remove any existing habit
4. Mark each habit as done or undone
5. See a live "Habits Completed" counter
6. Reset all habits to undone at once

    3. Technical Tasks (Software Requirements)
----------------------------------------------------------------------------------
Feature: View all defined habits
    HTML:  Create an empty '<ul id="habit-list"></ul>'   as a placeholder
    JS Data: array 'habits[]'; 'renderHabits()' loops and injects '<li>' items

Feature: Add a new habit
    HTML: '<form id="add-habit-form"><input id="habit-name">...</form>'
    JS: on form submit, read input, push '{name,done:false}' to 'habits', then call 'renderHabits()' and 'updateProgress()'

Feature: Remove a habit
    In each rendered '<li>', include a "Remove" button
    JS: on button click, 'habits.splice(index,1)' then re-render and update progress

Feature: Toggle done/undone
    In each '<li>', include a checkbox
    JS: on each checkbox change, flip 'habits[index].done', then re-render and update progress

Feature: Progress counter
    HTML: '<div id= "progress"><div>'
    JS: 'updateProgress()' loops 'habits' to count 'done ===true' and updates '#progress.textContent'

Feature: Reset all habits
    HTML: '<button id="reset-all">Reset All</button'
    JS: on click, set every 'habit.done = false', then re-render and update progress