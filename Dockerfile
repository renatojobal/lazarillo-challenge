FROM node:16

# Port entorno dev
EXPOSE 4200
# Port livereload
EXPOSE 49153
# Port Test
EXPOSE 9876
# Port e2e
EXPOSE 49152 

RUN apt-get update

RUN mkdir /project

WORKDIR /project

COPY . .

# Install angular client
RUN npm install -g @angular/cli@12
