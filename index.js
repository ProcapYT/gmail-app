const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

let mainWindow

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "assets", "icon.png"),
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile("./renderer/index.html");

  mainWindow.maximize();

  const mainTemplate = Menu.buildFromTemplate(mainMenu);
  Menu.setApplicationMenu(mainTemplate);
};

const mainMenu = [
{  
  label: "Main",
  click() {
    mainWindow.loadFile("./renderer/index.html");
  },
},
  {
    label: "Google",
    submenu: [
      {
        label: "Docs",
        click() {
          mainWindow.loadURL("https://docs.google.com/");
        },
      },
      {
        label: "Slides / Powerpoint",
        click() {
          mainWindow.loadURL("https://docs.google.com/presentation/u/0/");
        },
      },
      {
        label: "Spreadsheets",
        click() {
          mainWindow.loadURL("https://docs.google.com/spreadsheets/u/0/");
        },
      },
      {
        label: "Drive",
        click() {
          mainWindow.loadURL("https://drive.google.com/");
        },
      },
      {
        label: "Gmail",
        click() {
          mainWindow.loadURL("https://gmail.com/");
        },
      },
      {
        label: "Chat",
        click() {
          mainWindow.loadURL("https://chat.google.com/");
        },
      },
      {
        label: "Hangouts",
        click() {
          mainWindow.loadURL("https://hangouts.google.com/");
        },
      },
      {
        label: "Meet",
        click() {
          mainWindow.loadURL("https://meet.google.com/");
        },
      },
    ],
  },
];

app.whenReady().then(() => {
  createMainWindow();
});
