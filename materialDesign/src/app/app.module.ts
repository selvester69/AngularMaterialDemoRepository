import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MatInputModule,MatButtonModule,MatDialogModule,MatCardModule, MatSidenavModule, MatToolbarModule } from "@angular/material";
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatTooltipModule } from "@angular/material";
import { ToolTipDemoComponent } from './tool-tip-demo/tool-tip-demo.component';
import { MatSnackBarModule } from "@angular/material";
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { MatMenuModule,MatIconModule } from "@angular/material";
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent,
    MyDialogComponent,
    ToolTipDemoComponent,
    SnackbarDemoComponent,
    MenudemoComponent,
    SidenavdemoComponent,
    ToolbardemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
    
  ],
  entryComponents:[
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
