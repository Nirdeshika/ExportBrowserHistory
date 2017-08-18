# ExportBrowserHistory
Copyright (c) 2017 Nirdeshika Polisetti

### Contact Information:

Name of the developer: Nirdeshika Polisetti  
Project Name: ExportBrowserHistory  
Email Id: np4@pdx.edu  
Personal Email: nirdeshika2533@gmail.com  
Bugs: https://github.com/Nirdeshika/ExportBrowserHistory/issues  

ExportBrowserHistory is a [chrome extension](https://developer.chrome.com/extensions) to export the browser history to .csv file that can be downloaded.  

***What is this project for?:***  
Many times I forget to bookmark the websites I visit. It is difficult to search the chrome history for a particular keyword, as it reloads everytime I scroll down due to the huge amounts of history items. As I am comfortable using Excel, I wanted to view this data in a .csv format. Though there are few extensions already available, they either provides the data in JSON format or they aren't free. So, I wanted to create one for myself. Hence this project.  

***Features available***  
This extension offers three main features:  
1. Complete History: Downloads the entire history.  
2. Filtered History: Filters the history on multiple keywords delimited by "|" and then downloads it.  
3. Analyze History: Displays a pie-chart with three categories: (i) Educational (ii) Search and (iii) Social Media. It shows the number of times a category of websites is visited and also downloads it.

***How to install:***  
1. Since it is a chrome extension, you obviously need Google Chrome to use this extension.  
2. Download/Clone the project into a folder.  
3. Go to chrome://extensions/ and check the "Developer Mode" on.  
4. Then the page shows three more options. Choose "Load unpacked extension" and choose the folder with manifest.json file(ExportBrowserHistory) from the downloaded folder.  
5. This loads the extension and you should be able to see the extension next to the search bar.  

***How to use:***  
The extension when clicked presents with the user with three buttons: Complete History, Filtered History and Analyze History.  
- If the user clicks on Complete History, it downloads the entire history.  
- If the user clicks on Filtered History, it shows a text box where he/she can enter single/multiple keywords separated by "|". If he/she wishes to download the entire history, it can be left empty. Click on the Download button to download the filtered history.  
- If the user clicks on Analyze History, a pie-chart with three categories: (i) Educational (ii) Search and (iii) Social Media. When you hover over the segment of the pie-chart, it shows the number of times the websites under that category is visited. When you click on it, it downloads the history of that category.  

**Limitations:**  
At present, the websites that fall under the categories are hard coded as follows.  
- Educational: stackoverflow  
- Search: google.com  
- Social Media: facebook, instagram and pinterest

Also, for better experience please make sure that chrome://settings/ --> Advanced --> Downloads --> Ask where to save each file before downloading is off.

**LICENSE**  
This work is made available under the MIT license. Please see the file `LICENSE` in this distribution for license terms.
