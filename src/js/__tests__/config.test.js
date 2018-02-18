import config from '../config.js';

it('Charity ID for BHF', () => {
    expect(config.CHARITY_ID).toBe(183092);
});

it('API key has been entered', () => {
    expect(config.API_KEY).not.toBe('');
});

it('API URL is correct', () => {
    expect(config.BASE_URL).toBe('https://api.justgiving.com/');
});