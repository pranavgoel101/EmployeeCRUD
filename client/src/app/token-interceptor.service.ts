import { UserauthService } from './userauth.service';
import { Injectable , Injector} from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector: Injector
    ) { }

  intercept(req , next) {
    let userauthservice = this.injector.get(UserauthService) ;
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${userauthservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
