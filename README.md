# AngularTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## update package dependencies
update base angular package
```
ng update @angular/core@14 @angular/cli@14
```
update other packages
```
ng update @angular/cdk @ngx-translate/http-loader core-js hammerjs jquery node-gyp rxjs tslib zone.js
```

## Third party packages
### Fonts
```
ng update font-awesome roboto-fontface
```
| package | usage |
| --- | --- |
| font-awesome | Font Awesome is a full suite of 675 pictographic icons for easy scalable vector graphics on websites, created and maintained by Dave Gandy. Stay up to date with the latest release and announcements on Twitter: @fontawesome. |
| roboto-fontface | A simple package providing the Roboto fontface. The font was created by Christian Robertson. |

### Stylesheets
```
ng update @angular/material ace-builds animate.css bootstrap echarts metro4 moment moment-timezone ngx-echarts ngx-progressbar ngx-toastr xterm
```
| package | introduction |
| --- | --- |
| @angular/material | The sources for this package are in the main Angular Material repo. Please file issues and pull requests against that repo. |
| @popperjs/core | Given an element, such as a button, and a tooltip element describing it, Popper will automatically put the tooltip in the right place near the button. |
| ace-builds | Ace is a code editor written in JavaScript. |
| animate.css | |
| bootstrap | Sleek, intuitive, and powerful front-end framework for faster and easier web development. |
| echarts | Apache ECharts is a free, powerful charting and visualization library offering an easy way of adding intuitive, interactive, and highly customizable charts to your commercial products. It is written in pure JavaScript and based on zrender, which is a whole new lightweight canvas library. |
| metro4 | Sleek, intuitive, and powerful front-end framework for faster and easier web development. Build responsive, mobile-first projects on the web with the first front-end component library in Metro Style. |
| moment | A JavaScript date library for parsing, validating, manipulating, and formatting dates. |
| moment-timezone | Parse and display moments in any timezone. |
| ngx-echarts | Angular directive for Apache ECharts (incubating) (version >= 3.x) (The project is renamed from angular2-echarts) |
| ngx-progressbar | A nanoscopic progress bar. Featuring realistic trickle animations to convince your users that something is happening! |
| ngx-toastr | Toastr for Angular |
| xterm | Full xterm terminal, in your browser |
### Communication
```
ng update bufferutil socket.io socket.io-client neffos.js
``` 
| package | introduction |
| --- | --- |
| bufferutil | bufferutil is what makes WebSocket fast. It provides some utilities to efficiently perform some operations such as masking and unmasking the data payload of WebSocket frames. | 
| socket.io | Node.js realtime framework server |
| socket.io-client | Realtime application framework client |
| neffos.js |neffos.js is the client-side javascript library for the neffos real-time framework. It can run through any modern browser, browserify and nodejs. |

### Tools and others
```
ng update angular-datatables angular-split angularx-qrcode codemirror ngx-cookie-service ngx-logger @popperjs/core utf-8-validate @types/uuid xterm-addon-attach xterm-addon-fit xterm-addon-web-links zmodem.js
```
| package | introduction |
| --- | --- |
| angular-datatables | Angular directive for DataTables |
| angular-split | Angular UI library to split views and allow dragging to resize areas using CSS flexbox layout. |
| angularx-qrcode | angularx-qrcode - a fast and easy-to-use Ivy compatible Ionic and Angular QR Code Generator library |
| codemirror | This package provides an example configuration for the CodeMirror code editor. The actual editor is implemented in the various packages under the @codemirror scope, which this package depends on. |
| ~~ng-qrcode~~ | Simple AOT compatible QR code generator for your Angular project |
| ngx-cookie-service | Angular service to read, set and delete browser cookies. Originally based on the ng2-cookies library. The experienced team behind Studytube will take care of our cookie service from now on. |
| ngx-logger | NGX Logger is a simple logging module for angular (currently supports angular 6+). It allows "pretty print" to the console, as well as allowing log messages to be POSTed to a URL for server-side logging. |
| @popperjs/core | |
| utf-8-validate | Check if a buffer contains valid UTF-8 encoded text. |
| @types/uuid | |
| xterm-addon-attach | |
| xterm-addon-fit | |
| xterm-addon-web-links | |
| zmodem.js | ZMODEM file transfers in JavaScript |

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
