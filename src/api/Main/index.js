import API from 'api';

const getExample = () => API.get('/<url>');
const postExample = () => API.post('/<url>');
const deleteExample = () => API.delete('/<url>');
const putExample = () => API.put('/<url>');

const MainAPI = {
  getExample,
  postExample,
  deleteExample,
  putExample
};

export default MainAPI;
