# LazarilloChallenge :fire:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.
Low fidelity Mockups :art: https://www.figma.com/file/LDIhDoHnDrAGf4ZqPa52Ho/Bootstrap-Lazarillo?node-id=1%3A804

See the live demo at: 💛💛 https://lazarillo-challenge.web.app 💛💛

# Build the project

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

## 2. Clone the project
- Clone the project.
- Open the file `src/enviroments/config.ts.backup` in a text editor
![image](https://user-images.githubusercontent.com/35740463/125143823-86471180-e0e1-11eb-84b9-ff498259af15.png)
- To file the info go to the project created on Firebase
- Add a web app to the project
![image](https://user-images.githubusercontent.com/35740463/125143898-c1e1db80-e0e1-11eb-8812-a344963a67e8.png)
- Write any name to the web app
![image](https://user-images.githubusercontent.com/35740463/125143920-d32ae800-e0e1-11eb-9c05-420f0d7bc245.png)

- Now copy the configuration and paste into the file `src/enviroments/config.ts.backup`.
![image](https://user-images.githubusercontent.com/35740463/125143946-e8077b80-e0e1-11eb-894c-4412612ea119.png)


![image](https://user-images.githubusercontent.com/35740463/125143974-01102c80-e0e2-11eb-97f5-3a0efdeb1cd3.png)

- Save the file and rename it form `config.ts.backup` to `config.ts`
![image](https://user-images.githubusercontent.com/35740463/125143989-0c635800-e0e2-11eb-9a42-f851b7515ae9.png)


## 3. (Using just your local machine) Raise Angular Client

- Go to the root folder
- Install angular:
```
npm install -g @angular/cli
```
- Install dependencies:
```
npm install
```
Then run the project:
```
ng serve -o
```

## 3. Or (Using docker-compose) Raise Angular Client
> You brave soul
- Clone the repository

- You must build the image, for this go to the root folder of the project and there write:

```
docker-compose build
```
- This image has not yet installed the dependencies, to install them enter the command:
```
docker-compose run client-angular npm install --yes
```
- Now if you can simply write the following command to lift the project
```
docker-compose up
```

Note: To stop the client press the keys `Ctrl + C` 


At the end the project should be running on http://localhost:4200

> Thanks ;)
