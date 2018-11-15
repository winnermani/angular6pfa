import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatAutocompleteModule, // Autocomplete,
    MatCheckboxModule, // Checkbox
    MatDatepickerModule, // Datepicker
    MatNativeDateModule, // Need to add for datepicker to solve the dateAdapeter issue
    MatInputModule, // Input Element
    MatRadioModule, // Radio Button
    MatSelectModule,
    MatSliderModule, // Slider
    MatSlideToggleModule, // Slide Toggle
    MatMenuModule, // Menu creation - need to add both button and icon menu to support the icon design
    MatSidenavModule, // Side Navigation
    MatToolbarModule, // Toolbar creation
    MatListModule, // List items
    MatGridListModule, // Grid List(Grid Creations)
    MatCardModule, // To design the card
    MatStepperModule, // Stepper (Wizard Creation)
    MatTabsModule, // Tab Menu Creation
    MatExpansionModule, // Expansion Panel
    MatButtonModule, // Buttons
    MatButtonToggleModule, // Button Toggle
    MatChipsModule, // Chips(Similar to list)
    MatIconModule, // To Use the Icons
    MatProgressSpinnerModule, // Progress Spinner
    MatProgressBarModule, // Progress Bar
    MatDialogModule, // Dialog
    MatTooltipModule, // Tooltip
    MatSnackBarModule, // SnackBar
    MatTableModule, // Table
    MatSortModule, // Table sort
    MatPaginatorModule,
    MatOptionModule,
    MatSnackBar
} from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule
  ],
  exports: [
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatOptionModule,
    NgxDatatableModule

  ],
  declarations: []
})
export class MaterialModule { }
