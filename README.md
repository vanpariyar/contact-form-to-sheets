# contact-form-to-sheets
:wave: Hiii,

The small application that sends your static contact form data to the Google Sheets With Email notification. 

You find this cool :ok_hand:. (We can build with no Time just Follow Tutorial).

NOTE: Email Notification is in development (You also can contribute by making a new branch).

DEMO: https://vanpariyar.github.io/contact-form-to-sheets

To see your response.
https://docs.google.com/spreadsheets/d/1lFgkCv0I1ZnV6bPcGoBMB9w2KWx8FZZ6-hfiDgN6cFU/edit?usp=sharing


# Tutorial 
Click on URL to Copy sheet:
https://docs.google.com/spreadsheets/d/1lFgkCv0I1ZnV6bPcGoBMB9w2KWx8FZZ6-hfiDgN6cFU/copy

### After copy
Enter your google Creds. It will store in your Drive. Don't worry not spam :joy:

![contact form to sheets](https://user-images.githubusercontent.com/26689210/77770067-b1336080-706a-11ea-8624-7b7be4ce8e81.png)

THEN

![contact form to sheets](https://user-images.githubusercontent.com/26689210/77770070-b2fd2400-706a-11ea-9537-990b6bb9caa0.png)

### IN Google Sheet
Goto Tools > ScriptEditor.

![Screenshot from 2020-03-27 20-31-02](https://user-images.githubusercontent.com/26689210/77770956-0de34b00-706c-11ea-8e7f-1e3633c8f03c.png)

### In the Newly opened window
Change as per your requirement.
Publish > Deploy As app.
![Screenshot from 2020-03-27 20-31-55](https://user-images.githubusercontent.com/26689210/77770978-176cb300-706c-11ea-8532-fd209743a761.png)

### In Newly opened window
Set settings as shown.
- Anonymous is required.
- Run as me required to use on your website.

Copy This retrived URL.
![Screenshot from 2020-03-27 20-32-36](https://user-images.githubusercontent.com/26689210/77771069-3a976280-706c-11ea-92a2-6bf4444ed96f.png)

publish the script as a web app.

### NOTE: IF it is asking for the authorization goto advance > then continue to unsafe Then copy SCRIPT Url:
:sweat_smile: Not any harm full code but Google does not allow any code without your confirmation.
You can review my code if you feel uncomfortable it's fine.

Now where to put this URL :thinking:

The answer is put in ` Contact.js `

set URL variable in -> 
```javascript
var url = yourScriptUrl
```
This is kind an API endpoint u can use CURL, ajax, Fetch to this URL.

IT is safe because it redirects it's output to another URL. You will find after some experience.

I will share the reference.

https://developers.google.com/apps-script/reference/spreadsheet
