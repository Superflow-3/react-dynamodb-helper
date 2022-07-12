# react-dynamodb-helper

> A helper component to interface with dynamodb using the AWS SDK, directly from React

[![NPM](https://img.shields.io/npm/v/react-dynamodb-helper.svg)](https://www.npmjs.com/package/react-dynamodb-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dynamodb-helper
```

## Usage

```jsx

import React, { useEffect } from 'react'

import * as DynamoDB from 'react-dynamodb-helper';

const App = () => {


  const apiCall = async () => {

    var params = {
      TableName: "Account_Credentials",
      Key : { 
          "email" : 'hrushi@megotechnologies.com',
      }
    };

    let result = await DynamoDB.getData("ap-XXXX-1", "aws_secret", "aws_access_key", params)

  }

  useEffect(() => {
    async function fetchData() {
      await apiCall();
    }
    fetchData();
  }, [])

  return <div>Hello DynamoDB Helper</div>
}

export default App


```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
