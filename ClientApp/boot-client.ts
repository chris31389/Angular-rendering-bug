import "reflect-metadata";
import "zone.js";
import 'bootstrap';
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

if (module["hot"]) {
    module["hot"].accept();
    module["hot"].dispose(() => {
        // Before restarting the app, we create a new root element and dispose the old one
        const oldRootElem = document.querySelector("sample-app");
        const newRootElem = document.createElement("sample-app");
        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
        modulePromise.then(appModule => {
            appModule.destroy();
            if (oldRootElem !== null)
            {
                oldRootElem!.parentNode!.removeChild(oldRootElem);
            }
        });
    });
} else {
    enableProdMode(); 
}

// Note: @ng-tools/webpack looks for the following expression when performing production
// builds. Don't change how this line looks, otherwise you may break tree-shaking.
const modulePromise = platformBrowserDynamic().bootstrapModule(AppModule);