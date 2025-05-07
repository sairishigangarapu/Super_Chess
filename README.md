# Super Awesome Chess Adventure! 🏰♟️

Hey there, kiddo! Welcome to the Super Awesome Chess Adventure, a magical computer game where you and a buddy can play chess on the internet! It’s like setting up a giant chessboard on your computer screen, dragging knights and queens with your mouse, and battling to be the chess champion. You get your own special account, like joining a secret club, and you can see who’s the best player on a cool leaderboard, like a scoreboard at a sports game. If something goes wrong, a friendly error page pops up to help you out, looking just as cool as the rest of the game!

This game is growing bigger and better, with new stuff being added in 2-3 big updates (like getting new toys in batches). Right now, you’ve got the first batch, with a fixed leaderboard, clear turn signs (like “White’s Turn!”), and a super nice error page that matches the game’s dark, starry look. This guide is written just for you, a 10-year-old chess fan, to make setting up and playing as easy as building a LEGO castle. Let’s jump into the adventure!

---

## What’s in This Guide? 📖

- What’s This Chess Game?
- How Did We Make It?
- What Are These Batches?
- Why Is This Game So Cool?
- Stuff You Need to Play
- Setting Up Your Chess Kingdom
- Playing the Game
- Fixing Stuff That Goes Wrong
- Magic Commands for Your Computer
- What’s Inside the Game?
- Tips to Be a Chess Star
- Help! I’m Stuck!
- What’s Coming Next?

---

## What’s This Chess Game?

This is a chess game you play on a website that you run on your computer. It’s like having a chessboard that lives in your browser (like Chrome or Firefox). Here’s what you can do:

- **Make an Account:** Sign up with a username and password, like getting a ticket to a fun park.
- **Play Chess:** Battle a friend, where one of you moves white pieces and the other moves black pieces. Drag pieces to make moves!
- **See Your Score:** Check how many games you’ve won or lost, like getting a report card for chess.
- **Look at the Leaderboard:** See who’s the best chess player, like a list of top soccer players.
- **Add a Picture:** Upload a cool photo for your profile, like putting a sticker on your backpack.
- **Get Help from Errors:** If something breaks, a friendly page shows up with a message like “Oops! Try again!” and buttons to go back.

