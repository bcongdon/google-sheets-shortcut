Google Sheets
===============
A sample app that authenticates with, and gets data from, the Google Sheets API.

![](https://cdn.glitch.com/649d5871-e041-4e46-8908-9ff392db5968%2FgoogleSheetsGIF.gif?1493932296981)

## Getting Set Up
- You will need to [create an app](https://console.developers.google.com/apis/dashboard) and enable the Google Sheets and Google Plus APIs.
- Then get the client ID and secret, and set them in the `.env` file. To do this, go to `Create Credentials` > `OAuth client ID`. You will then need to setup the OAuth content screen but all you have to do is set a product name, all other fields are optional. Click save and set the Application type to ‘Web application’. Then you need to provide the ‘Authorized redirect URIs’. This is your Glitch project URL, with '/login/google/return' appended to the end. Your Glitch project URL has the format `https://project-name.glitch.me`. Once done, click Create. Then copy and paste the generated client ID and secret into the `.env` file in your Glitch project.
- You get the `SHEET_KEY` from your [spreadsheet's URL](https://webapps.stackexchange.com/questions/74205/what-is-the-key-in-my-google-spreadsheets-url).
- The example gets data from the first two rows, columns A to K, but you can [change the range](/edit/#!/google-sheets?path=server.js:111:11).
