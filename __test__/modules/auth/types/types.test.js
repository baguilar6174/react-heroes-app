import { types } from '../../../../src/modules/auth/types/types';

describe('Test on types.js', () => {
	test('should return these types', () => {
		expect(types).toEqual({
			login: '[auth] Login',
			logout: '[auth] Logout',
		});
	});
});
