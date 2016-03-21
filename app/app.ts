import {App, IonicApp, Platform, MenuController, NavController} from 'ionic-angular';

import {StartPage} from './pages/start/startPage';
import {HomePage} from './pages/home/homePage';
import {InformativeListPage} from './pages/informativeList/informativeListPage';

import {AuthService} from './providers/authService';

import {APP_PROVIDERS} from './app.providers';
import {APP_DIRECTIVES} from './app.directives';
import {APP_PIPES} from './app.pipes';


@App({
  templateUrl: 'build/app.html',
  providers: [APP_PROVIDERS, APP_PIPES],
  config: {}
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
      { title: 'Inicio', icon: "home", component: HomePage },
      { title: 'Informativos', icon: "list-box", component: InformativeListPage }
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

      this.registerBackButtonListener();
    });
  }

  getNav(): NavController {
    return this.app.getComponent('nav')
  }

  registerBackButtonListener() {
    let nav = this.getNav();

    document.addEventListener('backbutton', () => {
      if (nav.canGoBack()) {
        nav.pop();
        return;
      }

      this.platform.exitApp();
    });
  }

  openPage(page) {
    this.menu.close();

    let nav = this.getNav();
    nav.setRoot(page.component);
  }
}
