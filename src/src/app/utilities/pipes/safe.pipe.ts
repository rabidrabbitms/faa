import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safe'
})
export default class SafePipe implements PipeTransform {
    constructor(readonly domSanitizer: DomSanitizer) {}
    transform(
        value: string,
        kind: 'html' | 'resource' | 'script' | 'style' | 'url' = 'html'
    ) {
        switch (kind) {
            case 'html':
                return this.domSanitizer.bypassSecurityTrustHtml(value);
            case 'resource':
                return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
            case 'script':
                return this.domSanitizer.bypassSecurityTrustScript(value);
            case 'style':
                return this.domSanitizer.bypassSecurityTrustStyle(value);
            case 'url':
                return this.domSanitizer.bypassSecurityTrustUrl(value);
        }
    }
}
