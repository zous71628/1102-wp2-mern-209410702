import axios from 'axios';

const TesFetchUseProxy_02 = async () => {
  const resp = await fetch('/api/v1/data.json');
  const data_local_json = await resp.json();
  console.log('local json data', data_local_json);

  const response = await fetch('/api/v1');
  const data1 = await response.json();
  console.log('fetch data1', data1);

  const data2 = await axios.get('/api/v1');
  console.log('axios data2', data2.data);

  const currentUser = {
    name: '黃致瑋',
    email: 'jack71628@gmail.com',
    password: '1322312',
  };

  try {
    const { data } = await axios.post(
      '/api/v1/auth_02/register_02',
      currentUser
    );
    console.log('register data', data);
  } catch (err) {
    console.log(err);
  }
};

export default TesFetchUseProxy_02;
