import { MadMaterialModule } from './mad-material.module';

describe('MadMaterialModule', () => {
  let madMaterialModule: MadMaterialModule;

  beforeEach(() => {
    madMaterialModule = new MadMaterialModule();
  });

  it('should create an instance', () => {
    expect(madMaterialModule).toBeTruthy();
  });
});
