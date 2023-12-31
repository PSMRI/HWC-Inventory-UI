import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule, MatTooltipModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MD_ERROR_GLOBAL_OPTIONS, showOnDirtyErrorStateMatcher } from '@angular/material';
import { MatSelectModule, MatSidenavModule } from '@angular/material';
import { MatProgressSpinnerModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule, MatMenuModule, MdDatepickerModule } from '@angular/material';
import { MatDatepickerModule, MdNativeDateModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    MdIconModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MdNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MdDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatInputModule,
    MdToolbarModule,
    MatRadioModule,
    MatStepperModule,
    MdButtonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [
    // { 
    //   provide: MD_ERROR_GLOBAL_OPTIONS, 
    //   useValue: { 
    //     errorStateMatcher: showOnDirtyErrorStateMatcher
    //   }
    // },
  ],
  exports: [
    MdIconModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MdNativeDateModule,
    MatDatepickerModule,
    MatChipsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatMenuModule,
    MdDatepickerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatInputModule,
    MdToolbarModule,
    MatRadioModule,
    MatStepperModule,
    MdButtonModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class MaterialModule { }

