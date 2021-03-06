function Tables()
{   
	// constant for letters
    var MAX_LETTERS = 3;
    
	// letter enumeration
    var letter = {
		A : 0,
		E : 1,
		I : 2,
		O : 3
	};
	 
	// proposition types
	var propositions  = {
		0 : {quantity: "UNIVERSAL" , quality: "AFFIRMATIVE",   letter: "A"},
		1 : {quantity: "UNIVERSAL" , quality: "NEGATIVE", 	   letter: "E"},
		2 : {quantity: "PARTICULAR", quality: "AFFIRMATIVE",   letter: "I"},    
		3 : {quantity: "PARTICULAR", quality: "NEGATIVE", 	   letter: "O"}  
	};       
	     
	/*    Privledge Function
	 *    getSentenceType, given any premise - it will set the respetive  	  
	 *    proposition letter for given premise based on its quality and its quantity
	 */
	this.getSentenceType = function(premise, count)
	{	                                      
		try
		{  	       
			// base case
			if (count > MAX_LETTERS) { return premise; } 
				
			if (propositions[letter.A + count].quality == premise.getVal('quality') && propositions[letter.A + count].quantity == premise.getVal('quantity')) { 
			   premise.setVal('letter', propositions[letter.A + count].letter); 
			   return premise;
			} else {   			
			   return this.getSentenceType(premise,count + 1);				
			}				
		}
		catch(ex)
		{       
			console.log(ex.toString());
		}   
	}   
	
	/*    Privledge Function
	 *    getSyllogism, given any mood and figure, will return validity 	  
	 */
	this.getSyllogism = function(mood, figure)
	{      
		return keyFigures['keyMoods["' + mood + '","' + figure + '"]'];	    
	}
	
	 
	/*    Privledge Function
	 *    printTwoTermTruthTableValue, will print out the truth table for two term conditions  
	 */
	this.printTwoTermTruthTableValue = function()
	{
		 var html = "";
		 for(i=0;i<twoTermColumnTruths.length;i++)
		 {     
			   var notA = (twoTermColumnTruths[i].toString().split(",")[0] == "true") ? "false" : "true";
			   var notB = (twoTermColumnTruths[i].toString().split(",")[1] == "true") ? "false" : "true";
			 	
			   html += "<tr>";
			   html += "<td class='ui-widget-content figureColumns Invalid'>" + notA + "</td>";
			   html += "<td class='ui-widget-content figureColumns Invalid'>" + notB + "</td>";
			   html += "<td class='ui-widget-content figureColumns'>"		  + twoTermColumnTruths[i].toString().split(",")[0] + "</td>";
			   html += "<td class='ui-widget-content figureColumns'>" 		  + twoTermColumnTruths[i].toString().split(",")[1] + "</td>";
			   html += "<td class='ui-widget-content figureColumns or'>" 	  + twoTruthTerms[twoTermColumnTruths[i].toString()]["or"]  + "</td>";
			   html += "<td class='ui-widget-content figureColumns and'>" 	  + twoTruthTerms[twoTermColumnTruths[i].toString()]["and"] + "</td>";
			   html += "<td class='ui-widget-content figureColumns Valid'>"   + twoTruthTerms[twoTermColumnTruths[i].toString()]["if"]  + "</td>";
			   html += "</tr>";
				 
		 }  
		
		return html;
	}
	
	/*    Privledge Function
	 *    printTwoTermTruthTableValue, will print out the truth table for two term conditions  
	 */
	this.printThreeTermTruthTableValue = function()
	{
		 var html = "";
		 for(i=0;i<twoTermColumnTruths.length;i++)
		 {     
			   var notA = (twoTermColumnTruths[i].toString().split(",")[0] == "true") ? "false" : "true";
			   var notB = (twoTermColumnTruths[i].toString().split(",")[1] == "true") ? "false" : "true";
			 	
			   html += "<tr>";
			   html += "<td class='ui-widget-content figureColumns Invalid'>" + notA + "</td>";
			   html += "<td class='ui-widget-content figureColumns Invalid'>" + notB + "</td>";
			   html += "<td class='ui-widget-content figureColumns'>"		  + twoTermColumnTruths[i].toString().split(",")[0] + "</td>";
			   html += "<td class='ui-widget-content figureColumns'>" 		  + twoTermColumnTruths[i].toString().split(",")[1] + "</td>";
			   html += "<td class='ui-widget-content figureColumns or'>" 	  + twoTruthTerms[twoTermColumnTruths[i].toString()]["or"]  + "</td>";
			   html += "<td class='ui-widget-content figureColumns and'>" 	  + twoTruthTerms[twoTermColumnTruths[i].toString()]["and"] + "</td>";
			   html += "<td class='ui-widget-content figureColumns Valid'>"   + twoTruthTerms[twoTermColumnTruths[i].toString()]["if"]  + "</td>";
			   html += "</tr>";
				 
		 }  
		
		return html;
	}
	 
	/*    Privledge Function
	 *    evaluateTwoTermTruthTable, will return the truth value of a sepecific truth condition
	 *    termA - t/f
	 *    termB - t/f
	 *    operator - "and", "or", "if","and_not", "or_not", "if_not"
	 */
	this.evaluateTwoTermTruthTable = function(termA, termB, operator)
	{		
		var result = termA.toString() + "," + termB.toString();
		
	}                              

    /*
		Hash Table Key for Two Term Values
	*/
	var twoTermColumnTruths = [
			[true	,	true],
			[true	,	false],
			[false	,	true],
			[false	,	false]
	]; 
   
 	/* 
	    Hash Table for Two Term Values 
	*/
	var twoTruthTerms = {      	
		"true,true"    : {  "or": true, "or_not": false,  "and":true,  "and_not":false, "if":true,  "if_not":false },
		"true,false"   : {  "or": true, "or_not": false,  "and":false, "and_not":true,  "if":false, "if_not":true  },
		"false,true"   : {  "or": true, "or_not": false,  "and":false, "and_not":true,  "if":true,  "if_not":false },
		"false,false"  : {  "or": false,"or_not": true,   "and":false, "and_not":true,  "if":true,  "if_not":false }		
	};
	
	 /*
		Hash Table Key for Three Term Values
	*/
	var threeTermColumnTruths = [
			[true	,	true	,  true    ],
			[true	,	true 	,  false   ], 
			[true	,	false	,  true    ], 
			[true	,	false	,  false   ],
			[false	,	true	,  true    ],     
			[false	,	true	,  false   ], 
			[false	,	false	,  true    ], 
			[false	,	false	,  false   ] 
			
	];
	
   	/* 
	    Hash Table for Two Term Values 
	*/
	/*
	var threeTruthTerms = {      	                                                       
	   "true,true,true"	     : {  "or":true, "or_not":false ,  "and":true , "and_not":true , "if":true , "if_not":true },   
	   "true,true,false"     : {  "or": , "or_not": ,  "and": , "and_not": , "if": , "if_not": }, 
	   "true,false,true"     : {  "or": , "or_not": ,  "and": , "and_not": , "if": , "if_not": },
	   "true,false,false"    : {  "or": , "or_not": ,  "and": , "and_not": , "if": , "if_not": },  
	   "false,true,true"     : {  "or": , "or_not": ,  "and": , "and_not": , "if": , "if_not": },  
	   "false,true,false"    : {  "or": , "or_not": ,  "and": , "and_not": , "if": , "if_not": },  
	   "false,false,true"    : {  "or": , "or_not": ,  "and": , "and_not": , "if": , "if_not": },  
	   "false,false,false"   : {  "or": , "or_not": ,  "and": , "and_not": , "if": , "if_not": }
	}; 
	*/                                                                                       
	                                                                                        
	   
	   
	   
	   
	   
	   
	   
	   

		
				
	//};
   
   var keyMoods = [
		["AAA","1"],
		["AEA","1"],
		["AIA","1"],
		["AOA","1"],
		["EAA","1"],
		["EEA","1"],
		["EIA","1"],
		["EOA","1"],
		["IAA","1"],
		["IEA","1"],
		["IIA","1"],
		["IOA","1"],
		["OAA","1"],
		["OEA","1"],
		["OIA","1"],
		["OOA","1"],   
		["AAE","1"],
		["AEE","1"],
		["AIE","1"],
		["AOE","1"],
		["EAE","1"],
		["EEE","1"],
		["EIE","1"],
		["EOE","1"],
		["IAE","1"],
		["IEE","1"],
		["IIE","1"],
		["IOE","1"],
		["OAE","1"],
		["OEE","1"],
		["OIE","1"],
		["OOE","1"],               
		["AAI","1"], 
		["AEI","1"], 
		["AII","1"], 
		["AOI","1"], 
		["EAI","1"], 
		["EEI","1"], 
		["EII","1"], 
		["EOI","1"], 
		["IAI","1"], 
		["IEI","1"], 
		["III","1"], 
		["IOI","1"], 
		["OAI","1"], 
		["OEI","1"], 
		["OII","1"], 
		["OOI","1"],         
		["AAO","1"],
		["AEO","1"],
		["AIO","1"],
		["AOO","1"],
		["EAO","1"],
		["EEO","1"],
		["EIO","1"],
		["EOO","1"],
		["IAO","1"],
		["IEO","1"],
		["IIO","1"],
		["IOO","1"],
		["OAO","1"],
		["OEO","1"],
		["OIO","1"],
		["OOO","1"],
		["AAA","2"],
		["AEA","2"],
		["AIA","2"],
		["AOA","2"],
		["EAA","2"],
		["EEA","2"],
		["EIA","2"],
		["EOA","2"],
		["IAA","2"],
		["IEA","2"],
		["IIA","2"],
		["IOA","2"],
		["OAA","2"],
		["OEA","2"],
		["OIA","2"],
		["OOA","2"],  
		["AAE","2"],
		["AEE","2"],
		["AIE","2"],
		["AOE","2"],
		["EAE","2"],
		["EEE","2"],
		["EIE","2"],
		["EOE","2"],
		["IAE","2"],
		["IEE","2"],
		["IIE","2"],
		["IOE","2"],
		["OAE","2"],
		["OEE","2"],
		["OIE","2"],
		["OOE","2"],              
		["AAI","2"],
		["AEI","2"],
		["AII","2"],
		["AOI","2"],
		["EAI","2"],
		["EEI","2"],
		["EII","2"],
		["EOI","2"],
		["IAI","2"],
		["IEI","2"],
		["III","2"],
		["IOI","2"],
		["OAI","2"],
		["OEI","2"],
		["OII","2"],
		["OOI","2"],        
		["AAO","2"],
		["AEO","2"],
		["AIO","2"],
		["AOO","2"],
		["EAO","2"],
		["EEO","2"],
		["EIO","2"],
		["EOO","2"],
		["IAO","2"],
		["IEO","2"],
		["IIO","2"],
		["IOO","2"],
		["OAO","2"],
		["OEO","2"],
		["OIO","2"],
		["OOO","2"],
		["AAA","3"],
		["AEA","3"],
		["AIA","3"],
		["AOA","3"],
		["EAA","3"],
		["EEA","3"],
		["EIA","3"],
		["EOA","3"],
		["IAA","3"],
		["IEA","3"],
		["IIA","3"],
		["IOA","3"],
		["OAA","3"],
		["OEA","3"],
		["OIA","3"],
		["OOA","3"],  
		["AAE","3"],
		["AEE","3"],
		["AIE","3"],
		["AOE","3"],
		["EAE","3"],
		["EEE","3"],
		["EIE","3"],
		["EOE","3"],
		["IAE","3"],
		["IEE","3"],
		["IIE","3"],
		["IOE","3"],
		["OAE","3"],
		["OEE","3"],
		["OIE","3"],
		["OOE","3"],              
		["AAI","3"],
		["AEI","3"],
		["AII","3"],
		["AOI","3"],
		["EAI","3"],
		["EEI","3"],
		["EII","3"],
		["EOI","3"],
		["IAI","3"],
		["IEI","3"],
		["III","3"],
		["IOI","3"],
		["OAI","3"],
		["OEI","3"],
		["OII","3"],
		["OOI","3"],        
		["AAO","3"],
		["AEO","3"],
		["AIO","3"],
		["AOO","3"],
		["EAO","3"],
		["EEO","3"],
		["EIO","3"],
		["EOO","3"],
		["IAO","3"],
		["IEO","3"],
		["IIO","3"],
		["IOO","3"],
		["OAO","3"],
		["OEO","3"],
		["OIO","3"],
		["OOO","3"], 
		["AAA","4"],
		["AEA","4"],
		["AIA","4"],
		["AOA","4"],
		["EAA","4"],
		["EEA","4"],
		["EIA","4"],
		["EOA","4"],
		["IAA","4"],
		["IEA","4"],
		["IIA","4"],
		["IOA","4"],
		["OAA","4"],
		["OEA","4"],
		["OIA","4"],
		["OOA","4"],  
		["AAE","4"],
		["AEE","4"],
		["AIE","4"],
		["AOE","4"],
		["EAE","4"],
		["EEE","4"],
		["EIE","4"],
		["EOE","4"],
		["IAE","4"],
		["IEE","4"],
		["IIE","4"],
		["IOE","4"],
		["OAE","4"],
		["OEE","4"],
		["OIE","4"],
		["OOE","4"],              
		["AAI","4"],
		["AEI","4"],
		["AII","4"],
		["AOI","4"],
		["EAI","4"],
		["EEI","4"],
		["EII","4"],
		["EOI","4"],
		["IAI","4"],
		["IEI","4"],
		["III","4"],
		["IOI","4"],
		["OAI","4"],
		["OEI","4"],
		["OII","4"],
		["OOI","4"],        
		["AAO","4"],
		["AEO","4"],
		["AIO","4"],
		["AOO","4"],
		["EAO","4"],
		["EEO","4"],
		["EIO","4"],
		["EOO","4"],
		["IAO","4"],
		["IEO","4"],
		["IIO","4"],
		["IOO","4"],
		["OAO","4"],
		["OEO","4"],
		["OIO","4"],
		["OOO","4"]         
	];

    
    var keyFigures = {
		'keyMoods["AAA","1"]' : { isValid: true,  rulesBroken: [] },
		'keyMoods["AEA","1"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["AIA","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AOA","1"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["EAA","1"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EEA","1"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["EIA","1"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["EOA","1"]' : { isValid: false, rulesBroken: [3,4,5] },
		'keyMoods["IAA","1"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["IEA","1"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["IIA","1"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOA","1"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["OAA","1"]' : { isValid: false, rulesBroken: [2,5] },
		'keyMoods["OEA","1"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["OIA","1"]' : { isValid: false, rulesBroken: [2,3,5] },
		'keyMoods["OOA","1"]' : { isValid: false, rulesBroken: [3,4,5] },         	
		'keyMoods["AAE","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AEE","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AIE","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AOE","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EAE","1"]' : { isValid: true,  rulesBroken: [] },
		'keyMoods["EEE","1"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["EIE","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EOE","1"]' : { isValid: false, rulesBroken: [3,4] },
		'keyMoods["IAE","1"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IEE","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IIE","1"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOE","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OAE","1"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["OEE","1"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["OIE","1"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["OOE","1"]' : { isValid: false, rulesBroken: [3,4] },   	 
		'keyMoods["AAI","1"]' : { isValid: false, rulesBroken: [6] },
		'keyMoods["AEI","1"]' : { isValid: false, rulesBroken: [5,6] },
		'keyMoods["AII","1"]' : { isValid: true, 	rulesBroken: [] },
		'keyMoods["AOI","1"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EAI","1"]' : { isValid: false, rulesBroken: [5,6] },
		'keyMoods["EEI","1"]' : { isValid: false, rulesBroken: [4,5,6] },
		'keyMoods["EII","1"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EOI","1"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["IAI","1"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["IEI","1"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["III","1"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["IOI","1"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["OAI","1"]' : { isValid: false, rulesBroken: [2,5] },
		'keyMoods["OEI","1"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["OII","1"]' : { isValid: false, rulesBroken: [2,5] },
		'keyMoods["OOI","1"]' : { isValid: false, rulesBroken: [4,5] },   	
		'keyMoods["AAO","1"]' : { isValid: false, rulesBroken: [3,6] },
		'keyMoods["AEO","1"]' : { isValid: false, rulesBroken: [3,6] },
		'keyMoods["AIO","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AOO","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EAO","1"]' : { isValid: false, rulesBroken: [6] },
		'keyMoods["EEO","1"]' : { isValid: false, rulesBroken: [4,6] },
		'keyMoods["EIO","1"]' : { isValid: true, rulesBroken: [] },
		'keyMoods["EOO","1"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["IAO","1"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IEO","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IIO","1"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOO","1"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OAO","1"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["OEO","1"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["OIO","1"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["OOO","1"]' : { isValid: false, rulesBroken: [4] },    	
		'keyMoods["AAA","2"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["AEA","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["AIA","2"]' : { isValid: false, rulesBroken: [2,3,5] },
		'keyMoods["AOA","2"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["EAA","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EEA","2"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["EIA","2"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["EOA","2"]' : { isValid: false, rulesBroken: [3,4,5] },
		'keyMoods["IAA","2"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["IEA","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["IIA","2"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOA","2"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["OAA","2"]' : { isValid: false, rulesBroken: [5]},
		'keyMoods["OEA","2"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["OIA","2"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["OOA","2"]' : { isValid: false, rulesBroken: [3,4,5]},    		
		'keyMoods["AAE","2"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["AEE","2"]' : { isValid: true,  rulesBroken: [] },
		'keyMoods["AIE","2"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["AOE","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EAE","2"]' : { isValid: true,  rulesBroken: [] },
		'keyMoods["EEE","2"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["EIE","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EOE","2"]' : { isValid: false, rulesBroken: [3,4] },
		'keyMoods["IAE","2"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IEE","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IIE","2"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOE","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OAE","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OEE","2"]' : { isValid: false, rulesBroken: [3,4] },
		'keyMoods["OIE","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OOE","2"]' : { isValid: false, rulesBroken: [3,4] },  	
		'keyMoods["AAI","2"]' : { isValid: false, rulesBroken: [2,6] },
		'keyMoods["AEI","2"]' : { isValid: false, rulesBroken: [5,6] },
		'keyMoods["AII","2"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["AOI","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EAI","2"]' : { isValid: false, rulesBroken: [5,6] },
		'keyMoods["EEI","2"]' : { isValid: false, rulesBroken: [4,5,6] },
		'keyMoods["EII","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EOI","2"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["IAI","2"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["IEI","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["III","2"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["IOI","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["OAI","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["OEI","2"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["OII","2"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["OOI","2"]' : { isValid: false, rulesBroken: [4,5] },  	
		'keyMoods["AAO","2"]' : { isValid: false, rulesBroken: [2,6] },
		'keyMoods["AEO","2"]' : { isValid: false, rulesBroken: [6] },
		'keyMoods["AIO","2"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["AOO","2"]' : { isValid: true, rulesBroken:  [] },
		'keyMoods["EAO","2"]' : { isValid: false, rulesBroken: [6] },
		'keyMoods["EEO","2"]' : { isValid: false, rulesBroken: [4,6] },
		'keyMoods["EIO","2"]' : { isValid: true, rulesBroken:  [] },
		'keyMoods["EOO","2"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["IAO","2"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IEO","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IIO","2"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOO","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OAO","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OEO","2"]' : { isValid: false, rulesBroken: [3,4] },
		'keyMoods["OIO","2"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OOO","2"]' : { isValid: false, rulesBroken: [3,4] },   	
		'keyMoods["AAA","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AEA","3"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["AIA","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AOA","3"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EAA","3"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["EEA","3"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["EIA","3"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["EOA","3"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["IAA","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IEA","3"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["IIA","3"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOA","3"]' : { isValid: false, rulesBroken: [2,5] },
		'keyMoods["OAA","3"]' : { isValid: false, rulesBroken: [3,5] },
		'keyMoods["OEA","3"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["OIA","3"]' : { isValid: false, rulesBroken: [2,3,5] },
		'keyMoods["OOA","3"]' : { isValid: false, rulesBroken: [2,4,5] },
		'keyMoods["AAE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AEE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AIE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AOE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EAE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EEE","3"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["EIE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EOE","3"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["IAE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IEE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IIE","3"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOE","3"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["OAE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OEE","3"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["OIE","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["OOE","3"]' : { isValid: false, rulesBroken: [2,4] },
		'keyMoods["AAI","3"]' : { isValid: false, rulesBroken: [6] },
		'keyMoods["AEI","3"]' : { isValid: false, rulesBroken: [5,6] },
		'keyMoods["AII","3"]' : { isValid: true, rulesBroken: [] },  
		'keyMoods["AOI","3"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EAI","3"]' : { isValid: false, rulesBroken: [5,6] },
		'keyMoods["EEI","3"]' : { isValid: false, rulesBroken: [4,5,6] },
		'keyMoods["EII","3"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["EOI","3"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["IAI","3"]' : { isValid: true, rulesBroken:  [] }, 
		'keyMoods["IEI","3"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["III","3"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["IOI","3"]' : { isValid: false, rulesBroken: [2,5] },
		'keyMoods["OAI","3"]' : { isValid: false, rulesBroken: [5] },
		'keyMoods["OEI","3"]' : { isValid: false, rulesBroken: [4,5] },
		'keyMoods["OII","3"]' : { isValid: false, rulesBroken: [2,5] },
		'keyMoods["OOI","3"]' : { isValid: false, rulesBroken: [2,4,5] },
		'keyMoods["AAO","3"]' : { isValid: false, rulesBroken: [3,6] },
		'keyMoods["AEO","3"]' : { isValid: false, rulesBroken: [3,6] },
		'keyMoods["AIO","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["AOO","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["EAO","3"]' : { isValid: false, rulesBroken: [6 ] },
		'keyMoods["EEO","3"]' : { isValid: false, rulesBroken: [4,6] },
		'keyMoods["EIO","3"]' : { isValid: true, rulesBroken:  [] }, 
		'keyMoods["EOO","3"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["IAO","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IEO","3"]' : { isValid: false, rulesBroken: [3] },
		'keyMoods["IIO","3"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["IOO","3"]' : { isValid: false, rulesBroken: [2,3] },
		'keyMoods["OAO","3"]' : { isValid: true, rulesBroken:  [] }, 
		'keyMoods["OEO","3"]' : { isValid: false, rulesBroken: [4] },
		'keyMoods["OIO","3"]' : { isValid: false, rulesBroken: [2] },
		'keyMoods["OOO","3"]' : { isValid: false, rulesBroken: [2,4] },
		'keyMoods["AAA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AEA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AIA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AOA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EAA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EEA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EIA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EOA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IAA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IEA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IIA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IOA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OAA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OEA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OIA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OOA","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AAE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AEE","4"]' : { isValid: true, rulesBroken: [] },
		'keyMoods["AIE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AOE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EAE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EEE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EIE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EOE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IAE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IEE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IIE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IOE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OAE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OEE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OIE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OOE","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AAI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AEI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AII","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AOI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EAI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EEI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EII","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EOI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IAI","4"]' : { isValid: true,  rulesBroken: [] },
		'keyMoods["IEI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["III","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IOI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OAI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OEI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OII","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OOI","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AAO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AEO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AIO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["AOO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EAO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EEO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["EIO","4"]' : { isValid: true,  rulesBroken: [] },
		'keyMoods["EOO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IAO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IEO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IIO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["IOO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OAO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OEO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OIO","4"]' : { isValid: false, rulesBroken: [] },
		'keyMoods["OOO","4"]' : { isValid: false, rulesBroken: [] }   
	};   
	   
   

}