const HomePage = () => {
  return (
    <div>
      <main style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ fontSize: "1.25rem" }}>Core</div>
        <ol
          style={{
            listStyleType: "decimal",
            paddingLeft: "1.5rem",
            fontSize: "0.875rem",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>React js</li>
          <li style={{ marginBottom: "0.5rem" }}>Typescript</li>
        </ol>
        <div style={{ fontSize: "1.25rem" }}>Extra libraries used</div>
        <ol
          style={{
            listStyleType: "decimal",
            paddingLeft: "1.5rem",
            fontSize: "0.875rem",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>React Router</li>
          <li style={{ marginBottom: "0.5rem" }}>React Hook Form</li>
          <li style={{ marginBottom: "0.5rem" }}>Yup</li>
          <li style={{ marginBottom: "0.5rem" }}>Mui</li>
        </ol>
      </main>
    </div>
  );
};
export default HomePage;
