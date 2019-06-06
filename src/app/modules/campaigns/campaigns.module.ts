import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  imports: [CommonModule, CalendarModule, FormsModule, DialogModule],
  declarations: [CampaignsComponent, CampaignListComponent, CustomDatePipe],
  exports: [CampaignsComponent]
})
export class CampaignsModule {}
