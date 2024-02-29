// import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Http, XHRBackend, RequestOptions } from '@angular/http';
// import { MaterialModule } from './material.module';
// import { Md2Module } from 'md2';

// import { RouterModule, Router } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';

// import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
// import { TextareaDialogComponent } from './components/textarea-dialog/textarea-dialog.component';
// import { SpinnerComponent } from './components/spinner/spinner.component';
// import { AppFooterComponent } from './components/app-footer/app-footer.component';
// import { AppHeaderComponent } from './components/app-header/app-header.component';
// import { BeneficiaryDetailsComponent } from './components/beneficiary-details/beneficiary-details.component';

// import { HttpInterceptor } from './services/http-interceptor.service';
// import { SpinnerService } from './services/spinner.service';
// import { ConfirmationService } from './services/confirmation.service';
// import { BatchViewService } from './services/rx-batchview.service';
// import { AuthGuard } from './services/auth-guard.service';
// import { TextareaDialog } from './components/textarea-dialog/textarea-dialog.service';
// import { CommonService } from './services/common-services.service';
import { GlobalErrorHandler } from './services/global-error-handler.service';

// import { myEmail } from './directives/email/myEmail.directive';
// import { myMobileNumber } from './directives/MobileNumber/myMobileNumber.directive';
// import { myName } from './directives/name/myName.directive';
// import { myPassword } from './directives/password/myPassword.directive';
// import { StringValidator } from './directives/stringValidator.directive';
// import { NumberValidator } from './directives/numberValidator.directive';
// import { MinNumberValidator } from './directives/minNumberValidator.directive';
// import { DisableFormControlDirective } from './directives/disableFormControl.directive';
// import { NullDefaultValueDirective } from './directives/null-default-value.directive';

// import { ItemSearchComponent } from './components/item-search/item-search.component';
// import { ItemSearchDirective } from './directives/item-search.directive';
// import { ItemTransferDirective } from './directives/item-transfer.directive';
// import { ItemDispenseDirective } from './directives/item-dispense.directive';
// import { TransferSearchComponent } from './components/transfer-search/transfer-search.component';
// import { ItemDispenseComponent } from './components/item-dispense/item-dispense.component';
// import { ItemSearchService } from './services/item-search.service';


// import { BatchSearchComponent } from './components/batch-search/batch-search.component';
// import { BatchSearchDirective } from './directives/batch-search.directive';
// import { BatchSearchService } from './services/batch-search.service';
// import { SearchComponent } from './components/search/search.component';
// import { RxBatchViewComponent } from './components/rx-batch-view/rx-batch-view.component';
// import { BeneficiaryDetailsService } from './services/beneficiary-details.service';

// import { ISTDatePipe } from './pipes/ist-date.pipe';
// import { BatchAdjustmentDirective } from './directives/batch-adjustment.directive';
// import { BatchAdjustmentComponent } from './components/batch-adjustment/batch-adjustment.component';
// import { IndentRequestDirective } from './directives/indent-request.directive';
// import { IndentItemListComponent } from './components/indent-item-list/indent-item-list.component';
// import { IndentDispenseDirective } from './directives/indent-dispense.directive';
// import { ShowCommitAndVersionDetailsComponent } from './components/show-commit-and-version-details/show-commit-and-version-details.component'
// import { HttpClientModule } from '@angular/common/http';
// import { SetLanguageComponent } from './components/set-language.component';



