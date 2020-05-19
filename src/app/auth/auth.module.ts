import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SecureInnerPagesGuard } from './secureInnerAuth.guard';

@NgModule({
    providers: [
        AuthService,
        AuthGuard,
        SecureInnerPagesGuard
    ],
})
export class AuthModule {}