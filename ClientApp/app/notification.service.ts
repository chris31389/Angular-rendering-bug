import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class NotificationService {
  private readonly toastrConfig: any;

  constructor(private readonly toastrService: ToastrService) {}
  
  public raiseSuccess(message:string): void {
      this.toastrService.success(message, "");
  }

  public raiseInfo(message:string): void {
      this.toastrService.info(message, "");
  }

  public raiseWarning(message:string): void {
      this.toastrService.warning(message, "");
  }
  
  public raiseError(message:string): void {
      this.toastrService.error(message, "");
  }
}
