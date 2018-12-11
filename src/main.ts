import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

import * as $ from "jquery";
window["$"] = $;
window["jQuery"] = $;
import "froala-editor/js/froala_editor.pkgd.min.js";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