You play this game by going to [http://localhost:3000](http://localhost:3000) in your browser, which is like opening a secret door on your computer. You and your friend need two browsers (like two game controllers) to play together.

---

## How Did We Make It?

This game is super special because it was built with a helper called Grok 3, a smart robot brain made by xAI. It’s like having a wizard help us build a castle! Here’s how Grok 3 helped:

- **Chess Magic:** Made the chessboard work so pieces move right, turns switch (like “White’s Turn!”), and the game knows when you win (like shouting “Checkmate!”).
- **Player Stuff:** Set up accounts so you can log in, save your wins, and show off on the leaderboard.
- **Error Fixes:** Added a cool error page that looks like the rest of the game, so if something goes wrong, it’s not scary—it’s like a friendly guide saying, “Let’s try that again!”

Grok 3 mixed all these parts together to make a game that’s fun and easy to play.

---

## What Are These Batches?

The game is getting better in 2-3 big updates, like getting new toy sets over time. Each update adds more fun stuff! Here’s the plan:

- **Batch 1 (What You Have Now):** The main game with chess, accounts, profiles, a leaderboard, and a shiny error page. It fixes the leaderboard to show the right scores, makes turns super clear (like “Black’s Turn!”), and shows a cool error page when things break.
- **Batch 2:** Might add a chat box to talk to your friend, a list of moves you made, or fancier pictures.
- **Batch 3:** Could let you play in different game rooms, give up a game nicely, or track even more stats.

You can find all the game files and updates in our GitHub toy box (ask a grown-up to replace “yourusername” with the real link). Check there to see what’s new!

---

## Why Is This Game So Cool?

This game is like a treasure chest full of fun! Here’s why you’ll love it:

- Play chess with a friend, even if they’re far away, like sending moves through a magic portal.
- Your account keeps your games safe, like a diary for your chess adventures.
- The leaderboard shows who’s the chess king or queen, like a trophy case.
- Drag pieces on the board, and they move smoothly, like playing with real toys.
- Big, bold words tell you whose turn it is (e.g., “White’s Turn!”), so you never get confused.
- If something goes wrong, a friendly error page pops up, looking dark and cool like the rest of the game, with buttons to go back or try again.
- Upload a picture to make your profile awesome, like decorating your room!

---

## Stuff You Need to Play

Before you start, you need a few things, like gathering tools to build a fort. Here’s your checklist:

- **A Computer:** Any computer (Windows, Mac, or one with Linux) is fine, like a trusty spaceship.
- **Node.js:** A program that makes the game work, like batteries for a toy. Get it from [nodejs.org](https://nodejs.org/) (pick the “LTS” version, like choosing a strong bike).
- **MongoDB:** A place to save player accounts, like a magic notebook. Download it from [mongodb.com](https://mongodb.com/).
- **Two Web Browsers:** Like Chrome and Firefox, or Chrome and Chrome’s “secret mode” (incognito). You need two to play as two players.
- **A Terminal:** A box where you type commands, like a wizard’s spellbook.
  - Windows: Use Command Prompt (search “cmd”) or PowerShell.
  - Mac: Use Terminal (search “Terminal”).
  - Linux: Use Terminal.
- **A Grown-Up Helper (optional):** If you’re new to computers, ask a parent or older sibling to help with setup, like having a guide for a board game.
- **A Code Editor (optional):** Like VS Code, to look at game files. It’s like a coloring book for code.

---

## Setting Up Your Chess Kingdom

Let’s build your chess game, like putting together a toy castle! Follow these steps, and you’ll be playing soon. Ask a grown-up if you get stuck.

### Step 1: Get the Game Pieces

You need the game files, like puzzle pieces for your castle. Ask a grown-up to download them from our GitHub toy box (replace “yourusername” with the real link). They can “clone” or download a folder called chessgame.

Inside chessgame, you’ll find:

- Game Files: Like `app.js` (the game’s brain), `chessgame.js` (the chessboard), and `user.js` (player accounts).
- Picture Pages: Files like `chess.ejs` (the chessboard page), `error.ejs` (the help page), and `dashboard.ejs` (the main menu).
- Secret File: A file called `.env` for special keys.
- Folders: `public/images/uploads/` for profile pictures.

**What Your Folder Looks Like (like a toy box):**
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

**Make a Picture Folder:**  
Open your terminal (like a magic spellbook) and type this to go to the chessgame folder (replace “path/to/chessgame” with where your folder is):

```sh
cd path/to/chessgame
mkdir -p public/images/uploads
```

What it does: Makes a folder for profile pictures, like a photo album for your chess club.  
Tip: If you see “command not found,” ask a grown-up to check your terminal.

---

### Step 2: Set Up the Secret Key

The game needs a file called `.env`, like a secret code to keep things safe. Ask a grown-up to make a file named `.env` in the chessgame folder and put this inside:

```
# Secret key for signing JSON Web Tokens (JWT) for authentication
JWT_SECRET=supersecretkey123

# Secret key for encrypting/decrypting fields (not used yet but ready for later)
FIELD_ENCRYPTION_SECRET=anothersecret456

# MongoDB connection string for the chessgame database
DATABASE_URL=mongodb://127.0.0.1:27017/chessgame
```

What it does: Gives the game a special key to lock your account and a map to find the player notebook (MongoDB).  
Tip: The JWT_SECRET and FIELD_ENCRYPTION_SECRET can be any long, silly words (like “pizzacats123”), but don’t tell anyone! The DATABASE_URL should stay as is.

---

### Step 3: Get the Game Toys

The game needs some helper toys, like blocks for your castle. Open your terminal in the chessgame folder and type:

```sh
npm install express socket.io chess.js mongoose bcrypt jsonwebtoken cookie-parser multer dotenv
```

What it does: Downloads toys like express (makes the website), socket.io (sends moves fast), and dotenv (reads the secret file).  
What you’ll see: A new folder called `node_modules` and a file called `package-lock.json`, like a box of new toys.  
Tip: This might take a minute, like waiting for cookies to bake. If it stops, ask a grown-up to check your internet.

---

### Step 4: Turn On the Player Notebook

MongoDB is like a magic notebook where the game saves your account and scores. You need to turn it on, like opening a storybook.

**For Windows:**  
Open a new terminal and type:
```sh
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```
What it does: Starts MongoDB, like unlocking the notebook.  
Tip: If you installed MongoDB somewhere else, ask a grown-up to find the right path. Change “7.0” to your MongoDB version (like “6.0”).  
What you’ll see: Words like “Waiting for connections on port 27017”. Keep this terminal open!

**For Mac or Linux:**  
Type:
```sh
mongod
```
What it does: Same as Windows, but easier.  
Tip: If it says “command not found,” ask a grown-up to install MongoDB or check mongodb.com.

**Check It’s Working:**  
You should see “port 27017” in the terminal, like a green light.  
If it doesn’t work, ask a grown-up to make sure MongoDB is installed.

---

### Step 5: Start the Chess Game

Now, let’s light up the game, like turning on a toy robot! In the chessgame folder, type:

```sh
node app.js
```

What it does: Opens the game at [http://localhost:3000](http://localhost:3000), like starting a party in your computer.  
What you’ll see: `Server running on port 3000`  
Tip: Keep this terminal open, like keeping the party going. If you see errors (like “Cannot connect to MongoDB”), make sure MongoDB is running.

---

## Playing the Game

Yay! Your chess kingdom is ready! Let’s play, like setting up a chessboard and challenging a friend. You’ll need two browsers to play as two players, like having two game controllers.

### Step 1: Open Two Browsers

You and your friend need separate screens, like two TVs for a game. Here’s how:

- **Player 1:** Use Google Chrome (normal window, not secret mode).
- **Player 2:** Use Chrome in secret mode (press Ctrl+Shift+N) or Firefox.

Why?: Normal Chrome and secret Chrome keep accounts separate, like two different toy boxes. If you use two normal Chrome windows, you’ll play against yourself by mistake!

---

### Step 2: Make Two Accounts

Each player needs their own account, like getting a ticket to the chess club.

**Player 1 (Chrome Normal):**

- Open Chrome and go to [http://localhost:3000](http://localhost:3000).
- You’ll see a Login page. Click “Create one” to sign up.
- Fill in:
  - Username: SuperKnight
  - Email: superknight@example.com
  - Password: chessrocks123
- Click “Create Account”. You’ll go to the Dashboard, with buttons like “Play Game” and “View Profile”.
- Check the dashboard—it should say “SuperKnight” or show your picture.
- If something goes wrong, a cool error page will say “Oops!” (like “This email is already used”). Try a different email or click “Go Back”.

**Player 2 (Chrome Secret Mode or Firefox):**

- Open secret Chrome (Ctrl+Shift+N) or Firefox and go to [http://localhost:3000](http://localhost:3000).
- Click “Create one”.
- Fill in:
  - Username: QueenStar
  - Email: queenstar@example.com
  - Password: chessrules123
- Click “Create Account”. You’ll see the dashboard with “QueenStar”.
- Make sure it says “QueenStar”, not “SuperKnight”.
- If you see an error page, try again or click “Go to Dashboard”.

Tip:  
If you already have accounts, log in with superknight@example.com (password: chessrocks123) in Chrome and queenstar@example.com (password: chessrules123) in secret Chrome/Firefox.  
If both screens show the same name (like “SuperKnight”), use secret mode or Firefox for Player 2.

---

### Step 3: Start the Chess Battle

Time to play chess, like knights charging into battle!

**Player 1 (White Pieces):**

- In Chrome (normal), on the dashboard, click Play Game.
- You’ll see a chessboard with white pieces at the bottom (you’re white, so you go first).
- Big, bold words above the board say “White’s Turn!” in white letters.
- If you see an error page (like “Please log in”), log in again.
- Press F12 and click “Console” to check:
  - You should see: Received playerRole: w (means you’re white).

**Player 2 (Black Pieces):**

- In secret Chrome or Firefox, click Play Game.
- The chessboard loads, flipped so black pieces are at the bottom (you’re black).
- It says “White’s Turn!” in brown letters (white goes first).
- If you see an error page, refresh or log in again.
- Check the console (F12 > Console):
  - You should see: Received playerRole: b (means you’re black).

What’s Happening?:  
The game makes Player 1 white and Player 2 black, like picking teams.  
The board has light and dark squares, with pieces like ♙ (white pawn) and ♟ (black pawn).

---

### Step 4: Play Like a Chess Wizard!

Now you’re in the game, like a knight ready to charge!

- **Player 1 (White):** Click and drag a white piece (like a pawn) to a new square (e.g., pawn from e2 to e4). If the move is good, both boards update, and it says “Black’s Turn!” in# Super Awesome Chess Adventure! 🏰♟️

Hey there, kiddo! Welcome to the Super Awesome Chess Adventure, a magical computer game where you and a buddy can play chess on the internet! It’s like setting up a giant chessboard on your computer screen, dragging knights and queens with your mouse, and battling to be the chess champion. You get your own special account, like joining a secret club, and you can see who’s the best player on a cool leaderboard, like a scoreboard at a sports game. If something goes wrong, a friendly error page pops up to help you out, looking just as cool as the rest of the game!

This game is growing bigger and better, with new stuff being added in 2-3 big updates (like getting new toys in batches). Right now, you’ve got the first batch, with a fixed leaderboard, clear turn signs (like “White’s Turn!”), and a super nice error page that matches the game’s dark, starry look. This guide is written just for you, a 10-year-old chess fan, to make setting up and playing as easy as building a LEGO castle. Let’s jump into the adventure!

---

## What’s in This Guide? 📖

- What’s This Chess Game?
- How Did We Make It?
- What Are These Batches?
- Why Is This Game So Cool?
- Stuff You Need to Play
- Setting Up Your Chess Kingdom
- Playing the Game
- Fixing Stuff That Goes Wrong
- Magic Commands for Your Computer
- What’s Inside the Game?
- Tips to Be a Chess Star
- Help! I’m Stuck!
- What’s Coming Next?

---

## What’s This Chess Game?

This is a chess game you play on a website that you run on your computer. It’s like having a chessboard that lives in your browser (like Chrome or Firefox). Here’s what you can do:

- **Make an Account:** Sign up with a username and password, like getting a ticket to a fun park.
- **Play Chess:** Battle a friend, where one of you moves white pieces and the other moves black pieces. Drag pieces to make moves!
- **See Your Score:** Check how many games you’ve won or lost, like getting a report card for chess.
- **Look at the Leaderboard:** See who’s the best chess player, like a list of top soccer players.
- **Add a Picture:** Upload a cool photo for your profile, like putting a sticker on your backpack.
- **Get Help from Errors:** If something breaks, a friendly page shows up with a message like “Oops! Try again!” and buttons to go back.

You play this game by going to [http://localhost:3000](http://localhost:3000) in your browser, which is like opening a secret door on your computer. You and your friend need two browsers (like two game controllers) to play together.

---

## How Did We Make It?

This game is super special because it was built with a helper called Grok 3, a smart robot brain made by xAI. It’s like having a wizard help us build a castle! Here’s how Grok 3 helped:

- **Chess Magic:** Made the chessboard work so pieces move right, turns switch (like “White’s Turn!”), and the game knows when you win (like shouting “Checkmate!”).
- **Player Stuff:** Set up accounts so you can log in, save your wins, and show off on the leaderboard.
- **Error Fixes:** Added a cool error page that looks like the rest of the game, so if something goes wrong, it’s not scary—it’s like a friendly guide saying, “Let’s try that again!”

Grok 3 mixed all these parts together to make a game that’s fun and easy to play.

---

## What Are These Batches?

The game is getting better in 2-3 big updates, like getting new toy sets over time. Each update adds more fun stuff! Here’s the plan:

- **Batch 1 (What You Have Now):** The main game with chess, accounts, profiles, a leaderboard, and a shiny error page. It fixes the leaderboard to show the right scores, makes turns super clear (like “Black’s Turn!”), and shows a cool error page when things break.
- **Batch 2:** Might add a chat box to talk to your friend, a list of moves you made, or fancier pictures.
- **Batch 3:** Could let you play in different game rooms, give up a game nicely, or track even more stats.

You can find all the game files and updates in our GitHub toy box (ask a grown-up to replace “yourusername” with the real link). Check there to see what’s new!

---

## Why Is This Game So Cool?

This game is like a treasure chest full of fun! Here’s why you’ll love it:

- Play chess with a friend, even if they’re far away, like sending moves through a magic portal.
- Your account keeps your games safe, like a diary for your chess adventures.
- The leaderboard shows who’s the chess king or queen, like a trophy case.
- Drag pieces on the board, and they move smoothly, like playing with real toys.
- Big, bold words tell you whose turn it is (e.g., “White’s Turn!”), so you never get confused.
- If something goes wrong, a friendly error page pops up, looking dark and cool like the rest of the game, with buttons to go back or try again.
- Upload a picture to make your profile awesome, like decorating your room!

---

## Stuff You Need to Play

Before you start, you need a few things, like gathering tools to build a fort. Here’s your checklist:

- **A Computer:** Any computer (Windows, Mac, or one with Linux) is fine, like a trusty spaceship.
- **Node.js:** A program that makes the game work, like batteries for a toy. Get it from [nodejs.org](https://nodejs.org/) (pick the “LTS” version, like choosing a strong bike).
- **MongoDB:** A place to save player accounts, like a magic notebook. Download it from [mongodb.com](https://mongodb.com/).
- **Two Web Browsers:** Like Chrome and Firefox, or Chrome and Chrome’s “secret mode” (incognito). You need two to play as two players.
- **A Terminal:** A box where you type commands, like a wizard’s spellbook.
  - Windows: Use Command Prompt (search “cmd”) or PowerShell.
  - Mac: Use Terminal (search “Terminal”).
  - Linux: Use Terminal.
- **A Grown-Up Helper (optional):** If you’re new to computers, ask a parent or older sibling to help with setup, like having a guide for a board game.
- **A Code Editor (optional):** Like VS Code, to look at game files. It’s like a coloring book for code.

---

## Setting Up Your Chess Kingdom

Let’s build your chess game, like putting together a toy castle! Follow these steps, and you’ll be playing soon. Ask a grown-up if you get stuck.

### Step 1: Get the Game Pieces

You need the game files, like puzzle pieces for your castle. Ask a grown-up to download them from our GitHub toy box (replace “yourusername” with the real link). They can “clone” or download a folder called chessgame.

Inside chessgame, you’ll find:

- Game Files: Like `app.js` (the game’s brain), `chessgame.js` (the chessboard), and `user.js` (player accounts).
- Picture Pages: Files like `chess.ejs` (the chessboard page), `error.ejs` (the help page), and `dashboard.ejs` (the main menu).
- Secret File: A file called `.env` for special keys.
- Folders: `public/images/uploads/` for profile pictures.

**What Your Folder Looks Like (like a toy box):**
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

**Make a Picture Folder:**  
Open your terminal (like a magic spellbook) and type this to go to the chessgame folder (replace “path/to/chessgame” with where your folder is):

```sh
cd path/to/chessgame
mkdir -p public/images/uploads
```

What it does: Makes a folder for profile pictures, like a photo album for your chess club.  
Tip: If you see “command not found,” ask a grown-up to check your terminal.

---

### Step 2: Set Up the Secret Key

The game needs a file called `.env`, like a secret code to keep things safe. Ask a grown-up to make a file named `.env` in the chessgame folder and put this inside:

```
# Secret key for signing JSON Web Tokens (JWT) for authentication
JWT_SECRET=supersecretkey123

# Secret key for encrypting/decrypting fields (not used yet but ready for later)
FIELD_ENCRYPTION_SECRET=anothersecret456

# MongoDB connection string for the chessgame database
DATABASE_URL=mongodb://127.0.0.1:27017/chessgame
```

What it does: Gives the game a special key to lock your account and a map to find the player notebook (MongoDB).  
Tip: The JWT_SECRET and FIELD_ENCRYPTION_SECRET can be any long, silly (like “pizzacats123”), but don’t tell anyone! The DATABASE_URL should stay as is.

---

### Step 3: Get the Game Toys

The game needs some helper toys, like blocks for your castle. Open your terminal in the chessgame folder and type:

```sh
npm install express socket.io chess.js mongoose bcrypt jsonwebtoken cookie-parser multer dotenv
```

What it does: Downloads toys like express (makes the website), socket.io (sends moves fast), and dotenv (reads the secret file).  
What you’ll see: A new folder called `node_modules` and a file called `package-lock.json`, like a box of new toys.  
Tip: This might take a minute, like waiting for cookies to bake. If it stops, ask a grown-up to check your internet.

---

### Step 4: Turn On the Player Notebook

MongoDB is like a magic notebook where the game saves your account and scores. You need to turn it on, like opening a storybook.

**For Windows:**  
Open a new terminal and type:
```sh
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```
What it does: Starts MongoDB, like unlocking the notebook.  
Tip: If you installed MongoDB somewhere else, ask a grown-up to find the right path. Change “7.0” to your MongoDB version (like “6.0”).  
What you’ll see: Words like “Waiting for connections on port 27017”. Keep this terminal open!

**For Mac or Linux:**  
Type:
```sh
mongod
```
What it does: Same as Windows, but easier.  
Tip: If it says “command not found,” ask a grown-up to install MongoDB or check mongodb.com.

**Check It’s Working:**  
You should see “port 27017” in the terminal, like a green light.  
If it doesn’t work, ask a grown-up to make sure MongoDB is installed.

---

### Step 5: Start the Chess Game

Now, let’s light up the game, like turning on a toy robot! In the chessgame folder, type:

```sh
node app.js
```

What it does: Opens the game at [http://localhost:3000](http://localhost:3000), like starting a party in your computer.  
What you’ll see: `Server running on port 3000`  
Tip: Keep this terminal open, like keeping the party going. If you see errors (like “Cannot connect to MongoDB”), make sure MongoDB is running.

---

## Playing the Game

Yay! Your chess kingdom is ready! Let’s play, like setting up a chessboard and challenging a friend. You’ll need two browsers to play as two players, like having two game controllers.

### Step 1: Open Two Browsers

You and your friend need separate screens, like two TVs for a game. Here’s how:

- **Player 1:** Use Google Chrome (normal window, not secret mode).
- **Player 2:** Use Chrome in secret mode (press Ctrl+Shift+N) or Firefox.

Why?: Normal Chrome and secret Chrome keep accounts separate, like two different toy boxes. If you use two normal Chrome windows, you’ll play against yourself by mistake!

---

### Step 2: Make Two Accounts

Each player needs their own account, like getting a ticket to the chess club.

**Player 1 (Chrome Normal):**

- Open Chrome and go to [http://localhost:3000](http://localhost:3000).
- You’ll see a Login page. Click “Create one” to sign up.
- Fill in:
  - Username: SuperKnight
  - Email: superknight@example.com
  - Password: chessrocks123
- Click “Create Account”. You’ll go to the Dashboard, with buttons like “Play Game” and “View Profile”.
- Check the dashboard—it should say “SuperKnight” or show your picture.
- If something goes wrong, a cool error page will say “Oops!” (like “This email is already used”). Try a different email or click “Go Back”.

**Player 2 (Chrome Secret Mode or Firefox):**

- Open secret Chrome (Ctrl+Shift+N) or Firefox and go to [http://localhost:3000](http://localhost:3000).
- Click “Create one”.
- Fill in:
  - Username: QueenStar
  - Email: queenstar@example.com
  - Password: chessrules123
- Click “Create Account”. You’ll see the dashboard with “QueenStar”.
- Make sure it says “QueenStar”, not “SuperKnight”.
- If you see an error page, try again or click “Go to Dashboard”.

Tip:  
If you already have accounts, log in with superknight@example.com (password: chessrocks123) in Chrome and queenstar@example.com (password: chessrules123) in secret Chrome/Firefox.  
If both screens show the same name (like “SuperKnight”), use secret mode or Firefox for Player 2.

---

### Step 3: Start the Chess Battle

Time to play chess, like knights charging into battle!

**Player 1 (White Pieces):**

- In Chrome (normal), on the dashboard, click Play Game.
- You’ll see a chessboard with white pieces at the bottom (you’re white, so you go first).
- Big, bold words above the board say “White’s Turn!” in white letters.
- If you see an error page (like “Please log in”), log in again.
- Press F12 and click “Console” to check:
  - You should see: Received playerRole: w (means you’re white).

**Player 2 (Black Pieces):**

- In secret Chrome or Firefox, click Play Game.
- The chessboard loads, flipped so black pieces are at the bottom (you’re black).
- It says “White’s Turn!” in brown letters (white goes first).
- If you see an error page, refresh or log in again.
- Check the console (F12 > Console):
  - You should see: Received playerRole: b (means you’re black).

What’s Happening?:  
The game makes Player 1 white and Player 2 black, like picking teams.  
The board has light and dark squares, with pieces like ♙ (white pawn) and ♟ (black pawn).

---

### Step 4: Play Like a Chess Wizard!

Now you’re in the game, like a knight ready to charge!

- **Player 1 (White):** Click and drag a white piece (like a pawn) to a new square (e.g., pawn from e2 to e4). If the move is good, both boards update, and it says “Black’s Turn!” in
