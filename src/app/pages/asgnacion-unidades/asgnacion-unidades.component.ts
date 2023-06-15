import { Component } from '@angular/core';

@Component({
  selector: 'app-asgnacion-unidades',
  templateUrl: './asgnacion-unidades.component.html',
  styleUrls: ['./asgnacion-unidades.component.css']
})
export class AsgnacionUnidadesComponent {
  selectedTab: string = "";
  options: string[] = ['UGI', 'USIVM', 'UNR', 'UAJ', 'UPVEP', 'DE', 'UAF'];
  selectedOptions: string[] = [];
  showError: boolean = false;
  

  ngOnInit() {
    this.selectedTab = 'reunionUnidad';
  }

  onCheckboxChange(event: any, option: string) {
    if (event.target.checked) {
      if (this.selectedTab === 'reunionUnidad' || this.selectedTab === 'audienciaUnidad') {
        this.selectedOptions = [option];
      } else {
        this.selectedOptions.push(option);
      }
    } else {
      const index = this.selectedOptions.indexOf(option);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }

  changeTab(tab: string) {
    this.selectedTab = tab;
    this.selectedOptions = [];
  }

  enviar() {
    if (this.selectedOptions.length === 0) {
      this.showError = true;
      const checklist = document.getElementById('checklist');
      if (checklist) {
        checklist.focus();
      }
    } else {
      this.showError = false;
      console.log(this.selectedOptions);
    }
  }
}