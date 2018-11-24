# Electron React Python Starter Kit

Quickly get up and running with ReactJS inside Electron app with Python as it's backend

## Development

From your command line:

```bash
# Clone this repository
git clone https://github.com/sahitpj/electron-react-python.git

# Go into the repository
cd electron-react-python

# Install dependencies
npm i

# Run the app
npm start
```

## Install React Dev Tools

Execute the following from the Console tab of your running Electron app's developer tools:

```bash
require('electron-react-devtools').install()
```

## Python Backend

The following app, can execute a python shell which can execute python files and communicate via STDIO.
The python files are present in the `python` folder

Note - python files are run using python3


## React Components

React components can be written and stored in the  `components` folder. Don't forget to link the html files with the `.jsx` files.