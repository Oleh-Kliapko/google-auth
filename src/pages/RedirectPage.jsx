const RedirectPage = () => {
  return (
    <>
      <div style={{ padding: "40px" }}>
        <h2 style={{ fontSize: "24px", color: "green" }}>
          Authentication successful!
        </h2>
        <button onClick={() => (window.location.href = `/`)}>Go back</button>
      </div>
    </>
  );
};

export default RedirectPage;
