import { Component, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

import * as path from 'path';
import * as child_process from 'child_process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public portrait = require('../assets/mouse.jpg');
  ngOnInit() {
    // TODO
    // const ant = child_process.spawn('/home/anatas/Desktop/Git/ant/webview/src/assets/bin/ant', []);
    // ant.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });
  }
  constructor(public electronService: ElectronService,
              private translate: TranslateService) {

    translate.setDefaultLang('en');
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }
}
