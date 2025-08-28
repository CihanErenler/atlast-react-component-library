import { Button } from "./main";

function App() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" color="danger" />
        <Button title="Hello world" disabled />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" variant="outline" />
        <Button title="Hello world" disabled />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" variant="ghost" />
        <Button title="Hello world" variant="ghost" disabled />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" borderRadius="small" />
        <Button title="Hello world" disabled borderRadius="small" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" variant="outline" borderRadius="small" />
        <Button
          title="Hello world"
          variant="outline"
          disabled
          borderRadius="small"
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" borderRadius="medium" />
        <Button title="Hello world" disabled borderRadius="medium" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" variant="outline" borderRadius="medium" />
        <Button
          title="Hello world"
          variant="outline"
          disabled
          borderRadius="medium"
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" borderRadius="full" />
        <Button title="Hello world" disabled borderRadius="full" />
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <Button title="Hello world" variant="outline" borderRadius="full" />
        <Button
          title="Hello world"
          variant="outline"
          disabled
          borderRadius="full"
        />
      </div>
    </section>
  );
}

export default App;
