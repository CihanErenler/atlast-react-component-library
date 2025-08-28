import { Button } from './main';
import { Flow } from './main';

function App() {
  return (
    <Flow direction="vertical">
      <Button
        title="Hello world"
        borderRadius="small"
        size="xl"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
      <Button
        title="Hello world"
        borderRadius="small"
        size="xl"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
      <Button
        title="Hello world"
        borderRadius="small"
        size="xl"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
      <Button
        title="Hello world"
        borderRadius="small"
        size="xl"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
      <Button
        title="Hello world"
        borderRadius="small"
        size="xl"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
    </Flow>
  );
}

export default App;
