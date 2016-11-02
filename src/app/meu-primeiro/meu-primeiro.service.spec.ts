/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeuPrimeiroService } from './meu-primeiro.service';

describe('Service: MeuPrimeiro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeuPrimeiroService]
    });
  });

  it('should ...', inject([MeuPrimeiroService], (service: MeuPrimeiroService) => {
    expect(service).toBeTruthy();
  }));
});
