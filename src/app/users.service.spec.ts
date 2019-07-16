import { UsersService } from "./users.service";

describe('Users service tests', () => {
    let service: UsersService;

    beforeEach(() => {
        service = new UsersService();
    })

    it('Method get users should return empty array if users doesnot exists', () => {
        expect(service.getUsers().length).toBe(0);
    });

    it('Method get users should return array of users if we have users', () => {
        const user = {
            email: 'testemail',
            nickName: 'testnickname',
            website: 'testwebsite',
            phoneNumber: 'test phone number',
            password: 'test password'
        }
        service.users.push(user);
        service.users.push(user);
        expect(service.getUsers().length).toBe(2);
    });

    it('Method get users should return array of users if we have users', () => {
        const user = {
            email: 'testemail',
            nickName: 'testnickname',
            website: 'testwebsite',
            phoneNumber: 'test phone number',
            password: 'test password'
        }
        service.users.push(user);
        service.users.push(user);
        expect(service.getUsers().length).toBe(2);
    });

    it('Method getUser return undefined if user doesnot match to credentials', () => {
        const user = {
            email: 'testemail',
            nickName: 'testnickname',
            website: 'testwebsite',
            phoneNumber: 'test phone number',
            password: 'test password'
        }
        service.users.push(user);
        service.users.push(user);
        const credentials = { email: 'not matched', password: 'not matched too' };

        expect(service.getUser(credentials)).toBeUndefined();
    });

    it('Method getUser return user if its exists', () => {
        const user = {
            email: 'testemail',
            nickName: 'testnickname',
            website: 'testwebsite',
            phoneNumber: 'test phone number',
            password: 'test password'
        }
        service.users.push(user);
        const credentials = { email: 'testemail', password: 'test password' };

        expect(service.getUser(credentials)).toEqual(user);
    });

    it('Method update should update user', () => {
        const user = {
            email: 'testemail',
            nickName: 'testnickname',
            website: 'testwebsite',
            phoneNumber: 'test phone number',
            password: 'test password'
        }
        service.users.push(user);

        const data = {
            email: 'updated',
            nickName: 'updated',
            website: 'updated',
            phoneNumber: 'updated',
            passwordGroup: {
                password: 'updated'
            }
        };

        service.update(user, data);

        expect(service.users[0]).toBe(user);
    });

});