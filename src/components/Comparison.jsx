import React from "react";

const Comparison = () => {
  const data = [
    {
      aspect: "Syntax",
      functional: "Simpler syntax using plain JavaScript functions.",
      classBased: "Requires ES6 class syntax with render method."
    },
    {
      aspect: "State Handling",
      functional: "Uses useState hook for state management.",
      classBased: "Uses this.state and this.setState for state updates."
    },
    {
      aspect: "Lifecycle Methods",
      functional: "Replaces lifecycle methods with useEffect.",
      classBased: "Relies on predefined methods like componentDidMount."
    },
    {
      aspect: "Performance",
      functional: "Lightweight and optimized for modern React.",
      classBased: "Heavier with more boilerplate code."
    },
    {
      aspect: "Readability",
      functional: "Easier to read and maintain.",
      classBased: "More verbose and less concise."
    },
    {
      aspect: "Event Handling",
      functional: "No need for explicit binding.",
      classBased: "Requires explicit this binding for methods."
    },
    {
      aspect: "React Version Support",
      functional: "Hooks introduced in React 16.8.",
      classBased: "Available since React’s inception."
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Comparison: Functional vs. Class Components</h1>
      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Aspect</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Functional Component</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Class-Based Component</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.aspect}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.functional}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.classBased}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comparison;
