import { useEffect, useState } from "react";
import { Dropdown, DropdownHeader } from "react-bootstrap";

interface User {
  _id: string,
  name: string,
  score: string
  difficulty: string
}

function TriviaList() {
  const [users, setUsers] = useState([]);
  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    fetch(`http://localhost:5050/users/${difficulty}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users", err));
  }, [difficulty]);

  return (
    <div style={{padding: '25px'}}>
      <h2>LeaderBoard:</h2>
        <Dropdown>
          <DropdownHeader>{difficulty}</DropdownHeader>
          <Dropdown.Toggle/>
            <Dropdown.Menu>
            <Dropdown.Item onClick={() => setDifficulty("easy")}>Easy</Dropdown.Item>
            <Dropdown.Item onClick={() => setDifficulty("medium")}>Medium</Dropdown.Item>
            <Dropdown.Item onClick={() => setDifficulty("hard")}>Hard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      <ol>
        {users.map((user: User) => (
          <li style={{ listStylePosition: 'inside' }} key={user._id}>{user.name} — {user.score}, {user.difficulty}</li>
        ))}
      </ol>
    </div>
  );
}

export default TriviaList;