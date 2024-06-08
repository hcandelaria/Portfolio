import { render, screen } from '@testing-library/react';
import NoteCarousel from '.';

describe('CardCarousel component', () => {
  it('should mount 5 images', () => {
    const images = [
      "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization1.png",
      "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization2.png",
      "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization3.png",
      "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization4.png",
      "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization5.png"
    ]
    render(<NoteCarousel images={images} />);
    const imgList = screen.getAllByRole('img');
    expect(imgList.length).toEqual(1);
  });


});
