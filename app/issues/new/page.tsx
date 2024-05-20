"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="space-y-5">
      <TextField.Root placeholder="title" />
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
