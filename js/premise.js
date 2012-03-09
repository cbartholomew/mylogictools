function Premise(config)
{        
	// constructor objects
	var subject  	= config.subject;
	var predicate  	= config.predicate;
	var middle   	= config.middle;
	var quality  	= config.quality;
	var quantity 	= config.quantity;  
	var letter	 	= config.letter; 
	var premiseType = config.preimiseType;

	/*    Privledge Function
	 *    getVal, given any premise - it will get the value of 
	 *    one of the assoicated properties above	  
	 */
	this.getVal = function(property)
	{     
		switch(property.toUpperCase())
		{
			case "SUBJECT":   
				return subject;
			break;
			case "PREDICATE":     
				return predicate;
			break;
			case "MIDDLE":          
				return middle;   	   
			break;
			case "QUALITY":  
				return quality;
			break;  
			case "QUANTITY":         
				return quantity;
			break;
			case "LETTER":         
				return letter;
			break;
			case "PREMISE":         
				return premiseType;
			break;
		   	default:            
				return null;
			break;
		}  
	}   
	  
	/*    Privledge Function
	 *    setVal, given any premise - it will set the value of 
	 *    one of the assoicated properties above	  
	 */
	this.setVal = function(property, value) 
	{
		switch(property.toUpperCase())
		{
			case "SUBJECT":   
			    subject  = value;
			break;
			case "PREDICATE":     
			    predicate  = value;
			break;
			case "MIDDLE":          
			    middle   = value;   	   
			break;
			case "QUALITY":  
			    quality  = value;
			break;  
			case "QUANTITY":         
			    quantity = value;
			break;
			case "LETTER":         
			    letter = value;
			break;  
			case "PREMISE":         
			    premiseType = value;
			break;
		   	default:            
				return null;
			break;
		}   
	} 
	 
	/*    Privledge Function
	 *    isThreeTerms, this will make sure that a value in the conclusion
	 *	  is indeed not a middle term.     
	 */
	this.isThreeTerms = function()  
	{		
		return (subject == middle || predicate == middle) ? true : false;
	} 
	
	/*    Privledge Function
	 *    isSubjectAndPredicateSame, this will check if the subject and predicate are the same
	 */
	this.isSubjectAndPredicateSame = function()  
	{		
		return (subject == predicate) ? true : false;
	} 
	
	/*    Privledge Function
	 *    checkForUniversalNegative, as E is negative in quality too - we must accomidate for this
	 */
	this.checkForUniversalNegative = function() 
	{		
         if (quantity == "UNIVERSAL_E") 
		 {
			 this.setVal("quantity","UNIVERSAL");
			 this.setVal("quality", "NEGATIVE");  		
		 }
	}
	

}    
