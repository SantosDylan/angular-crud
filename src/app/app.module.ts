import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { MainComponent } from './core/components/main/main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/components/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PasswordErrorMessageComponent } from './views/register/components/password-error-message/password-error-message.component';
import { EmailErrorMessageComponent } from './views/register/components/email-error-message/email-error-message.component';
import { CrudInterceptor } from './shared/interceptor/interceptor';
import { CommentsComponent } from './views/comments/comments.component';
import { CreationPopup } from './views/comments/components/creation-popup/creation-popup.component';
import { DeletedPopup } from './views/comments/components/deleted-popup/deleted-popup.component';
import { EditionPopup } from './views/comments/components/edition-popup/edition-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PasswordErrorMessageComponent,
    EmailErrorMessageComponent,
    CommentsComponent,
    CreationPopup,
    DeletedPopup,
    EditionPopup,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CrudInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
