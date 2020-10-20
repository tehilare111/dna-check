# base image
FROM python:3.6

# set working directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy all python packages requirements
COPY requirements.txt /app/requirements.txt

# install and cache app dependencies
RUN pip install -r requirements.txt

# add app
COPY . /app

EXPOSE 8000

# start app
CMD python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000