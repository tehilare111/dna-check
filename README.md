# DNA
The Palga's Management System.
WIll manage the destruction \ loss of Cyphers (aka כ"ס") and the different kinds of reviews the Palga does (TSARIAH, EMET etc.)

We Are using:
  - python 3.6.9
  - node v12.16.1
  - npm 6.13.4
  - postgresql 12.2
  
 ## setup django environment
 **Pay attention, we are using python 3.6.x and pip 19.x.x.**
 Install django:
 ```
 $ git clone https://github.com/django/django.git
 $ python -m pip install -e django/
 ```
 In addition, we need the following django packages:
 ```
 pip install djangorestframework
 pip install psycopg2
 pip install django-cors-headers
 ```
 # run server:
 python manage.py makemigrations*(mainly used on first setup or after changes on db structure: new tables, new fields, etc.. )*
 python manage.py migrate*(mainly used on first setup or after changes on db structure: new tables, new fields, etc.. )*
 python manage.py runserver


 ## postgresql setup on linux:
 
 Watch this short tutorial to install and setup initial postgresql configurations - [link](https://youtu.be/yM2QSS-Lfb0)
 Follow the commands displayed on this tutorial to configure our DB, following those configuations:
 - user: postgres
 - password: 123
 - db_name: testdb
 
 Actually, you can fill in those fields any way you want, but make sure it fits to the specified values in the dna/setttings.py, in our django server:
 ```
 DATABASES = {
   'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'testdb',
        'USER': 'postgres',
        'PASSWORD': '123',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
```
Tip: make sure postgresql server is listening:
 - netstat -a | grep postgresql
 
 ## setup angular environment:
 **Pay attention, we are using node v12.16.x and npm 6.3.x**
 Inside frontend folder:   
 ```
 npm install
 ```
 Run server:
 ```
 npm start
 ```
