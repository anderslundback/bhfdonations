import App from './App'

it('dummy test', () => {
  expect(1).toBe(1)
})

it('Always renders a containing div', () => {
  const divs = app().find("div");
  expect(divs.length).toBeGreaterThan(0);
});

