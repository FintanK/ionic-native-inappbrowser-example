import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no'
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only
    toolbar : 'yes', //iOS only
    enableViewportScale : 'no', //iOS only
    allowInlineMediaPlayback : 'no',//iOS only
    presentationstyle : 'pagesheet',//iOS only
    fullscreen : 'yes',//Windows only
  };

  constructor(platform: Platform, private theInAppBrowser: InAppBrowser) {
    platform.ready().then(() => {
      let target = "_self";
      // OR you can point at a URL when the plugin is ready
      this.theInAppBrowser.create("https://ipfs.io/ipfs/QmRTv3ATD62Jzmim8brtU53k1Dtn7Qzuv7WthDT9y6t3Au/",target,this.options);
    });
  }

}
