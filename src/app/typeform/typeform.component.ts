import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { createWidget, WidgetOptions } from '@typeform/embed';
import { TypeformService } from './typeform.service';

@Component({
  selector: 'app-typeform',
  templateUrl: './typeform.component.html',
  styleUrls: ['./typeform.component.scss']
})
export class TypeformComponent implements AfterViewInit {

  constructor(private typeformService:TypeformService) { }
  

  @ViewChild('container') container:any;

  ngAfterViewInit(): void {
    const element = this.container?.nativeElement as HTMLElement;
    const options:WidgetOptions = {
      container:element,
      onSubmit:(e:TypeFormSubmitResponse)=> this.getTypeFormData(e)
    }
    createWidget('g740qf',options);
  }

  getTypeFormData(e: TypeFormSubmitResponse): void {
    this.typeformService.getResponse(e.responseId);
  } 

}

interface TypeFormSubmitResponse{
  responseId:string;
}
