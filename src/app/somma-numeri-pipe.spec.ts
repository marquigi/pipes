import { SommaNumeriPipe } from './somma-numeri-pipe';

describe('SommaNumeriPipe', () => {
  it('create an instance', () => {
    const pipe = new SommaNumeriPipe();
    expect(pipe).toBeTruthy();
  });
});
