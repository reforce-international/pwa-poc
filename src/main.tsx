import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Workbox } from "workbox-window";

if ("serviceWorker" in navigator) {
  const wb = new Workbox("../service-worker.js");

  wb.addEventListener("activated", (event) => {
    // `event.isUpdate` will be true if another version of the service
    // worker was controlling the page when this version was registered.
    if (!event.isUpdate) {
      console.log("Service worker activated for the first time!");

      // If your service worker is configured to precache assets, those
      // assets should all be available now.
    }
  });

  wb.addEventListener("waiting", (event) => {
    console.log(
      `A new service worker has installed, but it can't activate` +
        `until all tabs running the current version have fully unloaded.`
    );
  });

  wb.register();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
