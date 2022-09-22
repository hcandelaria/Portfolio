import { getAllItems } from './api';


describe('getAllItems API', () => {

  it('should to have projects', () => {
    return getAllItems().then(data => {
      expect(data.projects).toBeTruthy();
    })
  })
  it('should have all 6 projects', () => {
    return getAllItems().then(data => {
      expect(data.projects.length).toEqual(6);
    })
  })
})