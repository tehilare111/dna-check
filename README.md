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
 
 ### install django:
 ```
 $ git clone https://github.com/django/django.git
 $ python -m pip install -e django/
 ```
 In addition, we need the following django packages:
 ```
 $ pip install djangorestframework
 $ pip install psycopg2 (In linux this will require you to run the following command : $ sudo apt-get install libpq-dev)
 $ pip install django-cors-headers
 ```
 ### run server:
 _mainly used on first setup or after changes on db structure: new tables, new fields, etc:_
 ```
 $ python manage.py makemigrations
 $ python manage.py migrate
 ```
 _running command:_
 ```
 $ python manage.py runserver
 ```

 ## postgresql setup on linux:
 
 Install postgreSQL on your machinie:
 ```
  $ sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release --codename | cut -f2)-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
  $ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
  $ sudo apt-get update
  $ sudo apt-get install postgresql postgresql-contrib libpq-dev
 ```
 Setup your user for postgreSQL:
```
  $ sudo -u postgres createuser --superuser postgres 
  $ sudo -u postgres psql
```
 In the now opened commandline, change your user's password to 123 (Could be anything - we work with that password for now):
 ```
  $ \password postgres
```
 That's it with the basic installation.
 For more info - see the Install and setup initial postgresql configurations video - [link](https://youtu.be/yM2QSS-Lfb0).
 
 Create a DB From the installation before (The testdb is the name of the DB, chosen arbi):
 ```
  $ sudo -u postgres createdb testdb
  ```
 
 Follow the commands displayed on this tutorial to configure our DB, following those configuations (Shown in the commands):
 - user: postgres
 - password: 123
 - db_name: testdb
 
 Actually, you can fill in those fields any way you want, but make sure it fits to the specified values in the dna/settings.py, in our django server:
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
 **Pay attention, we are using node v12.16.x and npm 6.3.x**.
 Inside frontend folder:   
 ```
 npm install
 ```
 Download angular-tree-component
 ```
 npm install --save angular-tree-component
 ```
 Run server:
 ```
 npm start
 ```
