import {Component, Inject, Injectable, NgModule, TemplateRef} from "@angular/core";
import {MatLegacyDialogRef as MatDialogRef, MatLegacyDialogConfig as MatDialogConfig, MatLegacyDialog as MatDialog, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA} from "@angular/material/legacy-dialog"
import {ToastrService} from "ngx-toastr";
import {ComponentType} from "@angular/cdk/portal";

export class Option {
  width!: number;
  height!: number;
  title?: string;
  content?: string;
  timeout?: number;
  onCreate?: any;
  onDestroy?: any;
}

class MSG {
  message!: string;
  title?: string;
}

@Injectable()
export class DialogService {
  logs: any[] = [];
  defaultOption: Option = {height: 300, width: 400};
  options: any = {
    progress: true,
    timeout: 1000 * 5,
    pauseOnHover: true,
    clickToClose: true,
    theme: "default",
    rtl: false,
    className: "my-notify",
    animate_in: "notify-fade-in",
    animate_out: "notify-fade-out",
    onCreate: (item: any) => {
      this.logs.push(item);
    },
    onDestroy: (item: any) => {
      this.logs.push(item);
    },
  };

  constructor(private Dialog: MatDialog,
              private toastr: ToastrService) {
  }

  checkdata(data: Option) {
    if (data) {
      if (!data.height) {
        data.height = 300;
      }
      if (!data.width) {
        data.width = 400;
      }
    } else {
      data = {height: 300, width: 400};
    }
    return data;
  }

  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MatDialogConfig<D>): MatDialogRef<T, R> {
    return this.Dialog.open(componentOrTemplateRef, config);
  }

  dialog(data: Option) {
    data = this.checkdata(data);
    return this.Dialog.open(DialogComponent, {
      height: data.height.toString() + "xp",
      width: data.width.toString() + "xp",
      data: {name: "this.name", animal: "this.animal"}
    });
  }

  confirm(data?: Option) {

  }

  tip(data?: Option) {
  }

  loading(data?: Option) {
  }

  alert(data: Option) {
    data = this.checkdata(data);
    return this.Dialog.open(AlertComponent, {
      height: data.height.toString() + "xp",
      width: data.width.toString() + "xp",
      data: {content: data.content}
    });
  }

  info(msg: (MSG | string)) {
    if (typeof msg === "string") {
      this.toastr.info(msg);
    } else {
      if (msg.title) {
        this.toastr.info(msg.message, msg.title);
      } else {
        this.toastr.info(msg.message);
      }
    }
  }


  success(msg: (MSG | string)) {
    if (typeof msg === "string") {
      this.toastr.success(msg);
    } else {
      if (msg.title) {
        this.toastr.success(msg.message, msg.title);
      } else {
        this.toastr.success(msg.message);
      }
    }
  }

  warn(msg: (MSG | string)) {
    if (typeof msg === "string") {
      this.toastr.warning(msg);
    } else {
      if (msg.title) {
        this.toastr.warning(msg.message, msg.title);
      } else {
        this.toastr.warning(msg.message);
      }
    }
  }

  error(msg: (MSG | string)) {
    if (typeof msg === "string") {
      this.toastr.error(msg);
    } else {
      if (msg.title) {
        this.toastr.error(msg.message, msg.title);
      } else {
        this.toastr.error(msg.message);
      }
    }
  }

  prompt(option: Option) {
    // ToDo: use dialog type to fit for requirements
    this.Dialog.open(DialogComponent, {
        height: (option.height || this.defaultOption.height).toString() + "px",
        width: (option.width || this.defaultOption.width).toString() + "px",
        data: option
      }
    );
  }
}

@Component({
  selector: "dialog-dialog",
  templateUrl: "dialog.html",
  styleUrls: ["dialog.scss"]
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<AlertComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: "dialog-alert",
  templateUrl: "alert.html",
  styleUrls: ["./alert.scss"]
})
export class AlertComponent {
  data: any;

  constructor(public dialogRef: MatDialogRef<AlertComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// @Component({
//   selector: 'dialog-success',
//   templateUrl: 'success.html',
//   styleUrls: ['./success.scss']
// })
// export class Success {
//
//   constructor(public dialogRef: MatDialogRef<Alert>) {
//   }
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

@NgModule({
  providers: [
    AlertComponent,
    DialogComponent,
    DialogService
  ],
})
export class DialogProvider {
}
