# createFakeJSON
to create JSON file type in console ```node dataCreator```, or type ```node dataCreatorByStages``` to create sorted by stages JSON file
## Data structure of dataCreator
```  
[
 {
	"guid",
	"title",
	"modules": [
		     {
			"guid",
			"title",
			"status": {
				    "key",
				    "title"
				  }
		     }
  }
] 
```
## Data structure of dataCreatorByStages
```
{
    "stages": [
		{
		   "title",
		   "key",
		   "courses": [
				{
				  "guid",
				  "title",
				  "modules": [
						{
						  "guid",
						  "title"
					        }
					     ]
				}
			      ]
		}
	      ] 
}
```
