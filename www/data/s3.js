{
    "quiz": {
        "Id": 3,
        "name": "S3 Quiz",
        "logo" : "data/img/S3.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "The backup policy of your company dicatates that backed up data should be quickly accessible within minutes for the first 6 months. After that, the data should be archived. Is this possible in AWS. If yes, how?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data can only be backed up once. so this is not possible.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a life cycle policy that automatically moves the data to Glacier after 6 months", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Set a SWF workflow to send a reminder after 6 months for manually moving the data to Glacier.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using SWF, set a task to automatically backup data to Glacier after 6 months", "IsAnswer": false }]
                
       
    },
    {
        "Id": 2,
        "Name": "S3 offers 2 types of storage classes: Standard and Standard-Infrequent Access only.", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
    {
        "Id": 3,
        "Name": "You need to delete a large number of objects from your S3 bucket. Whats the best way to do this?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Delete objects one by one from the AWS console.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Multi-Object Delete to delete large numbers of objects from Amazon S3. ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Write a query to delete all objects in CLI", "IsAnswer": false }]
        
    },
    {
        "Id": 4,
        "Name": "Objects smaller than 128KB will incur charges for Standard-IA storage class:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }] 
    },
    {
        "Id": 5,
        "Name": "The largest object that can be uploaded in a single PUT is ________", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "10 MB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "5 GB", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "1 TB", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "100 MB", "IsAnswer": false }]
    },
    {
        "Id": 6,
        "Name": "Amazon recommends that for objects larger than 100 megabytes, customers should consider using the Multipart Upload capability.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 7,
        "Name": "Individual Amazon S3 objects can range in size from _____ to ______", 
        
      "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1 bytes to 5 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "100 Kb to 10 GB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 byte to 5 Terabytes", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "0 to 5 TB", "IsAnswer": false }]
        
    },
    {
        "Id": 8,
        "Name": "S3 uses this type of encryption for its buckets:", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data Encryption Standard (DES)", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Advanced Encryption Standard (AES) 256", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Advanced Encryption Standard (AES) 128", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "MDH 256", "IsAnswer": false}]
    },
    {
        "Id": 9,
        "Name": "The URL for a static hosting website in a bucket call 'cloudinstitute' inside New York would be: ", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "http://www.cloudinstitute.s3-website-ap-northeast-1.amazonaws.com", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "http://cloudinstitute.s3-website-ap-northeast-1.amazonaws.com", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "http://s3-website-ap-cloudinstitute.northeast-1.amazonaws.com", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "http://s3-website-ap-northeast-1.cloudinstitute.amazonaws.com", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "In S3 you enable and disable versioning at any time.", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False. Once enabled you can only suspend", "IsAnswer": true }]
    }
     ]
}