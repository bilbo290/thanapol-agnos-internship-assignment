# How to deploy locally

First off, start by cloning the repo into the machine. Then open the terminal in the repo folder and type

        npm install

to install required dependencies. After npm finished installing the dependencies, type

        npm run build

to build the project. After it's finished, type 
      
        serve -s build

to serve a static server, the default should be on deployed on port 3000 -> localhost:3000
