import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module.ts';
import{LayoutModule} from './layout/layout.module';
import { AppComponent } from './app.component';
import { PagesModule} from './pages/pages.module';
import { BrowserModule} from './browsermodule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
