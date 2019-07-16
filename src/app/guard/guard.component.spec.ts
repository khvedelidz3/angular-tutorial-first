
import { GuardComponent } from './guard.component';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

describe('Guard Service tests', () => {
    let component;

    beforeEach(() => {
        component = new GuardComponent(new AuthService(new UsersService));
    })

    it('Getter acces should return false by default', () => {
        expect(component.access).toBe(false);
    });

    it('Method allow should change acces to true', () => {
        component.allow();
        expect(component.access).toBe(true);
    })

    it('Method disallow should change acces to false', () => {
        component.disallow();
        expect(component.access).toBe(false);
    })
});