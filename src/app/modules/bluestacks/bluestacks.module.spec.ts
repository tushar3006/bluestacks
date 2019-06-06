import { BluestacksModule } from './bluestacks.module';

describe('BluestacksModule', () => {
  let bluestacksModule: BluestacksModule;

  beforeEach(() => {
    bluestacksModule = new BluestacksModule();
  });

  it('should create an instance', () => {
    expect(bluestacksModule).toBeTruthy();
  });
});
