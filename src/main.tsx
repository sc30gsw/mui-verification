import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import AppProviders from "./providers/AppProviders.tsx";
import router from "./routes";
import { getBooleanEnv } from "./utils/env.ts";
import "./index.css";

/**
 * APIモックの準備処理
 * `worker.start()`が非同期処理のため、startを待つことができるようにしている
 * @see https://mswjs.io/docs/integrations/browser
 */
async function enableMocking() {
  if (getBooleanEnv("VITE_USE_MOCK_SERVER", false)) {
    const { default: worker } = await import("./test/server/worker");
    return worker.start({ onUnhandledRequest: "bypass" });
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </React.StrictMode>,
  );
});
