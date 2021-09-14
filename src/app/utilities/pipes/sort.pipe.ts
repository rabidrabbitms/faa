import { Pipe, PipeTransform } from "@angular/core";
import sort from "../sort";

@Pipe({ name: 'sort' })
export default class SortPipe implements PipeTransform {
    transform = sort;
}
