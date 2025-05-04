# Online Chess Game: A Fun Adventure in Progress! 🎲

Welcome to the Online Chess Game! This is a super exciting computer game where you and a friend can play chess over the internet, like setting up a magical chessboard on your screen and moving pieces with your mouse. It’s a game where two players, each with their own special account, battle to become the chess champion! You can also check a leaderboard to see who’s the best, like a scoreboard in a sports game.

This project is growing, with new features and updates being uploaded in 2-3 batches to make the game even more awesome. The files shared so far (frontend and backend) are part of the first batch, with fixes for the leaderboard, turn display, and a cool new error page that looks just like the rest of the game. This guide is written so even a 10-year-old can understand it, but it’s packed with all the details you need to start playing. Think of it as a treasure map to set up and enjoy this game step by step. Let’s dive in!

---

## Table of Contents

- [What is This Game?](#what-is-this-game)
- [How Was This Game Made?](#how-was-this-game-made)
- [About the Batch Updates](#about-the-batch-updates)
- [Why is This Cool?](#why-is-this-cool)
- [What You Need Before Starting](#what-you-need-before-starting)
- [Setting Up the Game](#setting-up-the-game-like-building-a-toy-castle)
- [Playing the Game](#playing-the-game-your-chess-adventure-begins)
- [Fixing Problems](#fixing-problems-like-fixing-a-broken-toy)
- [All Terminal Commands](#all-terminal-commands-your-game-recipe)
- [What’s Inside the Game?](#whats-inside-the-game-like-peeking-into-a-toy-box)
- [Tips for a Great Game](#tips-for-a-great-game)
- [Need Help?](#need-help)
- [What’s Next?](#whats-next)

---

## What is This Game?

This is a web-based chess game built with cool tools like Node.js, Express, and Socket.IO. It lets you:

- Create an account (like joining a secret chess club).
- Log in to play chess, check your profile, or see other players.
- Play chess with a friend, where one of you moves white pieces and the other moves black pieces.
- See your stats (like how many games you’ve won) on a profile page.
- Check a leaderboard to see who’s the best, like a points table in a sports tournament.
- Upload a profile picture to show off your style!

The game runs on your computer (called a “server”) and you play it in a web browser like Chrome or Firefox at [http://localhost:3000](http://localhost:3000). It’s like opening a game room on your computer that you and a friend can visit using different browsers. If something goes wrong, you’ll see a friendly error page that matches the game’s dark, cool look!

---

## How Was This Game Made?

This game is extra special because it was built with help from Artificial Intelligence (AI)! We used Grok 3, created by xAI, to put together two big parts of the game:

- **Chess Logic:** This is the brain of the chess game, making sure pieces move correctly, turns switch between players, and the game knows when someone wins (like checkmate!). The AI helped combine the chess rules (using a tool called chess.js) with the online part (using Socket.IO) so players can move pieces in real-time.
- **User-Thingy Logic:** This is all about players having accounts, logging in, saving their wins and losses, and showing off their profiles and leaderboard. The AI helped mix this with the chess game so only logged-in players can play, and their scores are saved like a report card.

The AI also helped make sure errors show up nicely, so if something breaks, you get a clear message on a page that looks like the rest of the game!

---

## About the Batch Updates

This project is evolving, with new features being added in 2-3 batches! Each batch brings improvements to make the game more fun and polished. Here’s the plan:

- **Batch 1:** Includes all the core files (frontend and backend) for chess gameplay, user accounts, profiles, leaderboard, and error handling. This batch fixes the leaderboard to show accurate stats, adds clear turn displays (e.g., “Turn: White”), and shows a cool error page when something goes wrong.
- **Batch 2:** May include new features like a chat system, move history, or a prettier design.
- **Batch 3:** Could add advanced features like multiple game rooms, a resign button, or better stats tracking.

Check the GitHub repository (replace with your repo link) for the latest files and commit messages to see what’s new in each batch. If you’re trying the game now, you’re using the first batch with the latest fixes!

---

## Why is This Cool?

Imagine you and your friend want to play chess, but you’re in different houses. This game lets you play together online! Plus:

- You need an account to play, so it’s like a secret club.
- You can see how good you are (your “win rate”) and compare with others on the leaderboard.
- The chessboard moves pieces smoothly when you drag them, like magic!
- The game now clearly shows whose turn it is (e.g., “Turn: White”) in big, bold letters.
- If something goes wrong, you’ll see a friendly error page that looks like the rest of the game, telling you what happened.
- If someone wins, the game keeps track of who’s the champ on the leaderboard.

---

## What You Need Before Starting

Before you can play, you need a few tools, like gathering ingredients to bake a cake. Here’s what you need:

- **A Computer:** Any computer (Windows, Mac, or Linux) works.
- **Node.js:** This is like the engine that makes the game run. It’s a program that understands JavaScript (the language of the game).  
  Download it from [nodejs.org](https://nodejs.org/). Pick the “LTS” version (like choosing a stable bike).
- **MongoDB:** This is like a notebook where the game saves player accounts and scores.  
  Download MongoDB Community Server from [mongodb.com](https://mongodb.com/).  
  Install it and make sure it’s running (we’ll show you how).
- **A Web Browser:** Chrome, Firefox, or Edge. You’ll need two browser windows (one normal, one incognito) to play as two players.
- **A Terminal:** This is like a command center where you type instructions.  
  On Windows, use Command Prompt or PowerShell.  
  On Mac/Linux, use Terminal.
- **A Code Editor (optional):** Like VS Code, to view or edit the game files. Think of it as a notepad for code.

---

## Setting Up the Game: Like Building a Toy Castle

Let’s set up the game step by step. It’s like building a toy castle with clear instructions. Follow each step, and you’ll be playing chess in no time!

### Step 1: Get the Game Files

You need the game files (like puzzle pieces). Clone or download the latest batch from the GitHub repository (replace with your repo link). The folder should be called `chessgame` and include:

- **Backend Files:** `app.js`, `chessgame.js`, `user.js`, `multerconfig.js`.
- **Frontend Files:** `chess.ejs`, `dashboard.ejs`, `error.ejs`, `users.ejs`, `profile.ejs`, `login.ejs`, `leaderboard.ejs`, `profileupload.ejs`, `register.ejs`.
- **Environment File:** `.env` for secret keys and database settings.
- **Folders:** `public/images/uploads/` for profile pictures.

#### Folder Structure (like organizing a toy box):

```
chessgame/
├── config/
│   └── multerconfig.js
├── models/
│   └── user.js
├── public/
│   ├── images/
│   │   └── uploads/
│   └── js/
│       └── chessgame.js
├── views/
│   ├── chess.ejs
│   ├── dashboard.ejs
│   ├── error.ejs
│   ├── leaderboard.ejs
│   ├── login.ejs
│   ├── profile.ejs
│   ├── profileupload.ejs
│   ├── register.ejs
│   └── users.ejs
├── .env
└── app.js
```

**Command to Create the Uploads Folder:**  
In your terminal, go to the chessgame folder (replace `path/to/chessgame` with your folder’s path):

```sh
cd path/to/chessgame
mkdir -p public/images/uploads
```
*What it does:* Creates a folder to store profile pictures, like making a photo album.

---

### Step 2: Set Up the .env File

The game needs a special file called `.env` to keep secret keys safe, like a locked diary. Create a file named `.env` in the chessgame folder and add:

```
# Secret key for signing JSON Web Tokens (JWT) for authentication
JWT_SECRET=your_strong_jwt_secret_key_here

# Secret key for encrypting/decrypting fields (not used yet but included for future)
FIELD_ENCRYPTION_SECRET=your_strong_field_encryption_secret_here

# MongoDB connection string for the chessgame database
DATABASE_URL=mongodb://127.0.0.1:27017/chessgame
```

*What it does:* Sets up keys for logins and the database connection.  
*Tip:* Replace `your_strong_jwt_secret_key_here` and `your_strong_field_encryption_secret_here` with long, random strings (like a secret code). Don’t share this file with anyone!

**Note:** The game code doesn’t yet use the `.env` file. You need to add this line at the top of `app.js`:
```js
require('dotenv').config();
```
And update `app.js` to use the `.env` variables, like:
```js
mongoose.connect(process.env.DATABASE_URL);
const token = jwt.sign({ email: user.email, userid: user._id }, process.env.JWT_SECRET);
```

---

### Step 3: Install Node.js Tools

The game needs some helper tools (like Lego bricks). Install them with this command:

```sh
npm install express socket.io chess.js mongoose bcrypt jsonwebtoken cookie-parser multer dotenv
```
*What it does:* Downloads tools like express (for the website), socket.io (for real-time chess moves), mongoose (for saving player data), and dotenv (for the .env file).  
*Tip:* Run this in the chessgame folder. It creates a `node_modules` folder and `package-lock.json`.

---

### Step 4: Start MongoDB

MongoDB is like a library where the game saves player accounts. You need to start it.

**Command (Windows):**
```sh
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```
*Tip:* Replace 7.0 with your MongoDB version. Keep this terminal open.

**Command (Mac/Linux):**
```sh
mongod
```
*Note:* If MongoDB is installed elsewhere, find its path or install it first.

**Check if MongoDB is Running:**
- You should see messages like “Waiting for connections on port 27017”.
- If you see errors, ensure MongoDB is installed or check MongoDB’s guide.

---

### Step 5: Start the Game Server

Now, let’s turn on the game, like plugging in a toy to make it light up.

```sh
node app.js
```
*What it does:* Starts the game server on your computer at [http://localhost:3000](http://localhost:3000). It’s like opening the game room.  
*Output:* You should see: `Server running on port 3000`  
*Tip:* Keep this terminal open. If you see errors (e.g., MongoDB connection failed), check MongoDB is running.

---

## Playing the Game: Your Chess Adventure Begins!

Now that the game is running, let’s play! It’s like setting up a chessboard and inviting a friend to join. You’ll need two browser windows to act as two players (like two kids playing together).

### Step 1: Open Two Browsers

To play as two different players, you need two separate “game screens” that don’t mix up accounts. Think of it like using two different game controllers.

- **Player 1:** Open Google Chrome (normal window).
- **Player 2:** Open Chrome in incognito mode (Ctrl+Shift+N) or Firefox.

*Why?* Normal and incognito windows keep accounts separate, like two different toy boxes. If you use two normal Chrome windows, they share the same account, and you’ll play against yourself!

---

### Step 2: Create Two Accounts

Each player needs their own account, like signing up for a chess club.

#### For Player 1 (Chrome Normal):

- Go to [http://localhost:3000](http://localhost:3000) in Chrome.
- You’ll see the Login page. Click “Create one” to register.
- Fill in:
  - Username: `player1`
  - Email: `player1@example.com`
  - Password: `password123`
- Click “Create Account”. You’ll go to the Dashboard, which shows buttons like “Play Game” and “View Profile”.
- Check the top of the dashboard—it should say “player1” or show their profile picture.
- If you get an error (like “This email is already registered”), you’ll see a nice error page with a red “Oops!” message. Try a different email.

#### For Player 2 (Chrome Incognito or Firefox):

- Go to [http://localhost:3000](http://localhost:3000) in incognito Chrome or Firefox.
- Click “Create one” to register.
- Fill in:
  - Username: `player2`
  - Email: `player2@example.com`
  - Password: `password123`
- Click “Create Account”. You’ll go to the Dashboard, showing “player2”.
- Confirm it says “player2” to ensure it’s a different account.
- If something goes wrong, the error page will guide you to try again or go back.

*Tip:*  
If you already have accounts, log in with `player1@example.com` (password: `password123`) in Chrome and `player2@example.com` in incognito/Firefox.  
If both dashboards show the same username (e.g., both say “player2”), use incognito mode or a different browser for Player 2.

---

### Step 3: Start the Chess Game

Now, let’s jump into the chess match, like setting up the board and picking sides!

#### For Player 1 (White Pieces):

- In Chrome (normal), on the dashboard, click **Play Game**.
- You’ll see the chessboard with white pieces at the bottom (you’re Player 1, playing white).
- The screen will say “Turn: White” in big, bold letters (white text for white’s turn).
- If you see an error page (e.g., “User not found”), log in again.
- Open the browser console (F12 > Console) to check:
  - You should see: `Received playerRole: w`
  - This means you’re white and can move first.

#### For Player 2 (Black Pieces):

- In incognito Chrome or Firefox, click **Play Game**.
- The chessboard loads, flipped so black pieces are at the bottom (you’re Player 2, playing black).
- The screen will say “Turn: White” (brown text for black’s perspective).
- If you see an error page, try refreshing or logging in again.
- Check the console:
  - You should see: `Received playerRole: b`
  - The board is ready, and it’s white’s turn.

---

#### What’s Happening?

- The game picks Player 1 as white and Player 2 as black, like choosing teams.
- The chessboard is a grid with light and dark squares, and pieces look like ♙ (white pawn) or ♟ (black pawn).

---

### Step 4: Play Chess!

You’re now in the game, like knights and queens ready for battle!

- **Player 1 (White):**
  - Click and drag a white piece (e.g., a pawn) to a new square (like moving a pawn from e2 to e4).
  - If the move is okay, both players’ boards update, and the screen says “Turn: Black” (in brown text).
  - If it’s wrong, a red message appears briefly above the board (e.g., “Invalid move. Please try again.”).

- **Player 2 (Black):**
  - Drag a black piece (e.g., pawn from e7 to e5) when it’s your turn.
  - The boards update, and it’s “Turn: White” again (in white text).

Keep taking turns. The screen always shows whose turn it is or if someone wins (like “Checkmate! Black wins!”).

**Errors:**
- If something breaks (e.g., you try to join a game twice with the same account), you’ll go to the error page with a message like “You are already playing as white.”
- Click “Go to Dashboard” or “Go Back” to continue.

**Winning:**
- If you checkmate the opponent (trap their king), you win! The screen shows a message, then takes you to the error page with the win message.
- If someone leaves (closes the browser), the other player wins, and you’ll see the error page.
- The game saves your wins and losses, updating the leaderboard like a report card.

*Tip:*  
To go back, click “Back to Dashboard” to return to the main menu.  
Start a new game by clicking “Play Game” again.

---

### Step 5: Check Your Profile and Leaderboard

After playing, see how awesome you are!

#### Profile:

- On the dashboard, click **View Profile**.
- You’ll see your username (e.g., “player1”), profile picture (or a letter if you didn’t upload one), and stats:
  - Games Played: How many games you’ve finished.
  - Wins: How many you won.
  - Losses: How many you lost.
  - Win Rate: Your winning percentage (like a batting average).
- Click “Upload Picture” to add a cool photo!

#### Leaderboard:

- Click **Leaderboard** to see a table, like a sports scoreboard.
- It shows all players, ranked by win rate (best players at the top).
- Columns show: Rank, Player, Games, Wins, Losses, Win Rate (e.g., 75%).
- If someone hasn’t played yet, their win rate shows as 0%.

#### All Users:

- Click **All Users** to see everyone in the game, with their usernames and pictures.

---

## Fixing Problems: Like Fixing a Broken Toy

Sometimes, things don’t work right, like a toy that won’t light up. Here are common issues and how to fix them, explained simply.

### Problem 1: Both Browsers Show the Same Player

**What’s Happening?**  
You log in as “player1” in one window and “player2” in another, but both show “player2” (or the same name).

**Why?**  
If you use two normal Chrome windows, they share the same “key” (a cookie) that tells the game who you are. The second login replaces the first.

**Fix:**
- Use Chrome incognito (Ctrl+Shift+N) or Firefox for Player 2.
- After logging in, check the dashboard to confirm “player1” in one window and “player2” in the other.
- Clear cookies in both browsers:
  - Chrome: Settings > Privacy and security > Clear browsing data > Cookies.
  - Firefox: Settings > Privacy & Security > Cookies and Site Data > Clear Data.

**Retry logging in with different browsers.**

**Check:**
- In the terminal, look for:  
  `Assigned white to: <userId1>`  
  `Assigned black to: <userId2>`
- The `<userId1>` and `<userId2>` should be different.
- In the browser console (F12 > Console), see `playerRole: w` in one window and `playerRole: b` in the other.

---

### Problem 2: Leaderboard Shows Wrong Stats

**What’s Happening?**  
The leaderboard doesn’t show the right wins, losses, or win rates.

**Why?**  
The game might not be saving stats correctly, or the leaderboard isn’t sorting properly.

**Fix:**
- Play a game to completion (e.g., checkmate or disconnect).
- Check the terminal for errors like “Failed to update stats for player”.
- Visit [http://localhost:3000/leaderboard](http://localhost:3000/leaderboard) and refresh the page.
- If stats are still wrong, restart the server: `node app.js`
- Ensure MongoDB is running: `mongod`

---

### Problem 3: Turn Display Isn’t Clear

**What’s Happening?**  
The game doesn’t show “Turn: White” or “Turn: Black” clearly.

**Why?**  
The turn messages might not be updating or are hard to see.

**Fix:**
- Start a new game and check the gameStatus text above the chessboard.
- It should say “Turn: White” (white text) or “Turn: Black” (brown text) in big, bold letters.
- If it’s blank, check the console (F12 > Console) for errors like gameStatus not received.
- Restart the server: `node app.js`
- Refresh both browsers.

---

### Problem 4: Error Page Shows Up Unexpectedly

**What’s Happening?**  
You see the error page with a message like “Oops! Something went wrong.”

**Why?**  
Something broke, like trying to log in with wrong details or joining a game incorrectly.

**Fix:**
- Read the error message on the page (e.g., “Invalid email or password”).
- Click “Go to Dashboard” to try again or “Go Back” to return to the previous page.
- Check the terminal for errors (e.g., “MongoServerError” means MongoDB isn’t running).
- Restart MongoDB if needed: `mongod`
- Restart the server: `node app.js`

---

### Problem 5: Game Won’t Start

**What’s Happening?**  
You click “Play Game”, but you see an error page or nothing happens.

**Why?**  
The game might not connect to the server, or MongoDB isn’t running.

**Fix:**
- Ensure the server is running (`node app.js` shows “Server running on port 3000”).
- Check MongoDB is on: `mongod`
- Open the browser console (F12 > Console) and look for:
  - Socket.IO connected: `<socket_id>` (good).
  - Socket.IO error (bad—server isn’t running or browser can’t connect).
- Restart the server: `node app.js`
- Refresh both browsers.

---

### Problem 6: Can’t Move Pieces

**What’s Happening?**  
You try to drag a piece, but it won’t move, and a red message appears.

**Why?**  
You might be trying to move the wrong color (e.g., black pieces when it’s white’s turn).

**Fix:**
- Check the game status (e.g., “Turn: White”). Only white can move if it’s white’s turn.
- Ensure you’re the right player (white = Player 1, black = Player 2).
- Console check: Look for `invalidMove` in the browser console. If present, the move wasn’t allowed by chess rules.

---

### Problem 7: Server Crashes

**What’s Happening?**  
The terminal shows an error, and the game stops.

**Why?**  
Could be a MongoDB issue or a code error.

**Fix:**
- Read the error in the terminal.
- If it says “MongoServerError”, MongoDB isn’t running. Start it: `mongod`
- If it’s something else, copy the error and ask for help.
- Restart the server: `node app.js`

---

## All Terminal Commands: Your Game Recipe

Here’s every command you’ll need, like steps in a recipe:

**Go to the Game Folder:**
```sh
cd path/to/chessgame
```
Moves you to the game’s folder (replace `path/to/chessgame` with your folder’s path).

**Create the Uploads Folder:**
```sh
mkdir -p public/images/uploads
```
Makes a place for profile pictures.

**Install Tools:**
```sh
npm install express socket.io chess.js mongoose bcrypt jsonwebtoken cookie-parser multer dotenv
```
Gets all the game’s building blocks.

**Start MongoDB (in a separate terminal):**

- **Windows:**
  ```sh
  "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
  ```
- **Mac/Linux:**
  ```sh
  mongod
  ```
Starts the player data library.

**Start the Game:**
```sh
node app.js
```
Opens the game room on [http://localhost:3000](http://localhost:3000).

---

## What’s Inside the Game? Like Peeking into a Toy Box

Here’s what each file does, explained simply:

- **app.js:** The game’s brain. It sets up the website, handles logins, manages chess moves, updates the leaderboard, and shows the error page when something breaks.
- **chessgame.js:** Makes the chessboard appear in your browser, lets you drag pieces, shows whose turn it is (e.g., “Turn: White”), and displays errors nicely.
- **user.js:** A blueprint for player accounts, storing your username, email, password, and game stats (wins, losses, win rate).
- **multerconfig.js:** Helps save your profile picture, like a camera for your game character.
- **views/chess.ejs:** The chessboard page where you play, showing the turn in big, bold letters.
- **views/dashboard.ejs:** The main menu with buttons like “Play Game” and “Leaderboard”.
- **views/error.ejs:** A cool-looking page that shows up when something goes wrong, with a message like “Oops! Try again!” and buttons to go back.
- **views/users.ejs:** Lists all players, like a class roster.
- **views/profile.ejs:** Shows your picture, name, and stats, like a player card.
- **views/login.ejs:** Where you log in to the game.
- **views/leaderboard.ejs:** Shows who’s winning, like a sports ranking, with accurate stats.

---

## Tips for a Great Game

- **Use Different Browsers:** Always use incognito mode or a different browser (e.g., Chrome and Firefox) for Player 2 to keep accounts separate.
- **Check the Console:** If something’s wrong, press F12 in the browser and look at the Console tab. It’s like a game’s debug screen.
- **Have Fun!:** Try to checkmate your friend, and check the leaderboard to see who’s the chess master.
- **Save Your Progress:** The game saves your wins and losses automatically, so you can come back later.

---

## Need Help?

If you get stuck, it’s okay! Here’s what to do:

- **Read the Error:** Look at the terminal or browser console (F12 > Console) for clues.
- **Try Again:** Restart the server (`node app.js`) or refresh the browser.
- **Ask for Help:** Share the error message with a friend, teacher, or open an issue on this repo. Include:
  - What you did (e.g., “I clicked Play Game”).
  - What went wrong (e.g., “Both players are player1”).
  - Any error messages from the terminal or browser.

---

## What’s Next?

You’re now a chess game master! If you want to make the game even cooler, you could:

- Add a chat box so players can talk during the game.
- Let multiple chess games happen at once (like different game rooms).
- Add a “resign” button to give up a game early.
- Show a list of moves made in the game, like a game replay.

---

**Have fun playing, and may your knights and queens lead you to victory! 🏆**
