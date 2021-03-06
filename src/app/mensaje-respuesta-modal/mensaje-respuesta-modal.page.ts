import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-mensaje-respuesta-modal',
  templateUrl: './mensaje-respuesta-modal.page.html',
  styleUrls: ['./mensaje-respuesta-modal.page.scss'],
})
export class MensajeRespuestaModalPage implements OnInit {

  score=1400;
  modalTitle:string;
  modelId:number;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }


  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }
 
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
