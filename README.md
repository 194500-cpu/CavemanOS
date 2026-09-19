<img width="2527" height="897" alt="image" src="https://github.com/user-attachments/assets/cb08e723-3e5a-467c-acbf-035d3453e4ee" />

# Caveman Web OS

Caveman Web OS is an Easter egg hunting game disguised as a prehistoric computer operating system.
At first, it looks like a simple WebOS with draggable windows and applications. However, different buttons, messages and interactions can reveal hidden achievements. Players can use the Easter Egg Tracker to see what they have discovered and receive clues about secrets they have not found yet. In case anyone is struggling, here is a video of me completing all the achievements: https://www.youtube.com/watch?v=Oa3vsX5gTdY

## Live Website
https://194500-cpu.github.io/CavemanOS/

## Features

* Draggable application windows
* Desktop-style navigation bar and dock
* Live date and time display
* Campfire messaging app
* Realtime messages using Supabase
* Easter Egg Tracker
* Hidden achievements
* Caveman AI called Bob
* Random dialogue and hints from Bob
* Secret phrases and puzzle-based interactions
* Special ending screens
* Achievement visuals that change after discovery
* Custom prehistoric interface and artwork
*Sweet Alert 2 for beautiful alerts
*Three Js rendering of animated 3d meshes

## SPOILER: HOW TO UNLOCK ALL ACHIEVEMENTS:

*Hello Camp!: Send a message in the campfire app <br>
*There is no homepage!: Click the Caveman Web OS logo in the top left corner of the screen. <br>
*STOP CLICKING ME, IM OPEN!: Click an app icon 10 times in a row <Br>
*make Bob warm: The intended way to solve this was to keep sending any message to Caveman AI. He would then provide clues to the code word. If you entered hardgraylightgrayhard into Caveman AI, the achievement would unlock. <br>
*Away from Cave: don't click anything for 1 minute<br>
*Abysmally /play: Enter /play into Caveman AI. When prompted for the time, tell him exactly what the top right corner says. In the top right corner, <br>it should say something like BOB time: (something). You should paste (something), which changes based on time, into the prompt. After this, answering YES will make the 3d Mammoth go RGB. <br>

## How It Works

The WebOS interface is made from HTML elements styled as movable application windows.

JavaScript handles:
* Opening and closing windows
* Dragging windows
* Changing window stacking order
* Updating the clock
* Detecting secret interactions
* Unlocking achievements
* Displaying Bob’s dialogue
* Showing special ending images
* Sending and loading Campfire messages

Supabase is used as the Campfire database. New messages are inserted into a table and retrieved for other visitors to see.

## Why I Made It

People often tell teenagers to get off their screens and explore things.

Caveman Web OS combines both ideas. Instead of exploring a physical cave, players explore a fake operating system where buttons, applications and dialogue may contain hidden secrets.

Cave walls contain drawings, so in Caveman Web OS, almost anything could contain an Easter egg.

I also wanted to build something that felt less like a normal website and more like a small game with personality.

## Challenges

### Making Windows Draggable

I had to calculate the movement of the mouse and update each window’s position while preventing windows from being dragged completely outside the screen.

### Window Layering

When multiple applications are open, the selected window needs to move in front of the others. I implemented this by increasing each selected window’s `z-index`.

### Realtime Campfire Messages

I connected the project to Supabase so messages could be saved and displayed to different visitors.

I also used Supabase realtime updates so new messages could appear without manually refreshing the page.

### Designing Easter Eggs

The achievements needed to be hidden but still possible to discover.

I tried to create clues that gradually lead players toward an answer instead of revealing the solution immediately.

### Deploying With GitHub Pages

I learned how GitHub Pages serves the project from the `docs` folder. I also encountered Git merge conflicts while moving files and learned how local development can behave differently from a deployed website.

## What I Learned

During this project, I learned more about:

* JavaScript event listeners
* DOM manipulation
* Functions and application state
* Asynchronous JavaScript
* Supabase databases
* Realtime database subscriptions
* CSS positioning
* CSS transitions
* Draggable interfaces
* `z-index` and window layering
* Responsive layouts
* Git commits
* Merge conflicts
* GitHub Pages deployment
* Debugging differences between local and deployed websites

## Future Improvements

Some features I may add include:

* More applications
* More Easter eggs
* Persistent achievement progress
* A better dialogue interface for Bob
* More secret endings
* Sound effects
* Improved mobile support
* Better window resizing
* Campfire usernames
* Message moderation and spam prevention
* A proper achievement notification design
* More prehistoric visual effects

## AI Usage
  AI assisted me in writing this README, but all the code was made by me. I also researched on sites like W3schools to learn more about designing a website.
## Credits

Created by **194500-cpu** for Hack Club Stardance.

Font families are provided through Google Fonts.

Campfire database functionality is provided using Supabase.

## License

This project is currently intended as a personal educational project. Please ask before reusing its custom artwork or complete design.
