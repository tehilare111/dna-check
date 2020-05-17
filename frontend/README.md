# Frontend Exploit

## Our frontend is consists of services and pages

All frontend displayed pages are under: **src/app/pages** directory.
  - **events-forms** directory:  
    Contains all the forms of the app. 
    - **lost-form**
    - **corruption-form**
    - **equipment-review**
    - **validation-directives** directory:  
      Contains all the regex directives for validation of the forms fields
    - **components**:  
      Contains components used in the fields.
    - **events-forms.template**:  
      Contains all the forms fields objects used in the forms.
   - **control-table** directory:  
     Contains the app main page.  
     This page displaying the all the forms store in the db.
     
All requests to the django server leaning on the **rest-api.service.ts**.  
File located under **src/app/services**  
In this file you can spectat all the requests from the frontend client to the backend server,  
With its url.

## A bit about the flow on the frontend app
Each page has its own ts file.  
This ts file is responsible to handle the data flow on its html page.
**ngOnInit()** - it is a function that executed when the page load to ths screen.  
                 It pulls data from the server. For example, each form page load data from the server by specifyng its
                 refernce id on the url. Our backend server recieve the specified reference and return to the client an object with
                 all its saved data. This function using a function given from rest-api.service.ts.
**onSubmit()** - it is a function that executed when user done editing its fields. It commits a request to the server to update this
                 form in the db, or to create a new one if no reference was specified in the url. 




