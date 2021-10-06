# FRONTEND-- react application that fetches data and display on preferences 
fetched data was 5 categories and 250 item and u suuposed to click on a specific category to display its data 


_ TECHNICAL

- i used redux toolkit to handle the cross component state , fetching data from api , storing data , filtring data 

- i created the 5 categories manually to not load the with unusefull fetch

- i created the colors filter manually with only 6 filters and with no search color input bacause my time was limited for i have a daily 9 to 5 ... if i had more time i would created it dynamicly by mapping colors from fetched data to a component then handle it by clicks that every click will return a specific color and use those data to filter

- the provided api have an isuue that it provide the same img for all the items and it re rendner a new img with every request ,,, it provided via http and that causing error when deploying so i changed it manually to https it causes warnings in the console after deploying ..

- the ui/ux is basic it can be polished alot but like i mention there is no time 

