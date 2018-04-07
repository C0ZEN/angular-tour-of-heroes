import {BrowserModule} from '@angular/platform-browser';
import {
  APP_INITIALIZER,
  NgModule
}                      from '@angular/core';
import {FormsModule}   from '@angular/forms';

import {AppComponent}        from './app.component';
import {HeroesComponent}     from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

import {HeroService}       from './hero.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService}    from './message.service';
import {BtnComponent}      from './btn/btn.component';
import {BtnService}        from './btn/btn.service';

export function overrideBtnConfig(btnService: BtnService) {
  return () => btnService.label = 'Toto';
}

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    BtnComponent
  ],
  imports     : [
    BrowserModule,
    FormsModule
  ],
  providers   : [
    HeroService,
    MessageService,
    BtnService,
    {
      provide   : APP_INITIALIZER,
      useFactory: overrideBtnConfig,
      deps      : [BtnService],
      multi     : true
    }
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {
}
