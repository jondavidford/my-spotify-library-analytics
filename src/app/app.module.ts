import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SpotifyCallbackComponent } from './spotify-callback/spotify-callback.component';
import { httpInterceptorProviders } from './http-interceptors/index';
import { UserTopTrackFeaturesComponent } from './user-top-track-features/user-top-track-features.component';
import { TrackInfoComponent } from './track-info/track-info.component';
import { ConcatArtistsPipe } from './concat-artists.pipe';
import { TopTrackAnalyticsComponent } from './user-top-track-features/top-track-analytics/top-track-analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SpotifyCallbackComponent,
    UserTopTrackFeaturesComponent,
    TrackInfoComponent,
    ConcatArtistsPipe,
    TopTrackAnalyticsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    NgxChartsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
