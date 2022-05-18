import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { BigItemComponent } from './components/big-item/big-item.component';
import { FactoryComponent } from './components/factory/factory.component';
import { FactoryTestItemComponent } from './components/factory-test-item/factory-test-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    BigItemComponent,
    FactoryComponent,
    FactoryTestItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
