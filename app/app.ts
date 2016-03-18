import {App, IonicApp, Platform, MenuController} from 'ionic-angular';

import {StartPage} from './pages/start/startPage';
import {HomePage} from './pages/home/homePage';

import {AuthService} from './providers/authService';

import {APP_PROVIDERS} from './app.providers';
import {APP_DIRECTIVES} from './app.directives';
import {APP_PIPES} from './app.pipes';

console.log(APP_PIPES);

@App({
  templateUrl: 'build/app.html',
  providers: [APP_PROVIDERS, APP_PIPES],
  //pipes: APP_PIPES,
  //  directives: [APP_DIRECTIVES],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class IcbApp {
  rootPage: any = StartPage;
  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    private authService: AuthService
    ) {
    if (this.authService.hasToken()) {
      this.rootPage = HomePage;
    }

    this.initializeApp();

    this.pages = [
      { title: 'Inicio', icon: "home", component: HomePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    this.menu.close();

    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
