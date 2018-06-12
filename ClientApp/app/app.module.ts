import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { WorkflowsComponent } from "./item-list/item-list.component";
import { FieldsComponent } from "./fields/fields.component";
import { FieldService } from "./fields/field.service";
import { WorkflowService } from "./item-list/item.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-full-width",
      preventDuplicates: true,
      maxOpened: 1
    }),
    RouterModule.forRoot([
      { path: "", redirectTo: "workflows", pathMatch: "full" },
      { path: "**", redirectTo: "workflows" },
      { path: "workflows", component: WorkflowsComponent }
    ])
  ],
  declarations: [
    AppComponent,
    WorkflowsComponent,
    FieldsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: "ORIGIN_URL", useValue: location.origin },
    WorkflowService,
    FieldService
  ],
  exports: []
})
export class AppModule {}
