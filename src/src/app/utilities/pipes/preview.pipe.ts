import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'preview' })
export default class PreviewPipe implements PipeTransform {
    transform(value: string, args: number): string {
        if (!value) return value;
        if (!args) args = 20;
        if (value.length > args) return value.substring(0, args) + '...';
        return value;
    }
}
