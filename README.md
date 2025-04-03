# ChatBGrupoBarsa
# 🛠️ Chatbot for Grupo Barsa

Chatbot designed to assist with event registration and provide information about the services offered by Grupo Barsa.

## 🚀 Tech Stack
- **Backend:** NestJS
- **Libraries:** ExcelJS
- **Bot Services** Meta Whatsapp Api *(Subject to change)* / Baileys 
- **Package Manager:** pnpm
- **Database:** MySQL
- **Hosting:** Railway *(subject to change)* / PlanetScale
- **Storage:** Backblaze B2

## 🏗️ Structure of Project
```
└── 📁ChatBGrupoBarsa
    └── 📁assets
    |    └── sample.png
    └── 📁src
    |   | └── app.ts  # Principal Bot code
    |   └──📁Database
    |   |   └──db.ts
    |   └──📁scripts
    |   |    └──📁bd
    |   |         └──bd.sql
    |   └──📁Flows
    |   |   └──📁Services-List
    |   |   └──AboutFlow.ts
    |   |   └──EndFlow.ts
    |   |   └──FlowLibrary.ts   # Collect all flows data
    |   |   └──Reservations.ts
    |   |   └──ServicesFlows.ts
    |   |   └──WelcomeFlow.ts
    |   |   └──ExmpleFlow.ts
    |   └──📁Controller
    |   └──📁Task
    └── Dockerfile
    └── nodemon.json
    └── package.json
    └── pnpm-lock.yaml
    └── README.md           # Project documentation
    └── rollup.config.js
    └── tsconfig.json             
```

## 📌 Notes
- **Railway might be replaced** depending on project requirements.
- Ensure environment variables are properly configured before running the project.

## 🛠️ How to Install
  
  Open your terminal and follow the steps:

  - **Git clone https://github.com/Granpiecito/ChatBGrupoBarsa.git** to download the repository.
  - Open the folder using **cd  ChatBGrupoBarsa** and execute **code .** for open the folder on visual studio code.
  -Open a terminal and execute **pnpm install** to install all the dependencies.

## 👨‍💻Technologies used

- Backend **Nest Js + TypeScript + WhatsApp Api V22.0**
