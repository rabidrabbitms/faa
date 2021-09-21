/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import ScriptLoader from './script-loader.service';

describe('Service: ScriptLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptLoader]
    });
  });

  it('should ...', inject([ScriptLoader], (service: ScriptLoader) => {
    expect(service).toBeTruthy();
  }));
});
