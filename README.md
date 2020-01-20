# aws-sam-study

## Reference
-[Learning Amazon Web Services Lambda](https://www.linkedin.com/learning/learning-amazon-web-services-lambda-2/)


## SAM features
- Single deploymnet configuration
- Integration with deveopment tools
- Local testing and debugging
- Built on AWS CloudFormation
  SAM infrastructure gets transformed into CloudFormation

## SAM Setup
- Insta AWS Cli (Python, Pip)
- Install SAM Cli
```
  pip install aws-sam-cli
```
or
```
  brew upgrade
  brew update
  brew tap aws/tap
  brew install aws-sam-cli
```
Test
```
  sam --verison
```
- Setup the AWS credentials
```
  aws configure
```

## Create SAM project
```
  sam init --runtime nodejs12.x
```

## Add resouce (Lambda and API gateway) into template
```
  ClockFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: clock/   # folder of the handler
      Handler: handler.clock
      Runtime: nodejs12.x
      Events:
        ClockApi:
          Type: Api
          Properties:
            Path: /clock
            Method: get
```
## Add code
```
  mkdir clock
  cd clock
  npm init -y

  npm i -S moment    # build will use the package installed
```

## Build and Deploy
```
  sam build
```
## Package and deploy the project
Create S3
```
  aws s3 --region us-west-2 mb s3://ben-s3-study
```
Create package with package.yml and upload code to S3 bucket
```
  cd ben-sam-app
  sam package --template-file template.yaml --output-template-file package.yml --s3-bucket ben-s3-study
```

Deploy to CloudFormation
```
  sam deploy --region us-west-2 --capabilities CAPABILITY_IAM --template-file package.yml --stack-name ben-sam-app-stack
```

Check log
```
  sam logs --region us-west-2 --name ClockFunction --stack-name ben-sam-app-stack 
```


## Clean Up
```
  aws cloudformation delete-stack --stack-name ben-sam-app-stack 
```