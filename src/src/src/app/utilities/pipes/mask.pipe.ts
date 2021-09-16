import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'mask' })
export default class MaskPipe implements PipeTransform {
  transform(value: string, arg: string): string {
    if (!value) return value;
    value = value.substring(value.length - 4);
    switch (arg) {
      case "ssn":
        return "XXX-XX-" + value;
      case "card":
        return "XXXX-XXXX-XXXX-" + value;
      case "routing":
        return "XXXXX" + value;
      case "bank":
        return "XXXXXX" + value;
      default:
        return value;
    }
  }
}