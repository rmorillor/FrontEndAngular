import { AuthService } from './auth.service';
import { of } from 'rxjs';

describe('Auth Service', () => {

    let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy }
    let authService: AuthService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('httpClient', ['get', 'post'])
        authService = new AuthService(httpClientSpy as any);
    });


    it('Debe de llamar al servidor para hacer login', (done: DoneFn) => {

        httpClientSpy.post.and.returnValue(of(true));

        authService.login('test1@test.com', '123456').subscribe(ok => {
            if (ok === true) {
                expect(ok).toBe(true);
                done();
                return true;
            } else {
                return false;
                done.fail
            }
        });


    });

    it('Debe de llamar al servidor para hacer registro', (done: DoneFn) => {

        httpClientSpy.post.and.returnValue(of(true));

        authService.registro('test1', 'test1@test.com', '123456').subscribe(ok => {
            if (ok === true) {
                expect(ok).toBe(true);
                done();
                return true;
            } else {
                return false;
                done.fail
            }
        });


    });

    it('Debe de llamar al servidor para validar token', (done: DoneFn) => {

        httpClientSpy.post.and.returnValue(of(true));

        authService.validarToken().subscribe(ok => {
            if (ok === true) {
                expect(ok).toBe(true);
                done();
                return true;
            } else {
                return false;
                done.fail
            }
        });


    });

});