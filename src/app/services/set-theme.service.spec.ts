import { TestBed } from '@angular/core/testing';

import { SetThemeService } from './set-theme.service';

describe('SetThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetThemeService = TestBed.get(SetThemeService);
    expect(service).toBeTruthy();
  });
});
