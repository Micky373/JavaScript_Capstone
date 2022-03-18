const addLike = async (id, postUrl) => {
  const data = {
    item_id: id,
  };
  await fetch(postUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
export default addLike;