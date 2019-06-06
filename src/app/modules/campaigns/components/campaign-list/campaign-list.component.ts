import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {
  constructor() {}
  public campaignList: any = [];
  selectedCampaign: any = {};
  displayDetails: Boolean = false;
  ngOnInit() {
    this.initCampaignList();
  }

  initCampaignList() {
    this.campaignList = [
      {
        created_on: new Date(),
        campaign_name: 'Test Whatsapp',
        campaign_img: '',
        campaign_description:
          'this is the conent for this campaign id: whatsapp',
        campaign_pricing: '$100'
      },
      {
        created_on: new Date(
          'Thu Jun 03 2019 14:50:10 GMT+0530 (India Standard Time)'
        ),
        campaign_name: 'Campaign 2',
        campaign_img: '',
        campaign_description: 'this is the conent for this campaign id: 2',
        campaign_pricing: '$50'
      },
      {
        created_on: new Date(),
        campaign_name: 'Campaign 3',
        campaign_img: '',
        campaign_description: 'this is the conent for this campaign id: 3',
        campaign_pricing: '$60'
      },
      {
        created_on: new Date(),
        campaign_name: 'Campaign 4',
        campaign_img: '',
        campaign_description: 'this is the conent for this campaign id: 4',
        campaign_pricing: '$70'
      },
      {
        created_on: new Date(),
        campaign_name: 'Campaign 5',
        campaign_img: '',
        campaign_description: 'this is the conent for this campaign id: 5',
        campaign_pricing: '$10'
      }
    ];
  }

  onSelectCampaign(e, campaign) {
    this.displayDetails = true;
    this.selectedCampaign = campaign;
    e.stopPropagation();
  }
  onSelectCal(e) {
    e.stopPropagation();
  }
  onSelectDate(val) {}
}
