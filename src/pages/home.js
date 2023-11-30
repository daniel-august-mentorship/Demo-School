import React from "react";
import Stack from "react-bootstrap/Stack";
import Card from "../components/card";

function Home() {
  return (
    <Stack gap={3}>
      <Card title="Daily Logins" content={150} label=" Since Last Month" />
    </Stack>
  );
}

export default Home;
