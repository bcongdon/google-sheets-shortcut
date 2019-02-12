# google-sheets-shortcut

A small glitch app for appending to a Google Sheet from iOS Shortcuts

## Getting Started

- You will need to [create an app](https://console.developers.google.com/apis/dashboard) and enable the Google Sheets API.
- Then get the client ID and secret, and set them in the `.env` file. To do this, go to `Create Credentials` > `OAuth client ID`. You will then need to setup the OAuth content screen but all you have to do is set a product name, all other fields are optional. Click save and set the Application type to ‘Web application’. Then you need to provide the ‘Authorized redirect URIs’. This is your Glitch project URL, with '/login/google/return' appended to the end. Your Glitch project URL has the format `https://project-name.glitch.me`. Once done, click Create. Then copy and paste the generated client ID and secret into the `.env` file in your Glitch project.

### Template `.env` Configuration

```
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
SHEET_KEY=
SECRET_KEY=
```

- You get the `SHEET_KEY` from your [spreadsheet's URL](https://webapps.stackexchange.com/questions/74205/what-is-the-key-in-my-google-spreadsheets-url).
- The `SECRET_KEY` is something you should choose. This will be used to authenticate the endpoint from your iOS Shortcut. A good choice would be to use run `openssl rand -base64 24` in your terminal.
- Sign in via the link shown on the homepage of your created Glitch app.
- Go to the Glitch console. You should see that the OAuth tokens have been displayed. Save your `refresh_token` to the `.env` file.
- You can now call the endpoint with a POST to `https://YOUR-PROJECT-NAME.glitch.com/spreadsheet` and the following JSON body structure:

```js
{
    "secret_key": "some secret"     // This must match the secret key in your .env file
    "spreadsheet_key": ""           // The spreadsheet to edit. Optional (defaults to the SHEET_KEY set in .env)
    "data": ["foo", "bar", "baz"]   // A list of values to append to the spreadsheet as a single row
    "spreadsheet_range": ""         // Optional. Where to append the new row (useful if you want to append on the non-default tab of a sheet)
}
```

## Attribution

This was remixed from [https://glitch.com/~google-sheets](https://glitch.com/~google-sheets)