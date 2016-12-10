import React from 'react';
import GithubBox from '../../components/GithubBox';
//将 userId 当作 props 传给 <GithubBox />
const ResultPage = (props) => (
  <div> 
    <GithubBox data={props.data} userId={props.location.query.userId} />  
  </div>
);

export default ResultPage;
