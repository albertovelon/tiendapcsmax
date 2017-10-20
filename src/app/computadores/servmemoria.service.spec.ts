import { TestBed, inject } from '@angular/core/testing';

import { ServmemoriaService } from './servmemoria.service';

describe('ServmemoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServmemoriaService]
    });
  });

  it('should be created', inject([ServmemoriaService], (service: ServmemoriaService) => {
    expect(service).toBeTruthy();
  }));
});
