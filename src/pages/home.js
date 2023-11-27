import React from "react";
import Card from "../components/card";

function Home() {
  return (
    <div>
      <Card title="Daily Logins" content={150} label=" Since Last Month" />
    </div>
  );
}

export default Home;
