{
    "quiz": {
        "Id": 4,
        "name": "EC2 Quiz",
        "description": "",
        "logo" : "data/img/EC2.png"
    },
    "questions": [{
        "Id": 1010,
        "Name": "You have to setup EC2 instances for a project which involves ‘cold’ workloads and where data is accessed infrequently, The lowest storage cost is important. What type of EBS volume should you choose:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "General Purpose (SSD)", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Provisioned IOPS (SSD)", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Magnetic volumes", "IsAnswer": true }]
    },
    {
        "Id": 1011,
       "Name": "How will you migrate an existing EBS volume to an EBS General Purpose (SSD) volume?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You cannot do this in AWS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Move contents to S3. Delete the existing EBS volume and copy contents from S3 to GP SSD. ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Take a snapshot of the existing volume and create a General Purpose (SSD) volume from the snapshot.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use the 'CopyEBSVolume' operation", "IsAnswer": false }]
    
        
    },
    {
        "Id": 1012,
         "Name": "You can access your EBS snapshots using the regular Amazon S3 API?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "No. Only through the EC2 API", "IsAnswer": true }]
        
    },
    {
        "Id": 1013,
       "Name": "You are tasked to snapshot two EBS volumes. One is 16TB and the other is 1TB. Which will take longer?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1 TB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "16 TB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Both will take the same time.", "IsAnswer": true}]
        
    },
    {
        "Id": 1014,
        "Name": "Each EBS snapshot is given a unique identifier for a version, and customers can create volumes based on any of their existing snapshots.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 1015,
        "Name": "EBS volumes are backed by S3 storage", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
    {
        "Id": 1016,
        "Name": "What is the best way to move an EBS volume to another availability zone?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Amazon Import/Export", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Back up data to S3 and then create a new instance in the new zone and then restore data from S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a snapshot, then create a volume based off the snapshot in the new availability zone.", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "This is simply not possible", "IsAnswer": false }]
        
    },
    {
        "Id": 1017,
        "Name": "Unlike the data stored on a local instance store (which persists only as long as that instance is alive), data stored on an Amazon EBS volume can persist independently of the life of the instance.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
    {
        "Id": 1018,
        "Name": "What is the maximum number of On-Demand EC2 instances can you run in AWS?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "10", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "100", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "50", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "20", "IsAnswer": true }]
        
    },
    {
        "Id": 1019,
        "Name": "How many Elastic IPs can you have per region?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "50", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "5", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "10", "IsAnswer": false }]
        
    }]
}