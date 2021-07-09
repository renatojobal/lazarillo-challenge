# LazarilloChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.
Low fidelity Mockups :art: https://www.figma.com/file/LDIhDoHnDrAGf4ZqPa52Ho/Bootstrap-Lazarillo?node-id=1%3A804

See the live demo at: https://lazarillo-challenge.web.app

# Build project

## 1. Create firebase project

- Go to [Firebase console] and create a project called `lazarillo-callenge`

- In the left menu, select **Firestore Database** and select the button **Create Database**

- Choose **test mode** for the database and then any region.

- Now create a collection clicking on **+ Start collection**
![image](https://user-images.githubusercontent.com/35740463/125143570-b3df8b00-e0e0-11eb-93b9-2e7131c42632.png)

- On the Collection ID field write *place-collection*
![image](https://user-images.githubusercontent.com/35740463/125143600-c3f76a80-e0e0-11eb-8859-644e8db15d4a.png)


- Add a least on object. You have to create it in this way:
![image](https://user-images.githubusercontent.com/35740463/125143667-ebe6ce00-e0e0-11eb-9f76-f09019853655.png)
![image](https://user-images.githubusercontent.com/35740463/125143673-f1441880-e0e0-11eb-8f66-9ec509848fb0.png)


## 2. (Using docker-compose) Raise Angular Client

1. Clone the repository

2. You must build the image, for this go to the root folder of the project and there write:

```
docker-compose build
```
3. This image has not yet installed the dependencies, to install them enter the command:
```
docker-compose run client-angular npm install --yes
```
4. Now if you can simply write the following command to lift the project
```
docker-compose up
```

Note: To stop the client press the keys `Ctrl + C` 

## 2. (Using just your local machine) Raise Angular Clien

