import { Button } from './main';

function App() {
  return (
    <section>
      <Button
        title="Hello world"
        borderRadius="small"
        size="xs"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
      <Button
        title="Hello world"
        borderRadius="small"
        size="sm"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
      <Button
        title="Hello world"
        borderRadius="small"
        size="md"
        onClick={() => {
          console.log('test');
          alert('clicked');
        }}
      />
      <Button
        title="Hello world"
        borderRadius="small"
        size="lg"
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
    </section>
  );
}

export default App;
