import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card component', () => {
  it('should mount', () => {
    const data = {
      id: '5', name: 'Data Visualization',
      description: 'Data Visuaization for my data analysis.',
      analisys: ['Python', 'Pandas', 'NumPY', 'Matplotlib'],
      backend: ['REST API', 'Node', 'Axios', 'React-Router'],
      frontend: ['React', 'HTML5', 'CSS3', 'TypeScript', 'Ionic', 'Rechart', 'Nivo'],
      images: [
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization1.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization2.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization3.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization4.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization5.png"],
      services: ['AWS S3', 'AWS Amplify', 'AWS Route53'],
      links: ['https://github.com/hcandelaria/dataVisualization', 'https://data.hcandelaria.com'],
    }

    render(<Card data={data} />)
    const cardEl = screen.getByRole('card')
    expect(cardEl).toBeInTheDocument()
  })
})
