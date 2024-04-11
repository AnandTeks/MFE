import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { AppComponent } from './app.component';

let URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    },

    // Your route here:

    // Local usage
    // {
    //   path: 'flights',
    //   loadChildren: () => {
    //     return loadRemoteModule({
    //       type: 'module',
    //       remoteEntry: URL,
    //       exposedModule: './Module'
    //     })
    //     .then(m => m.FlightsModule) }
    // },
    {
        path: 'cars',
        component: WebComponentWrapper,
        data: {
            remoteEntry: 'http://localhost:4200/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Module',
            elementName: 'mfe1-element'
        } as WebComponentWrapperOptions
    }
];