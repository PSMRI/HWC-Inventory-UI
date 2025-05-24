// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { CookieService } from 'ngx-cookie-service';

// import { RouteReuseStrategy } from '@angular/router';
// import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';

// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { Md2Module } from 'md2';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';

// Import custom route module....
// import { AppRoutingModule } from './app-routing.module';
// import { CoreModule } from './app-modules/core/core.module';

// // Custom components import....
// import { LoginComponent } from './login/login.component';

// Custom services import....
// import { AuthService } from './app-modules/core/services/auth.service';
// import { AuthenticationService } from './login/authentication.service';
// import { ServiceComponent } from './service/service.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { SetPasswordComponent } from './set-password/set-password.component';
// import { SetSecurityQuestionsComponent } from './set-security-questions/set-security-questions.component';
// import { FacilitySelectionComponent } from './facility-selection/facility-selection.component';
// import { FaciltyService } from './facility-selection/facilty.service';
// import { RedirInComponent } from './redir-in/redir-in.component';
// import { LoadStoreDetailsComponent } from './load-store-details/load-store-details.component';
// import {LanguageService} from './app-modules/core/services/language.service'
//   import { from } from 'rxjs/observable/from';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from "./app-modules/core/core.module";
import { HttpInterceptorService } from "./app-modules/core/services/http-interceptor.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LanguageService } from "./app-modules/core/services/language.service";
import { AuthenticationService } from "./login/authentication.service";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MaterialModule } from "./app-modules/core/material.module";
import { LoginComponent } from "./login/login.component";
import { FaciltyService } from "./facility-selection/facilty.service";
import { FacilitySelectionComponent } from "./facility-selection/facility-selection.component";
import { ServiceComponent } from "./service/service.component";
import { LoadStoreDetailsComponent } from "./load-store-details/load-store-details.component";
import { RedirInComponent } from "./redir-in/redir-in.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SetPasswordComponent } from "./set-password/set-password.component";
import { SetSecurityQuestionsComponent } from "./set-security-questions/set-security-questions.component";
import { AuthService } from "./app-modules/core/services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServiceComponent,
    ResetPasswordComponent,
    SetPasswordComponent,
    SetSecurityQuestionsComponent,
    FacilitySelectionComponent,
    RedirInComponent,
    LoadStoreDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MaterialModule,
    // HttpModule,
    // Md2Module,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    // Ng2GoogleChartsModule
  ],
  providers: [
    AuthenticationService,
    LanguageService,
    AuthService,
    CookieService,
    HttpInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    FaciltyService,
    // { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
