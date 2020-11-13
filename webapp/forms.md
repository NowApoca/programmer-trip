Tips:
- Rule of gold: remember that a well designed FrontEnd never return invalid requests to the backend. What I mean with that? If you upload a credit card for example, and the backend returns that the email was invalid, you are not performing good validations in the frontend. Probably there are exceptions when concurrency exists, that errors have to be handled with Flashmessages or with an /error path.

- If the input has some default values ( like for example, banks ) show a dropdown with the valid values i.e. (HSBC, ICBC)
- If they input a lot of data, show them how far in allowed data they arrived.
- Show the input format for the type of data: calendars for dates, keyboards for numbers, etc.
- If they upload a image, show them the photo with a button for making zoom, let them delete the img and upload another
- Always give feedback after 1 second of upload. Check if boundaries and data is okey or not
- Give autocomplete if the data is not critical secret
- Show placeholders in order to show formats
- Validate stirngs with regex
- Always return feedback when a user touchs a button
- prevent about double click
- Before submiting check if there is a error. If there is one, you should return false in the submittion in order to do not give invalid data to the server.
