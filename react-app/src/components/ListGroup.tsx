function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Vancouver",
    "Tokyo",
    "Singapore",
    "Hong Kong",
    "Sydney",
  ];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>There are no items in the list</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