import { ModuleWithProviders, NgModule } from '@angular/core';
import { LanguageService } from './services/language.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth-guard.service';
import { BatchSearchService } from './services/batch-search.service';
import { CommonService } from './services/common-services.service';
import { ConfirmationService } from './services/confirmation.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ItemSearchService } from './services/item-search.service';
import { BatchViewService } from './services/rx-batchview.service';
import { SpinnerService } from './services/spinner.service';
import { myEmailDirective } from './directives/email/myEmail.directive';
import { myMobileNumberDirective } from './directives/MobileNumber/myMobileNumber.directive';
import { myNameDirective } from './directives/name/myName.directive';
import { myPasswordDirective } from './directives/password/myPassword.directive';
import { BatchAdjustmentDirective } from './directives/batch-adjustment.directive';
import { BatchSearchDirective } from './directives/batch-search.directive';
import { DisableFormControlDirective } from './directives/disableFormControl.directive';
import { IndentDispenseDirective } from './directives/indent-dispense.directive';
import { IndentRequestDirective } from './directives/indent-request.directive';
import { ItemDispenseDirective } from './directives/item-dispense.directive';
import { ItemSearchDirective } from './directives/item-search.directive';
import { ItemTransferDirective } from './directives/item-transfer.directive';
import { MinNumberValidatorDirective } from './directives/minNumberValidator.directive';
import { NullDefaultValueDirective } from './directives/null-default-value.directive';
import { NumberValidatorDirective } from './directives/numberValidator.directive';
import { StringValidatorDirective } from './directives/stringValidator.directive';
import { ISTDatePipe } from './pipes/ist-date.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule,
    // Md2Module,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    // Ng2GoogleChartsModule,
  ],
  declarations: [
    CommonDialogComponent,
    // TextareaDialogComponent,
    // SpinnerComponent,
    // AppFooterComponent,
    // AppHeaderComponent,
    myEmailDirective,
    myMobileNumberDirective,
    // SetLanguageComponent,
    myNameDirective,
    myPasswordDirective,
    StringValidatorDirective,
    NullDefaultValueDirective,
    NumberValidatorDirective,
    DisableFormControlDirective,
    // ItemSearchComponent,
    ItemSearchDirective,
    MinNumberValidatorDirective,
    // TransferSearchComponent,
    ItemTransferDirective,
    // BatchSearchComponent,
    BatchSearchDirective,
    ItemDispenseDirective,
    // ItemDispenseComponent,
    // SearchComponent,
    // SetLanguageComponent,
    ISTDatePipe,
    BatchAdjustmentDirective,
    // BatchAdjustmentComponent,
    // BeneficiaryDetailsComponent,
    // RxBatchViewComponent,
    IndentRequestDirective,
    // IndentItemListComponent,
    IndentDispenseDirective,
    // ShowCommitAndVersionDetailsComponent
  ],
  exports: [
    MaterialModule,
    // Md2Module,
    CommonDialogComponent,
    // TextareaDialogComponent,
    // SpinnerComponent,
    // SetLanguageComponent,
    ReactiveFormsModule,
    // AppFooterComponent,
    // AppHeaderComponent,
    // Ng2GoogleChartsModule,
    myEmailDirective,
    // SetLanguageComponent,
    myMobileNumberDirective,
    myNameDirective,
    myPasswordDirective,
    DisableFormControlDirective,
    StringValidatorDirective,
    NumberValidatorDirective,
    MinNumberValidatorDirective,
    NullDefaultValueDirective,
    // ItemSearchComponent,
    ItemSearchDirective,
    // TransferSearchComponent,
    ItemTransferDirective,
    ItemDispenseDirective,
    // BatchSearchComponent,
    BatchSearchDirective,
    ISTDatePipe,
    // BatchAdjustmentComponent,
    BatchAdjustmentDirective,
    // BeneficiaryDetailsComponent,
    IndentRequestDirective,
    // IndentItemListComponent,
    IndentDispenseDirective,
    // ShowCommitAndVersionDetailsComponent
  ],
  // entryComponents: [
  //   CommonDialogComponent,
  //   ItemSearchComponent,
  //   TransferSearchComponent,
  //   BatchSearchComponent,
  //   BatchAdjustmentComponent,
  //   TextareaDialogComponent,
  //   ItemDispenseComponent,
  //   SpinnerComponent,
  //   SearchComponent,
  //   RxBatchViewComponent,
  //   IndentItemListComponent,
  //   ShowCommitAndVersionDetailsComponent
  // ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ConfirmationService,
        BatchViewService,
        // TextareaDialog,
        AuthGuard,
        SpinnerService,
        CommonService,
        ItemSearchService,
        HttpInterceptorService,
        BatchSearchService,
        // BeneficiaryDetailsService,
        // {
        //   provide: Http,
        //   useFactory: HttpInterceptorFactory,
        //   deps: [XHRBackend, RequestOptions, Router, SpinnerService, ConfirmationService]
        // }
      ]
    };
  }

}

// export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, spinner: SpinnerService, confirmation: ConfirmationService, http_service: LanguageService) {
//   return new HttpInterceptor(backend, options, router, spinner, confirmation, http_service);
// }
