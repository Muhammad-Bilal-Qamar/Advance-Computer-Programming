import './App.css'

function App() {
  // Array of student objects containing id, name, and score
  const students = [
    { id: 1, name: 'Alice Johnson', score: 85 },
    { id: 2, name: 'Bob Smith', score: 42 },
    { id: 3, name: 'Charlie Brown', score: 73 },
    { id: 4, name: 'Daisy Miller', score: 50 },
    { id: 5, name: 'Ethan Davis', score: 38 },
    { id: 6, name: 'Fiona Garcia', score: 91 },
  ]

  return (
    <div className="container">
      <h1 className="title">Student Results</h1>
      <p className="subtitle">List Rendering &amp; Conditional Rendering</p>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.score}</td>
              <td>
                {student.score >= 50 ? (
                  <span className="status-pass">Pass</span>
                ) : (
                  <span className="status-fail">Fail</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
