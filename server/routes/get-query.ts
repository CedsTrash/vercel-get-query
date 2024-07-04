export default eventHandler((event) => {
    const query = getQuery(event);
    console.log('=== QUERY ===');
    console.log(query);
  
    return query;
  });
  