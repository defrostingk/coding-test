async function getDirectory(id) {
  const base =
    'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/';
  const path = id === ROOT ? base : `${base}${id}`;
  try {
    const reponse = await fetch(path);
    return await reponse.json();
  } catch (error) {
    console.error(error);
    alert('Cannot find data.', error);
  }
}
