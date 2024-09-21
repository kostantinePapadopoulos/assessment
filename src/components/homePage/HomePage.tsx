const HomePage = () => {
  return (
    <div style={{}}>
      <main style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ fontSize: "2.0rem" }}>Netcompany assessment</div>
        <div style={{ fontSize: "1.25rem" }}>Core used</div>
        <ol
          style={{
            listStyleType: "decimal",
            paddingLeft: "1.5rem",
            fontSize: "0.875rem",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>Next.js Framework</li>
          <li style={{ marginBottom: "0.5rem" }}>Typescript</li>
          <li style={{ marginBottom: "0.5rem" }}>Tailwind</li>
        </ol>
        <div style={{ fontSize: "1.25rem" }}>Extra libraries used</div>
        <ol
          style={{
            listStyleType: "decimal",
            paddingLeft: "1.5rem",
            fontSize: "0.875rem",
          }}
        >
          <li style={{ marginBottom: "0.5rem" }}>React Hook Form</li>
          <li style={{ marginBottom: "0.5rem" }}>Yup</li>
          <li style={{ marginBottom: "0.5rem" }}>Zustand</li>
        </ol>
      </main>
    </div>
  );
};
export default HomePage;
