function Button() {
  const [counter, setCounter] = useState(5);
	return <button onClick = {() => 
      setCounter(counter * 2)}
    >{counter}</button>
}

root.render(
  <Button />,  
  document.getElementById('mountNode'),
);
