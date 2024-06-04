"use client";

import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    const getUsers = async () => {
      const users = (await axios.get<User[]>("/api/users")).data;
      setUsers(users);
    };

    getUsers();
  }, []);

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assignee..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;