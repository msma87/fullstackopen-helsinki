const Header = ({course}) => {
  return <h1>{course}</h1>;
};

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercise}
        </p>
      ))}
    </div>
  )
}

const Total = ({total}) => {
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {id: 1, name: 'Fundamentals of React', exercise: 10},
    {id: 2, name: 'Using props to pass data', exercise: 7},
    {id: 3, name: 'State of a component', exercise: 14},
  ]

  const total = parts.reduce((sum,part)=> sum + part.exercise,0)

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={total}/>
    </div>
  );
};

export default App
