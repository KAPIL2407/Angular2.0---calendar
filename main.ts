import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {ROUTER_PROVIDERS} from 'angular2/router'

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [ROUTER_PROVIDERS]);
