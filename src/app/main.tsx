import "./index.scss";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  UIContextProvider,
  WorkerSelectOptionsContextProvider,
} from "./context";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LocationSelectOptionsContextProvider } from "./context/LocationSelectOptionsContext";
import { HomeContextProvider } from "./context/HomeContext";
import { lazy } from "react";
import { RoleSelectOptionsContextProvider } from "./modules/user/context/RoleSelectOptionsContext";
import { PersonSelectOptionsContextProvider } from "./context/PersonSelectOptionsContext";

const RequestContextProvider = lazy(
  () => import("@/modules/requests/context/RequestContext")
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <UIContextProvider>
        <RoleSelectOptionsContextProvider>
          <LocationSelectOptionsContextProvider>
            <PersonSelectOptionsContextProvider>
              <WorkerSelectOptionsContextProvider>
                <HomeContextProvider>
                  <RequestContextProvider>
                    <App />
                  </RequestContextProvider>
                </HomeContextProvider>
              </WorkerSelectOptionsContextProvider>
            </PersonSelectOptionsContextProvider>
          </LocationSelectOptionsContextProvider>
        </RoleSelectOptionsContextProvider>
      </UIContextProvider>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
