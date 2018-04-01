import { TestBed, inject } from '@angular/core/testing';

import { GizmoService } from './gizmo.service';

describe('GizmoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GizmoService]
    });
  });

  it('should be created', inject([GizmoService], (service: GizmoService) => {
    expect(service).toBeTruthy();
  }));
});
