{
    "quiz": {
        "Id": 12,
        "name": "Practice Exam 2",
        "logo" : "data/img/exam.jpg"
    },
    "questions": [{
        "Id": 1,
        "Name": "Which of the following is not true:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It is possible to have private subnets in VPC", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You may only have 1 internet gateway per VPC", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A subnet can be associated with multiple Access Control Lists", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "In Amazon VPC, an instance retains its private IP", "IsAnswer": false }]

    },
    {
        "Id": 2,
        "Name": "The max number of VPCs allowed in each AWS region is :", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "5", "IsAnswer": true }]
        
    },
   {
        "Id": 3,
        "Name": "How many internet gateways can you attach to a VPC?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "5", "IsAnswer": false }]
    },
     {
        "Id": 4,
        "Name": "A corporate web application is deployed within an Amazon VPC, and is connected to the corporate data center via IPSec VPN. The application must authenticate against the on-premise LDAP server. Once authenticated, logged-in users can only access an S3 keyspace specific to the user. Which approach cannot satisfy the objectives?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The application authenticates against LDAP. The application then calls the IAM Security Service to login to IAM using the LDAP credentials. The application can use the IAM temporary credentials to access the appropriate S3 bucket. ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The application authenticates against LDAP, and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM Role. The application can use the temporary credentials to access the appropriate S3 bucket.  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Develop an identity broker which authenticates against LDAP, and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.", "IsAnswer": true }]
    },
     {
        "Id": 5,
        "Name": "S3 stands for :", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Security Storage Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Secured Storage Service", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Simple Storage Service", "IsAnswer": true }]

    },
    {
        "Id": 6,
        "Name": "You attempt to store an object in the US-STANDARD region in Amazon S3, and receive a confirmation that it has been successfully stored. You then immediately make another API call and attempt to read this object. S3 tells you that the object does not exist. What could explain this behavior? ", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "US-STANDARD uses eventual consistency and it can take time for an object to be readable in a bucket. ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Objects in Amazon S3 do not become visible until they are replicated to a second region. ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "US-STANDARD imposes a 1 second delay before new objects are readable", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You exceeded the bucket object limit, and once this limit is raised the object will be visible. ", "IsAnswer": false }]

    },
    {
        "Id": 7,
        "Name": "You are hosting a static website in an S3 bucket which uses Javascript to reference assets in another S3 bucket. For some reason however these assets are not displaying when users browse to the site. What could be the problem?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You cannot use one S3 bucket to reference another S3 bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3 does not support Javascript  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You haven't enabled Cross Origin Resource Sharing (CORS) on the bucket where the assets are stored.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "You need to open port 80 on the appropriate security group in which the S3 bucket is located.", "IsAnswer": false }]

    },
     {
        "Id": 8,
       "Name": "Your application is trying to upload a 6 GB file to Simple Storage Service and receive a 'Your proposed upload exceeds the maximum allowed object size.' error message. What is a possible solution for this?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Contact support to increase your object size limit", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use the large object upload API for this object  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the multi-part upload API for this object ", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None, Simple Storage Service objects are limited to 5 GB ", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Upload to a different region ", "IsAnswer": false }]

    },
    {
        "Id": 9,
        "Name": "What is the HTTP code you would see if once you successfully place a file in an S3 bucket?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "3xx", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "200", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "5xx", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4xx", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
       "Name": "You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Store photos on an EBS volume of the web server", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Block the IPs of the offending websites in Security Groups.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use CloudFront distributions for static content", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Remove public read access and use signed URLs with expiry dates.", "IsAnswer": true }]
        
    },
     {
        "Id": 11,
      "Name": "For downloading private data directly from S3, you can insert a pre-signed URL into a web page before giving it to your users.",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 12,
        "Name": "A newly created S3 bucket is public by default:",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 13,
       "Name": "Domain, Workers, Deciders are associated with which of the following AWS services?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SWF", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Lambda", "IsAnswer": false }]
        
    },
     {
        "Id": 14,
         "Name": "Maintaining your application’s execution state (ie. which steps have completed, which ones are running, etc.) is a use case for which AWS service?.",    
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SWF", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
     {
        "Id": 15,
       "Name": "What is a worker with respect to SWF?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Workers are programs that interact with Amazon SWF to get tasks, process received tasks, and return the results.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Workers are EC2 instances which can create S3 buckets and process SQS messages.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Workers are the people in the warehouse processing orders for Amazon", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Workers are a component of IIS which run on windows platform under the w3wp.exe process.", "IsAnswer": false }]
        
    },
     {
        "Id": 16,
       "Name": "_______ allows you to deliver static and video content over edge locations.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "HTTP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SDS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFront CDN", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
           "Name": "One EC2 instance can have these many Elastic IPs assigned to it:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "10 ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "15", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
       "Name": "Your organization has decided to move its entire data warehouse of 20 TB to the AWS cloud. What service would you recommend that would be the most time and cost effective for this purpose?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Megaupload Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Import/Export", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Streaming API", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Fulfilment Service", "IsAnswer": false }]
        
    },
     {
        "Id": 19,
       "Name": "Your current architecture stack consists of 3 EC2 instances, one load balancer, 1 route53, 5 S3 buckets and CloudFront CDN for content delivery for your offices in New York. Your company would like to quickly replicate this architecture for its Middle East offices, closer to that region. What would you suggest?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using the AWS SDK for Java write a program that will replicate the stack in another region.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Hire AWS certified staff in the Middle East offices to create a similar stack in another region.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use CloudFormation JSON templates to quickly replicate the stack in another region..", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "You would have to manually create similar instances and other entities in another region.", "IsAnswer": false}]
        
    },
     {
        "Id": 20,
      "Name": "SWF provides consistent execution and ongoing visibility at each task level",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 21,
       "Name": "Amazon does not allow you to scan port under any circumstance, even on your own account?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True. This violates AWS security policy.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False. Customers may request permission to conduct vulnerability scans to meet their specific compliance requirements.", "IsAnswer": true}]
        
    },
     {
        "Id": 22,
       "Name": "AWS provides Ingress/Egress filtering on all incoming and outgoing data traffic.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False. VPC cannot support this.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True. VPC supports firewall solution enabling filtering on both ingress & egress instance traffic", "IsAnswer": true}]
        
    },
     {
        "Id": 23,
       "Name": "AWS provides DOS protection on the network layer as part of the shared security model.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 24,
       "Name": "What is the best way to move an EBS volume to another availability zone?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Amazon Import / Export.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Backup to S3 and then restore data from S3 to another region.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a snapshot of the volume and then create a volume based off the snapshot in the new availability zone.", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "Submit a request to Amazon with a snapshot of the volume to be moved.", "IsAnswer": false }]
        
    },
     {
        "Id": 25,
       "Name": "You can attach one EBS volume to more than one instance at one time.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }]
        
    },
     {
        "Id": 26,
       "Name": "One single EC2 instance can have multiple EBS volumes attached to it.",  
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 27,
       "Name": "Company B provides an online image recognition service and utilizes SQS to decouple system components for scalability. The SQS consumers poll the imaging queue as often as possible to keep endto-end throughput as high as possible. However, Company B is realizing that polling in tight loops is burning CPU cycles and increasing costs with empty responses. How can Company B reduce the number of empty responses?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Set the imaging queue VisibilityTimeout attribute to 20 seconds ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set the imaging queue MessageRetentionPeriod attribute to 20 seconds ", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Set the DelaySeconds parameter of a message to 20 seconds  ", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Set the imaging queue ReceiveMessageWaitTimeSeconds attribute to 20 seconds ", "IsAnswer": true}]
        
    },
     {
        "Id": 28,
     "Name": "EC2 instances are launched from Amazon Machine Images (AMIs). A given public AMI:",    
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same country as the AMI is stored ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "can be used to launch EC2 instances in any AWS region ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same AWS region as the AMI is stored", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same AWS availability zone as the AMI is stored", "IsAnswer": false }]
        
    },
     {
        "Id": 29,
      "Name": "You have reached your account limit for the number of CloudFormation stacks in a region. How do you increase your limit?",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Make an API call ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Contact AWS ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the console ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You cannot increase your limit ", "IsAnswer": false }]
        
    },
     {
        "Id": 30,
      "Name": "The default limit on the CloudFormation stacks you can create is :",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "20", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "50", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "100", "IsAnswer": false }]
        
    }]
}

