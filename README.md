Copyright (c) 2017 Nirdeshika Polisetti
# ExportBrowserHistory
Open Source Development Class Project: Project to create an extension that exports browser history as .csv file

***How the project works:***  
This project will create an extension which when clicked presents the user with two options: 1) To download the entire history
2) To download part of the history filitered upon a keyword.

***Details on how to use it:***  
Firstly downlaod the project into a folder. Go to chrome://extensions/ and check the "Developer Mode" on. Then the page shows three more options. Choose "Load unpacked extension" and choose the folder with manifest.json file from the downloaded folder. This loads the extension and you should be able to see the extension next to the address bar.
If the user chooses the complete history option, it downlaods a .csv file containing the browsing history.
If the user chooses to filter, it presents a new page where he/she can enter a keyword and click "Download" button to download the filtered history.
After choosing the filtered history option, if the user wants to download the entire history, he can enter nothing in the keyword textbox (i.e an empty string) and click on "Download" button.

**NOTE:**  
At present, it supports only one keyword. There is a scope for development here to include multiple keywords.

***Timeline of the project:***

1st Week:
Selected a project to work on.

2nd Week:
1. Learn the basics of git.
2. Set up github project on github.
3. Learn the basics of chrome extension.
4. Created manifest file, the basic and most important file for creating an extension.
5. Designed initial design for the icon to be used for extension.

3rd Week:
1. Getting a hang of chrome API which deals with history. [https://developer.chrome.com/extensions/history]
2. Message passing among various pages of the extension project. [https://developer.chrome.com/extensions/messaging]
3. How to host extension on webstore. [https://developer.chrome.com/extensions/hosting]
4. Understanding event pages [https://developer.chrome.com/extensions/event_pages]
5. Implemented creating a confirm box to take user input on whether to download the complete history or filtered history.

Todo this week:
6. Implement how to fetch browser history.

***Tentative plan for coming weeks:***

4th Week:
1. Export it as .csv file and download it.
2. Testing.

5th Week:
1. Starting Firefox extension.
2. Learn the basics of firefox extension.
3. Create a basic implementation of the project.

6th Week:
1. Learn how to fetch browsing history.
2. Implement how to fetch history.

7th Week:
1. Export it as .csv file and download it.
2. Testing.

8th Week:
1. Hosting both the extensions.
2. Testing.
3. Bug fixes if any.

This work is made available under the MIT license. Please see the file `LICENSE` in this distribution for license terms.
