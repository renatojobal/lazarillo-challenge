# LazarilloChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.
Low fidelity Mockups :art: https://www.figma.com/file/LDIhDoHnDrAGf4ZqPa52Ho/Bootstrap-Lazarillo?node-id=1%3A804

See the live demo at: https://lazarillo-challenge.web.app

  
## Raise Angular Client Using Docker

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


