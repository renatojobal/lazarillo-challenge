# LazarilloChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.
Low fidelity Mockups :art: : 
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLDIhDoHnDrAGf4ZqPa52Ho%2FBootstrap-Lazarillo%3Fnode-id%3D1%253A804" allowfullscreen></iframe>

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


