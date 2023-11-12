const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

let mainWindow

const createMainWindow = () => {
  mainWinddow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "assets", "icon.png"),
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWinddow.loadURL("https://gmail.com/");

  mainWinddow.maximize();

  const mainTemplate = Menu.buildFromTemplate(mainMenu);
  Menu.setApplicationMenu(mainTemplate);
};

const mainMenu = [
  {
    label: "Gmail",
    click() {
      mainWinddow.loadURL("https://gmail.com/");
    },
  },
  {
    label: "Chat",
    click() {
      mainWinddow.loadURL("https://chat.google.com/");
    },
  },
  {
    label: "Chat",
    click() {
      mainWinddow.loadURL("https://chat.google.com/");
    },
  },
  {
    label: "Meet",
    click() {
      mainWinddow.loadURL("https://meet.google.com/");
    },
  },
  {
    label: "Other google",
    submenu: [
      {
        label: "Docs",
        click() {
          mainWinddow.loadURL("https://docs.google.com/");
        },
      },
      {
        label: "Slides / Powerpoint",
        click() {
          mainWinddow.loadURL("https://docs.google.com/presentation/u/0/");
        },
      },
      {
        label: "Spreadsheets",
        click() {
          mainWinddow.loadURL("https://docs.google.com/spreadsheets/u/0/");
        },
      },
      {
        label: "Drive",
        click() {
          mainWinddow.loadURL("https://drive.google.com/");
        },
      },
    ],
  },
];

app.whenReady().then(() => {
  createMainWindow();
});
