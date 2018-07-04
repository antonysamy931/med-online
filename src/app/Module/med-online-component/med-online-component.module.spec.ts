import { MedOnlineComponentModule } from './med-online-component.module';

describe('MedOnlineComponentModule', () => {
  let medOnlineComponentModule: MedOnlineComponentModule;

  beforeEach(() => {
    medOnlineComponentModule = new MedOnlineComponentModule();
  });

  it('should create an instance', () => {
    expect(medOnlineComponentModule).toBeTruthy();
  });
});
