const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yKb2fopXHs8DBr8kZdp6/comments';

const addComment = async (id ,userName, userComment) => {
    const data = {
        "item_id": id,
        "username": userName,
        "comment": userComment
    }
    await fetch(commentUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
}

export default addComment;