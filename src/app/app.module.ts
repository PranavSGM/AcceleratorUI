import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home.component';
import { MenuBarComponent } from './pages/menu-bar/menu-bar.component';
import { DefaultRouteComponent } from './pages/default-route/default-route.component';
import { FileComponent } from './pages/data-sources/file/file.component';
import { DataBaseComponent } from './pages/data-sources/data-base/data-base.component';
import { ReconcileComponent } from './pages/reconcile/reconcile.component';
import { UpdateComponent } from './pages/update/update.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: DefaultRouteComponent },
  { path: 'File', component: FileComponent },
  { path: 'File/:id', component: FileComponent },
  { path: 'DataBase', component: DataBaseComponent },
  { path: 'DataBase/:id', component: DataBaseComponent },
  // { path: 'DataBaseNew', component: DataBaseComponent },
  { path: 'Reconcile', component: ReconcileComponent },
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuBarComponent,
    DefaultRouteComponent,
    FileComponent,
    DataBaseComponent,
    ReconcileComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UpdateComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
