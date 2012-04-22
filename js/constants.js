var RULES = {
	1  : {id: 1, text: "Syllogism must contain exactly three terms, each of which is used in the same sense throughout the argument.",fallacy: "Violation: Fallacy of four terms."},
	2  : {id: 2, text: "The middle term must be distributed in at least one premise", fallacy: "Undistributed middle."},       
	3  : {id: 3, text: "If either term is distributed in the conclusion, then it must be distributed in the premises.", fallacy: "Illicit major, or Illicit Minor."},       
	4  : {id: 4, text: "No standard-form categorical syllolgism having two negative premises is valid.", fallacy: "Exclusive premises."}, 
	5  : {id: 5, text: "If either premise is negative, the conclusion must be negative.", fallacy: "Drawing an affirmative conclusion from a negative premise."}, 
	6  : {id: 6, text: "No valid syllogism with a particular conclusion can have two universal premises.", fallacy: "Exsistential fallacy."}       
};

// how every added premise bears on the conclusion < P > P | undermine?
var INDUCTIVE_CRITERIA = {
	
	1 : {id: 1, text:"The Number of entities"},
	2 : {id: 2, text:"The Number of respects"},
	3 : {id: 3, text:"The Number of disanologies"},
	4 : {id: 4, text:"The relevance of the respects"},
	5 : {id: 5, text:"The variety or degree of dissimilarity"},
	6 : {id: 6, text:"The modesty or boldness of the conclusion"},

};


var ERRORS = 
{
	"QQ" : {message: "Are you sure your Quantity and Quality are correct? I can't find a sentence type match"},
	"VALIDATION" : {message: "You are missing one of the required fields that make up a premise. This includes quantity, subject, quality, and preidcate."}   
}
