# GoogleSheetsApp
Data from any google sheet can be converted and seen in a table format
Any google sheet link passed to the application along with the sheet name from which data has to be displayed in table format would be converted to table format and shown on the screen.
Column name can be added to get a sum of the values in a column with numeric values.

The application uses Google service account credentials for authentication and access to the Google sheet.
All Google sheets accessible publically can be used in the application.
For Google sheets with privacy settings the sheet has to be shared with the service account email.

Modules Used: googleapis@39, express, express-handlebars, body-parser
