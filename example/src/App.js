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
  
      let result = await DynamoDB.getData("ap-south-1", "0nCKOcgRf8ibAgmeuRId5iQ1DZ9u5jWNbDPeMH/h", "AKIASUWOWMZOUWTMABMQ", params)
  
    }
    getData();
  }, [])

  return <div>Hello DynamoDB Helper</div>
}

export default App
