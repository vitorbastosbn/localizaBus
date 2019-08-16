import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { OnibusService } from 'src/app/services/onibus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('conteudo', { static: true }) conteudo;
  loading: any;
  linha: string;
  onibus: any;

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private onibusService: OnibusService
  ) { }

  ngOnInit() {
    this.conteudo.el.style.height = (window.innerHeight - 250) + 'px';
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Opa, vai levar só um segundo...'
    });
    await this.loading.present();
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }

  async consultaPosicaoOnibus(event) {
    if (event.keyCode === 13) {
      await this.presentLoading();
      this.onibus = undefined;
      try {
        await this.onibusService.consultarInformacaoOnibus(this.linha).subscribe((respI: any) => {
          this.onibusService.consultaPosicaoOnibus(this.linha).subscribe((resp: any) => {
            this.onibus = respI[0];
            this.onibus.unidades = resp.features;
            this.loading.dismiss();
            console.log(this.onibus);
          });
        });
      } catch (error) {
        this.onibus = undefined;
        this.presentToast(error.message);
        this.loading.dismiss();
      }
    }
  }

}
