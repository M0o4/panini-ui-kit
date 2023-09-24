import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniniUiKitPackageComponent } from './panini-ui-kit-package.component';

describe('PaniniUiKitPackageComponent', () => {
    let component: PaniniUiKitPackageComponent;
    let fixture: ComponentFixture<PaniniUiKitPackageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PaniniUiKitPackageComponent],
        });
        fixture = TestBed.createComponent(PaniniUiKitPackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
