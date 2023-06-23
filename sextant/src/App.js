import './App.css';
import './blue.css'; // Import the blue-theme.css file
import Banner from './banner';
import Exhibit from './exhibit';
import IPDisplay from './ip';
import PacketLatency from './latency';

const App = () => {
  return (
    <div className="app">
      <Banner title="Sextant" />
      <Exhibit heading="IPv4">
        {/* Add your child components here */}
        <p><IPDisplay /></p>
      </Exhibit>
      <Exhibit heading="IPv6">
        {/* Add your child components here */}
        <p><IPDisplay version="ipv6" /></p>
      </Exhibit>
      <Exhibit heading="Latency">
        {/* Add your child components here */}
        <p><PacketLatency /></p>
      </Exhibit>
      {/* Add more Exhibit components as needed */}
    </div>
  );
};

export default App;