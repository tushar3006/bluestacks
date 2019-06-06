import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BluestacksModule } from './modules/bluestacks/bluestacks.module';
import { AppComponent } from './app.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BluestacksModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
