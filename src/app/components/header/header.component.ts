import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private electron: ElectronService) {}

  ngOnInit() {}

  onClickClose() {
    const remote = this.electron.remote;
    remote.getCurrentWindow().close();
  }
}
