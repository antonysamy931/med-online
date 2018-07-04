import { MedOnlineRouterModule } from './med-online-router.module';

describe('MedOnlineRouterModule', () => {
  let medOnlineRouterModule: MedOnlineRouterModule;

  beforeEach(() => {
    medOnlineRouterModule = new MedOnlineRouterModule();
  });

  it('should create an instance', () => {
    expect(medOnlineRouterModule).toBeTruthy();
  });
});
