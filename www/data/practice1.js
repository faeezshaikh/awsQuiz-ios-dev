{
    "quiz": {
        "Id": 11,
        "name": "Practice Exam 1",
        "logo" : "data/img/exam.jpg"
    },
    "questions": [{
        "Id": 1,
        "Name": "With reference to DynamoDB, which of these is idempotent?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Atomic Counter", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Conditional Writes", "IsAnswer": true }]

    },
    {
        "Id": 2,
        "Name": "DynamoDB supports cross-table joins.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
   {
        "Id": 3,
        "Name": "Which statement about DynamoDB is true?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB uses a pessimistic locking model ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB does not use optimistic concurrency control ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "DynamoDB uses conditional writes for consistency", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "DynamoDB restricts item access during reads", "IsAnswer": false }]

    },
     {
        "Id": 4,
        "Name": "You have an application that requires to read 10 items of 6 KB each per second. How many units of read capacity should you set if you desire eventual consistency?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "20 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "5 capacity units ", "IsAnswer": false }]

    },
     {
        "Id": 5,
        "Name": " You have an application that requires to read 5 items of 10 KB each per second. How many units of read capacity should you set if you desire eventual consistency?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "13 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "8 capacity units  ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "9 capacity units ", "IsAnswer": false }]

    },
    {
        "Id": 6,
        "Name": "You have an application that requires to read 5 items of 10 KB each per second. How many units of read capacity should you set if you desire strongly consistent reads?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "13 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "8 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": true }]

    },
    {
        "Id": 7,
        "Name": "You have an application that requires to write 5 items of 10 KB each per second. How many units of write capacity should you set?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "50 capacity units ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "8.5 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "10 capacity units", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false }]

    },
     {
        "Id": 8,
        "Name": "You have an application that requires to write 5 items of 10.5 KB each per second. How many units of write capacity should you set?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "50 capacity units ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "11 capacity units  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "55 capacity units", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "15 capacity units ", "IsAnswer": false }]

    },
    {
        "Id": 9,
        "Name": "Your app needs to push notifications to your user's mobile devices. Which of the following services will you use for that?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SNS", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
        "Name": "SAML stands for :", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Security Assertion Markup Language", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Secured Assertive Markup Language.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security Assertive Markup Language.", "IsAnswer": false }]
        
    },
     {
        "Id": 11,
        "Name": "With regard to IAM, MFA is an acronym for:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Multi-Form authentication", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Multi-Faceted authentication.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Multi-Factor authentication .", "IsAnswer": true }]
        
    },
     {
        "Id": 12,
        "Name": "You cannot change the IAM role on a running EC2 instance. You can change the permissions on the IAM role associated with a running instance, and the updated permissions will take effect almost immediately.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 13,
        "Name": "You cannot associate an IAM role with an already running EC2 instance.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 14,
        "Name": "If you delete an IAM role that’s associated with a running EC2 instance, any application running on that instance that's using the role will be denied access immediately.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 15,
        "Name": "Which of the following operation should be invoked when federating with Facebook?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AssumeRoleWithSAML", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AssumeRoleWithWebIdentity", "IsAnswer": true }]
        
    },
     {
        "Id": 16,
        "Name": "In AWS, Templates and Stacks are related to:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SWF", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Lambda", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
        "Name": "Your business has a requirement to setup a server in the cloud, install a RDMS on it and install and run Apache web server. This stack should also be quickly replicable. Which AWS service will you use for this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Cloud Watch", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Streaming API", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
        "Name": "In CloudFormation is it possible to save the data when a stack is deleted?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "No", "IsAnswer": false }]
        
    },
     {
        "Id": 19,
        "Name": "You app involves processing payments and delivering music files to customers. You plan to use SQS to help facilitate this. You need to ensure that the payment process takes priority over the delivery of music files. What is the best way to achieve this.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use 2 SQS queues for the platform. Have  EC2  poll the payment SQS queue first. If this queue is empty, then poll the music files queue.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use 1 SQS queue for the platform. Use the HighPriority API call to ensure that all payment SQS messages take priority over the music files.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use 1 SQS queue for the platform. Use the SetPriority API call to ensure that all payment SQS messages take priority over the music files.", "IsAnswer": false}]
        
    },
     {
        "Id": 20,
        "Name": "Your EC2 instances download jobs from the SQS queue, however they are taking too long to process them. What API call can you use to extend the length of time to process the jobs?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AddMessageTime", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "ChangeMessageVisibility", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "ExtendMessageTime", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "RenewMessageTime", "IsAnswer": false}]
        
    },
     {
        "Id": 21,
        "Name": "In SQS, maximum Long Poll timeout is: ", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "60 seconds", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "60 minutes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "5 minutes", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "20 seconds", "IsAnswer": true}]
        
    },
     {
        "Id": 22,
        "Name": "Which language does the AmazonSQSBufferedAsyncClient support", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "PHP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Python", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Java", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "C#", "IsAnswer": false}]
        
    },
     {
        "Id": 23,
        "Name": "All messages have a globally unique ID that Amazon SQS returns when the message is delivered to the queue.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 24,
        "Name": "You wish to determine the time-in-queue for a message in SQS. Whats the best way to do this?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Request the “SentTimestamp” attribute when receiving a message. Subtract that value from the current time.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Read the 'time-in-queue' attribute on the message", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You cannot determine this.", "IsAnswer": false }]
        
    },
     {
        "Id": 25,
        "Name": "What is the “SenderId” attribute value of a message in the case of anonymous access", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "IP Address of the sender", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Login id of the user", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Indeterminate", "IsAnswer": false }]
        
    },
     {
        "Id": 26,
        "Name": "What is the  maximum limit for message visibility?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "12 hours", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "One week", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1 month", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "1 day", "IsAnswer": false }]
        
    },
     {
        "Id": 27,
        "Name": "Amazon does not offer Dead Letter Queues (DLQs)", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 28,
        "Name": "Amazon provides first-in-first-out (FIFO) access to messages", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 29,
        "Name": "Which of the following statements about SQS is true?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Messages will be delivered exactly once and messages will be delivered in First in, First out order ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Messages will be delivered exactly once and message delivery order is indeterminate", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Messages will be delivered one or more times and messages will be delivered in First in, First out order", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Messages will be delivered one or more times and message delivery order is indeterminate ", "IsAnswer": true }]
        
    },
     {
        "Id": 30,
        "Name": "In AWS VPC means: ", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Virtual Public Cloud", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Virtual Private Cloud", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Virtually Private Center", "IsAnswer": false }]
        
    }]
}

