const ListItem = ({ item }) => {
  if (item.firstName) {
    // It's a user
    return (
      <li className="list-group-item">
        👤 {item.firstName} {item.lastName} - {item.email}
      </li>
    );
  }

  if (item.title && item.body) {
    // It's a post
    return (
      <li className="list-group-item">
        📝 <strong>{item.title}</strong>
        <br />
        {item.body}
      </li>
    );
  }

  if (item.body && item.postId) {
    // It's a comment
    return (
      <li className="list-group-item">
        💬 Comment on Post #{item.postId}
        <br />
        {item.body}
      </li>
    );
  }

  // Default fallback for unknown item types
  return <li className="list-group-item">{JSON.stringify(item)}</li>;
};

export default ListItem;
