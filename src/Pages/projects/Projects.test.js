import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Projects from '.';

describe('Projects page', () => {
  const projects = [
    {
      id: '1', name: 'Data Visualization',
      description: 'Data Visuaization for my data analysis.',
      analisys: ['Python', 'Pandas', 'NumPY', 'Matplotlib'],
      backend: ['REST API', 'Node', 'Axios', 'React-Router'],
      frontend: ['React', 'HTML5', 'CSS3', 'TypeScript', 'Ionic', 'Rechart', 'Nivo'],
      links: ['https://github.com/hcandelaria/dataVisualization', 'https://data.hcandelaria.com'],
      images: [
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization1.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization2.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization3.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization4.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization5.png"],
      services: ['AWS S3', 'AWS Amplify', 'AWS Route53'],
      // test: ['Jest', 'Enzyme'],
    }, {
      id: '0', name: 'Data Visualization',
      description: 'Data Visuaization for my data analysis.',
      analisys: ['Python', 'Pandas', 'NumPY', 'Matplotlib'],
      backend: ['REST API', 'Node', 'Axios', 'React-Router'],
      links: ['https://github.com/hcandelaria/dataVisualization', 'https://data.hcandelaria.com'],
      frontend: ['React', 'HTML5', 'CSS3', 'TypeScript', 'Ionic', 'Rechart', 'Nivo'],
      images: [
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization1.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization2.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization3.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization4.png",
        "https://hcandelariapersonalportfolio.s3.amazonaws.com/images/dataVisualization/dataVisualization5.png"],
      services: ['AWS S3', 'AWS Amplify', 'AWS Route53'],
      test: ['Jest', 'Enzyme'],
    }
  ]

  it('should mounts', () => {
    render(<Projects />);
    const projectsPage = screen.getByTestId('projects-page');
    expect(projectsPage).toBeInTheDocument();
  });

  it('should render a loading status', () => {
    render(<Projects />)
    const loadingEl = screen.getByRole("status")
    expect(loadingEl).toBeInTheDocument()
  })

  it('should render 2 project', () => {
    render(<Projects projects={projects} />)
    const cards = screen.getAllByRole("note")
    expect(cards.length).toEqual(2)
  })

  it('should render correctly', () => {
    const tree = renderer.create(<Projects projects={projects} />).toJSON()
    expect(tree).toMatchSnapshot();
  })

});
