import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

/*
export const routes: Routes = [
  {  path: '', component: LayoutComponent}
];*/

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './ProductModule',
          })
            .then(m => m.ProductModule)
            .catch(() => {
              console.log('Loading fallback module');
              return import('./pages/fallback/fallback.module')
                .then(m => m.FallbackModule);
            }),
      },

      {
        path: 'auth',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './Module',
          })
            .then(m => m.AuthModule)
            .catch(() =>
              import('./pages/fallback/fallback.module')
                .then(m => m.FallbackModule)
            ),
      },

      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
