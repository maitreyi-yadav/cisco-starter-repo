import './App.css';
import './blue.css'; // Import the blue-theme.css file
import Banner from './banner';
import Exhibit from './exhibit';

const App = () => {
  return (
    <div className="app">
      <Banner title="Colorful Website" />
      <Exhibit heading="Section 1">
        {/* Add your child components here */}
        <p>This is the content of Section 1.</p>
      </Exhibit>
      <Exhibit heading="Section 2">
        {/* Add your child components here */}
        <p>This is the content of Section 2.</p>
      </Exhibit>
      {/* Add more Exhibit components as needed */}
    </div>
  );
};

export default App;