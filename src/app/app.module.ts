import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import {MatToolbarModule} from '@angular/material/toolbar';
//import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
//import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './/app-routing.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { NavigationbarComponent } from './layout/navigationbar/navigationbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthenticateComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    // MatButtonModule, 
    // MatCheckboxModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatCardModule,
     AppRoutingModule,
    //MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
