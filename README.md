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