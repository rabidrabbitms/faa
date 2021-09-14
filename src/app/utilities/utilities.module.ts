import SortPipe from './pipes/sort.pipe';
import FilterPipe from './pipes/filter.pipe';
import FormatPipe from './pipes/format.pipe';
import MaskPipe from './pipes/mask.pipe';
import PreviewPipe from './pipes/preview.pipe';
import SafePipe from './pipes/safe.pipe';
import HTMLPipe from './pipes/html.pipe';
import TakePipe from './pipes/take.pipe';
import SkipPipe from './pipes/skip.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    SortPipe,
    FilterPipe,
    FormatPipe,
    MaskPipe,
    PreviewPipe,
    SafePipe,
    HTMLPipe,
    TakePipe,
    SkipPipe
  ],
  exports: [
    SortPipe,
    FilterPipe,
    FormatPipe,
    MaskPipe,
    PreviewPipe,
    SafePipe,
    HTMLPipe,
    TakePipe,
    SkipPipe
  ],
})
export class UtilitiesModule {}
