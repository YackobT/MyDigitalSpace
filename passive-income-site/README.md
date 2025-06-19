# Passive Income App: Daily Affirmations

This simple static site displays a random daily affirmation each time the page is loaded or the **New Affirmation** button is pressed. It includes a placeholder area where advertising or affiliate code can be inserted.

Because the site is completely static (HTML/CSS/JS), it requires minimal maintenance and carries very low security risk. You can host it on platforms such as GitHub Pages or Netlify for free.

## How it works

- `index.html` loads styles from `style.css` and JavaScript from `script.js`.
- `script.js` fetches a list of affirmations from `quotes.json` and displays one at random.
- The `ad-placeholder` `<div>` can be replaced with ad code (e.g., Google AdSense) or affiliate widgets.

## Running locally

Open `index.html` in your browser to test the site locally. No build step or server is required.

## Deployment

Upload the contents of this folder to any static hosting service. Ensure that `quotes.json` is accessible so the JavaScript can load it.

Enjoy your simple, low-maintenance passive income site!
