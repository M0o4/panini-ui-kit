import { TestBed } from '@angular/core/testing';

import { PaniniUiKitPackageService } from './panini-ui-kit-package.service';

describe('PaniniUiKitPackageService', () => {
    let service: PaniniUiKitPackageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PaniniUiKitPackageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
