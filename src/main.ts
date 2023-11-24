import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { registerLicense } from '@syncfusion/ej2-base';


registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIfEx3WmFZfV1gcV9GZVZSTGYuP1ZhSXxQd0RhXX9bcHFWTmVVVE0=');


platformBrowserDynamic().bootstrapModule(AppModule).catch((err) => console.error(err));