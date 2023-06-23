import './App.css';
import './blue.css'; // Import the blue-theme.css file
import Banner from './banner';
import Exhibit from './exhibit';
import IPDisplay from './ip';

const App = () => {
  return (
    <div className="app">
      <Banner title="Colorful Website" />
      <Exhibit heading="Section 1">
        {/* Add your child components here */}
        <p><IPDisplay /></p>
      </Exhibit>
      <Exhibit heading="Section 2">
        {/* Add your child components here */}
        <p><IPDisplay version="ipv6" /></p>
      </Exhibit>
      {/* Add more Exhibit components as needed */}
    </div>
  );
};

export default App;