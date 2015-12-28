{
    "quiz": {
        "Id": 1,
        "name": "DynamoDB Quiz",
        "logo" : "data/img/DynamoDB.png"
    },
    "questions": [{
        "Id": 1010,
        "Name": "You have an application that requires to read 10 items of 1 KB each per second. How many units of read capacity should you set if you desire eventual consistency?",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5 capacity units", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "10 capacity units.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "15 capacity units.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "16 capacity units.", "IsAnswer": false }]
        
    },
    {
        "Id": 1011,
        "Name": "For which of the following languages does DynamoDB NOT support a SDK?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Java", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "PHP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Ruby", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "C++", "IsAnswer": true }]
        
    },
    {
        "Id": 1012,
        "Name": "DynamoDB supports only one type of secondary index. True/False?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
    {
        "Id": 1013,
        "Name": "Generally a Query operation is less efficient than a Scan operation. True/False?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
    {
        "Id": 1014,
        "Name": "You run a Query operation which returned all the data attributes for the selected items. You are only interested in seeing a few attributes. How do you do this in DynamoDB?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "This is not possible", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use ProjectExpression", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use ExpressionAttribute", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use ProjectionExpression", "IsAnswer": true }]
        
    },
    {
        "Id": 1015,
        "Name": "How much maximum data does a single Query request retrieve?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "10 MB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "5 MB", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1 MB", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "There is no limit", "IsAnswer": false }]
        
    },
    {
        "Id": 1016,
        "Name": "Amazon recommends that you mostly use Query requests and use Scan requests only where appropriate.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
    {
        "Id": 1017,
        "Name": "Query, Scan, GetItem , BatchGetItem reads are by default eventually consistent but you can set them to be strongly consistent.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
    },
    {
        "Id": 1018,
        "Name": "Which provider is not supported by the “Web Identitiy Federation”?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Twitter", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Login with Amazon", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Facebook", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Google", "IsAnswer": false }]
        
    },
    {
        "Id": 1019,
        "Name": "AWS SDKs and console for DynamoDB reference this region by default",
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "US West (Oregon) region.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "US East (N. Virginia) region.", "IsAnswer": false }]
        
    }
     ]
}