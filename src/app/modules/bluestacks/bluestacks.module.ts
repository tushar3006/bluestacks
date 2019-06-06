import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BluestacksLayoutComponent } from './components/bluestacks-layout/bluestacks-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { CampaignsModule } from '../campaigns/campaigns.module';

@NgModule({
  imports: [CommonModule, CampaignsModule],
  declarations: [BluestacksLayoutComponent, HeaderComponent],
  exports: [BluestacksLayoutComponent]
})
export class BluestacksModule {}
