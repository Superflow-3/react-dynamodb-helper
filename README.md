# react-dynamodb-helper

> A helper component to interface with dynamodb using the AWS SDK, directly from React

[![NPM](https://img.shields.io/npm/v/react-dynamodb-helper.svg)](https://www.npmjs.com/package/react-dynamodb-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-dynamodb-helper
```
Then install the dependencies.

## Dependencies

```bash
npm install --save aws-sdk
```

## Configuration

### AWS Dynamodb

You will need to create table(s) in dynamodb according to your data model.

### AWS Credentials

AWS region, secret and access key form the credentials. These are required to use this package. It is crucial that these credentials are given create, retrieve, update and delete permissions in aws for dynamodb.

You can now review the functionality below.

## Functionality

```jsx

/*

region: aws region
secret: aws secret
key: aws access key
params: query parameters

*/

getData(region, secret, key, params) {}

queryData(region, secret, key, params) {}

scanData(region, secret, key, params) {}

putData(region, secret, key, params) {}

updateData(region, secret, key, params) {}

deleteData(region, secret, key, params) {}

```



## Usage

```jsx

import React, { useEffect } from 'react'

import * as DynamoDB from 'react-dynamodb-helper';

const App = () => {

    useEffect(() => {

        async function getData() {
            var params = {
            TableName: "Account_Credentials",
            Key : { 
                "email" : 'hru****@***ies.com',
            }
            };

            // aws_secret and aws_access_key need to have
            // dynamodb access
            
            let result = await DynamoDB.getData("aws_region", "aws_secret", "aws_access_key", params)

        }
        getData();

    }, [])


    useEffect(() => {

        async function updateData() {
            var params = {
                TableName: "Account_Credentials",
                Key : { 
                    "email" : 'hru****@***ies.com',
                },
                UpdateExpression: "set #otp = :otpVal",
                ExpressionAttributeNames: {
                    "#otp": "otp",
                },
                ExpressionAttributeValues: {
                    ":otpVal": "1212"
                }
            };

            // aws_secret and aws_access_key need to have
            // dynamodb access
            
            let result = await DynamoDB.updateData("aws_region", "aws_secret", "aws_access_key", params)

        }
        getData();

    }, [])

  return <div>Hello DynamoDB Helper</div>
}

export default App

```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
