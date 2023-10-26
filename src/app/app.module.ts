import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectModule } from './project/project.module';
import { SidenavModule } from './side-nav/sidenav.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MessageModule } from './message/message.module';
import { ServiceModule } from './service/service.module';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProjectModule,
    SidenavModule,
    MessageModule,
    ServiceModule,
    SettingsModule,
    UsersModule,
    DashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
