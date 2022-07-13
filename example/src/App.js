import React, { useEffect } from 'react'

import * as DynamoDB from 'react-dynamodb-helper';

const App = () => {

  useEffect(() => {
    async function getData() {
      var params = {
        TableName: "Account_Credentials",
        Key : { 
            "email" : 'hrushi@megotechnologies.com',
        }
      };
  
      let result = await DynamoDB.getData("ap-south-1", "aws_secret", "aws_access_key", params)
  
    }
    getData();
  }, [])

  return <div>Hello DynamoDB Helper</div>
}

export default App
