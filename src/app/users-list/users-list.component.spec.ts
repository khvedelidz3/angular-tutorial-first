import { UsersListComponent } from "./users-list.component";
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

describe('Users list tests', () => {
    let component;;

    beforeEach(() => {
        component = new UsersListComponent(new AuthService(new UsersService), new UsersService());
    })

    it('Dialog field by deafult should be fasle', () => {
        expect(component.dialog).toBe(false);
    });

    it('Method startDialog should change dialog filed to true', () => {
        component.startDialog();
        expect(component.dialog).toBe(true);
    });

});