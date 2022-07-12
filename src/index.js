import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

function updateAWSConfigAndGetClient(region, secret, key) {

  const configuration: ConfigurationOptions = {
    region: region,
    secretAccessKey: secret,
    accessKeyId: key
  }
  console.log(configuration);
  AWS.config.update(configuration)
  return new AWS.DynamoDB.DocumentClient();

}

export const getData = async (region, secret, key, params) => {

  const docClient = updateAWSConfigAndGetClient(region, secret, key);

  try {

    var myPromise = () => (
        new Promise((resolve, reject) => {

          docClient.get(params, function(err, data) {
            if (err) {
              console.log(params)
              console.log(err)
              resolve(err);
            } else {
              resolve(data);
            }
          });
          
        })
    );
    var result = await (myPromise()); 
    return result;
      
  } catch (e) {
      console.log(e)
      return -1;  
  }

}

export const queryData = async (region, secret, key, params) => {
  
  const docClient = updateAWSConfigAndGetClient(region, secret, key);
  
  try {
      
      var myPromise = () => (
          new Promise((resolve, reject) => {

            docClient.query(params, onQuery);
            var arrItems = [];
            function onQuery(err, data) {
              if (err) {
                console.log(params)
                console.log(err); 
                resolve(err);
              } else {
                
                for(var i = 0; i < data.Items.length && data.Items.length > 0; i++) {
                  arrItems.push(data.Items[i]);
                }
                
                if (typeof data.LastEvaluatedKey != "undefined") {
                    console.log("Scanning for more...");
                    params.ExclusiveStartKey = data.LastEvaluatedKey;
                    docClient.scan(params, onQuery);
                } else {
                    //console.log(data);
                    resolve(arrItems);  
                }
                
              }
            }
            
          })
      );
      var result = await (myPromise()); 
      return result;
        
    } catch (e) {
        console.log(e)
        return -1;  
    }
}

export const scanData = async (region, secret, key, params) => {

  const docClient = updateAWSConfigAndGetClient(region, secret, key);
  try {
    var myPromise = () => (
        new Promise((resolve, reject) => {

          docClient.scan(params, onScan);

          var arrItems = [];
        
        function onScan(err, data) {
          if (err) {
            console.log(params)
            console.log(err); 
            resolve(err);
          } else {
            
            for(var i = 0; i < data.Items.length && data.Items.length > 0; i++) {
              arrItems.push(data.Items[i]);
            }
            
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            } else {
                //console.log(data);
                resolve(arrItems);  
            }
            
          }
        }
          
        })
    );
    var result = await (myPromise()); 
    return result;
      
  } catch (e) {
      console.log(e)
      return -1;  
  }
}


export const putData = async (region, secret, key, params) => {

  const docClient = updateAWSConfigAndGetClient(region, secret, key);

  try {
    var myPromise = () => (
        new Promise((resolve, reject) => {

          // console.log("dynamodb put params");
          // console.log(params);
          docClient.put(params, function(err, data) {
            console.log({err, data})
            if (err) {
              console.log(params)
              console.log(err)
              resolve(err);
            } else {
              console.log(data)
              resolve(data);
            }
          });
          
        })
    );
    var result = await (myPromise()); 
    return result;
      
  } catch (e) {
      console.log(e)
      return -1;  
  }
}

export const updateData = async (region, secret, key, params) => {

  const docClient = updateAWSConfigAndGetClient(region, secret, key);

  try {
      
      var myPromise = () => (
          new Promise((resolve, reject) => {

            // console.log("dynamodb update params");
            // console.log(params);
            docClient.update(params, function(err, data) {
              if (err) {
                console.log(params)
                console.log(err)
                resolve(err);
              } else {
                resolve(data);
              }
            });
            
          })
      );
      var result = await (myPromise()); 
      return result;
        
    } catch (e) {
        console.log(e)
        return -1;  
    }
}

export const deleteData = async (region, secret, key, params) => {

  const docClient = updateAWSConfigAndGetClient(region, secret, key);
  
  try {

      var myPromise = () => (
          new Promise((resolve, reject) => {
            // console.log("dynamodb delete params");
            // console.log(params);
            docClient.delete(params, function(err, data) {
              if (err) {
                console.log(params)
                console.log(err)
                resolve(err);
              } else {
                resolve(data);
              }
            });
            
          })
      );
      var result = await (myPromise()); 
      return result;
        
    } catch (e) {
        console.log(e)
        return -1;  
    }
}