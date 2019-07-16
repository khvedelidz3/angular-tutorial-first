import { AuthService } from "./auth.service";
import { UsersService } from './users.service';

describe('Auth Service tests', () => {
    let service: AuthService;

    beforeEach(() => {
        service = new AuthService(new UsersService());
    })

    it('Default value of access should be false', () => {
        expect(service.isEnabled()).toBe(false);
    });

    it('Method allow should set access to true', () => {
        service.allow();
        expect(service.isEnabled()).toBe(true);
    });

    it('Method disallow shiuld set access ro false', () => {
        service.disallow();
        expect(service.isEnabled()).toBe(false);
    });

    it('isEnabled should return access value', () => {
        expect(service.isEnabled()).toBe(service.access);
    })
});