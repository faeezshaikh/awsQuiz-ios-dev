{
    "quiz": {
        "Id": 11,
        "name": "Certification Exam",
        "logo" : "data/img/certified.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "You can select a specific Availability Zone in which to place your DynamoDB Table", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]

    },
    {
        "Id": 2,
        "Name": "Amazon SWF is useful for automating workflows that include long-running human tasks (e.g. approvals, reviews, investigations, etc.) Amazon SWF reliably tracks the status of processing steps that run up to several days or months.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
   {
        "Id": 3,
        "Name": "In order to enable encryption at rest using EC2 and Elastic Block Store you need to", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Mount the EBS volume in to S3 and then encrypt the bucket using a bucket policy.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure encryption using X.509 certificates", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Configure encryption using the appropriate Operating Systems file system", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Configure encryption when creating the EBS volume", "IsAnswer": true }]
    },
     {
        "Id": 4,
        "Name": "Ephemeral storage is temporary block level storage that only lives during the life of an instance", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
    },
     {
        "Id": 5,
        "Name": "A decider (with regard to SWF) is:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The decider is a systems administrator who must decided on how an SWF is designed.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The decider is a person in the Amazon warehouse who must decide on what products to deliver.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The decider is a program that controls the coordination of tasks, i.e. their ordering, concurrency, and scheduling according to the application logic.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "The decider is an EC2 instance which monitors SWF and decides whether to delete a message in SWF or not.", "IsAnswer": false }]

    },
    {
        "Id": 6,
        "Name": "Which service allows you to send a physical data device to Amazon in order to transfer data to the AWS cloud?", 

        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Transfer Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Import/Export", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Upload API", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Fulfilment Service", "IsAnswer": false }]
    },
    {
        "Id": 7,
        "Name": "Elastic Beanstalk automatically provisions and configures deployment environments for developers.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]

    },
     {
        "Id": 8,
       "Name": "Port scanning is only allowed if a request is submitted to Amazon and Amazon grants permissions to the account owner.", 
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]

    },
    {
        "Id": 9,
        "Name": "What is the HTTP code you would see if once you successfully place a file in an S3 bucket?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "3xx", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "200", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "5xx", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "4xx", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
        "Name": "You have 2 CloudFormation templates. One is for spinning up an architecture stack for enterprise apps and the other for gaming apps. Which of the following describes best when it comes to cost.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The template for spinning up enterprise architecture will cost more since enterprise apps typically demand a large & complex framework.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The template for spinning up gaming architecture will cost more since gaming apps require intensive CPU cycles.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The cost of both the templates will be the same.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CloudFormation is free but you are only charged for the underlying resources it builds.", "IsAnswer": true }]
        
    },
     {
        "Id": 11,
        "Name": "EBS volumes snapshots are backed by S3 storage type:", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 12,
        "Name": "The maximum size of a General Purpose or SSD EBS  storage device is:", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "100 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 TB", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "500 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "10 TB", "IsAnswer": false }]
        
    },
     {
        "Id": 13,
        "Name": "What happens to the an instance's Ephemeral storage when the instance is stopped.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data persists on the storage", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Data is backed to S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "All data is lost.", "IsAnswer": true }]
        
    },
     {
        "Id": 14,
        "Name": "What feature would you utilize to categorize your EC2 instances by application/groups/or purpose? ", 
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "Tags", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Labels", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Folders", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Categories", "IsAnswer": false }]
        
    },
     {
        "Id": 15,
       "Name": "What is the default region in AWS?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "us-west-2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "us-east-1", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "us-northeast-1", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "us-southwest-1", "IsAnswer": false }]
        
    },
     {
        "Id": 16,
       "Name": "Which command would you use to create a snapshot using the AWS CLI?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "create-snapshot", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-snapshot", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "ec2-create-snapshot", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "ec2 create ss", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
       "Name": "RDS snapshots are automatically stored in",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "MongoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "RDBMS", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
       "Name": "The base URI for all instance metadata requests is:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/meta-data", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/user-data", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "http://169.254.169.254/meta-data", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "http://169.254.169.254/user-data", "IsAnswer": false }]
        
    },
     {
        "Id": 19,
       "Name": "The URL for getting user-data in EC2 is:",  
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/meta-data", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "http://169.254.169.254/latest/user-data", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "http://169.254.169.254/meta-data", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "http://169.254.169.254/user-data", "IsAnswer": false }]
    },
     {
        "Id": 20,
      "Name": "A __________ can be used to create server resources of different instance types. You can think of it as a virtual machine image/template.",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Stack", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Template", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AMI", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "EC2 bootstrap script", "IsAnswer": false}]
        
    },
     {
        "Id": 21,
       "Name": "You need this to customize your AMI and install custom software components on startup of your EC2 instances.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A Python script", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A Javascript program", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Run a bootstrap script as soon as the instance is launched.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "A Java program", "IsAnswer": false}]
        
    },
     {
        "Id": 22,
       "Name": "Currently there are ______ regions in AWS.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "20", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "11", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "40", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "30", "IsAnswer": false}]
        
    },
     {
        "Id": 23,
       "Name": "There are __________ edge locations:", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "45", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "35", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "52", "IsAnswer": true }]
        
    },
     {
        "Id": 24,
       "Name": "Which of the following languages does not have an officially supported AWS SDK?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "C", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Ruby", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "C#", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Objective C (iOS)", "IsAnswer": false }]
        
    },
     {
        "Id": 25,
       "Name": "Which of the following cannot be used to deploy systems to AWS?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Elastic Beanstalk", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "OpsWorks", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Kinesis", "IsAnswer": true }]
        
    },
     {
        "Id": 26,
       "Name": "Which of the following can be used to host a static website?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false }]
        
    },
     {
        "Id": 27,
       "Name": "User, Group, Role are associated with which of the following services?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "S3", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "IAM", "IsAnswer": true }]
        
    },
     {
        "Id": 28,
     "Name": "You need a service that records AWS API calls for your account and delivers log files to you. Which would you use?",    
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CloudWatch", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "AppStream", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudTrail", "IsAnswer": true }]
        
    },
     {
        "Id": 29,
      "Name": "What command would you use from CLI to attach an EBS volume to a EC2 instance?",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "attach-volume", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-mount-volume ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-attach-volume", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "ec2-connect-volume ", "IsAnswer": false }]
        
    },
     {
        "Id": 30,
      "Name": "Which of the following is not associated with SWF?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Worker", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Initiator", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Decider", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Activity", "IsAnswer": false }]
        
    },
    {
      "Id": 31,
      "Name": "You are not able to RDP to a Windows Server 2010 EC2 instance from your corporate desktop. Which of the following is not a valid reason for this?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The IP of your desktop is being blocked by your corporate proxy server", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The EC2 instance does not have a route to an Internet Gateway.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The EC2 instance's security group does not support ingress to port 3389.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The EC2 instance's security group does not support ingress to port 22", "IsAnswer": true }]
        
    },
    {
      "Id": 32,
      "Name": "S3 supports which of the following object encryption?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Server-Side Encryption with Amazon Managed Keys (SSE-S3, SSE-KMS)", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Server-Side Encryption with Customer-Provided Keys (SSE-C)", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Client-Side Encryption with WS KMS-managed customer master key", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Client-Side Encryption with client side master key", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "All of the above", "IsAnswer": true }]
        
    },
    {
      "Id": 33,
      "Name": "With regard to AWS RDS which of the following is true?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MySQL, Postgres, and DB2 are supported", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "RDS can be deployed within a VPC", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "RDS features are identical across database types", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Aurora is no longer supported by Amazon", "IsAnswer": false }]
        
    },
    {
      "Id": 34,
      "Name": "What HTTP response code indicates a client side error when a REST call is made?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "2xx", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "3xx", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "4xx", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "500", "IsAnswer": false }]
        
    },
    {
      "Id": 35,
      "Name": "What is not a valid section in a CloudFormation template?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Parameters", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Resources", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Declarations", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Outputs", "IsAnswer": false }]
        
    },
    {
      "Id": 36,
      "Name": "In the shared-responsibility model, what is Amazon's responsibility?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Managing security groups", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Managing customer's key pairs for EC2 instances.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Physical security of data centers.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "IAM roles", "IsAnswer": false }]
        
    },
    {
        "Id": 37,
        "Name": " You have an application that requires to read 5 items of 10 KB each per second. How many units of read capacity should you set if you desire strongly consistent reads?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "13 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "8 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": true }]

    },
     {
        "Id": 38,
        "Name": " In DynamoDB each table can have ________ local indexes and _______ global indexes:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5, 10 ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "5, 5 ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10, 5", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "10, 10 ", "IsAnswer": false }]

    },
     {
        "Id": 39,
        "Name": " Both the Hash and Hash & Range attributes of the primary key in DynamoDB are _______ long.", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "256 KB ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "64 KB  ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 bytes", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "1 KB ", "IsAnswer": false }]

    },
     {
        "Id": 40,
        "Name": "To have reliable snapshots what storage engine must MySQL tables be configured with:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "MongoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "InnoDB", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "CouchDB ", "IsAnswer": false }]

    }
    ]
}

