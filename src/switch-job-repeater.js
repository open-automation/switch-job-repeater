// For each helper function
var forEach = function(array, callback){
   var currentValue, index;
   var i = 0;
   for (i; i < array.length; i += 1) {
      if(typeof array[i] == "undefined"){
         currentValue = null;
      } else {
         currentValue = array[i];
      }
      index = i;
      callback(currentValue, i, array);
    }
}

var getProperties = function(s : Switch)
{
		var prop = {
			repeat_quantity: s.getPropertyValue("RepeatQuantity")
		}

		return prop;
}


function jobArrived( s : Switch, job : Job )
{
	var p = getProperties(s);

	if(!parseInt(p.repeat_quantity)){
		job.fail("Repeat quantity '" + p.repeat_quantity + "' could not be parsed as an interger.");
	}

	var loop_array = new Array(parseInt(p.repeat_quantity));

	s.log(-1, "Looping " + loop_array.length + " (" + (p.repeat_quantity) + ") times.");

	forEach(loop_array, function(empty, index){
		job.sendToSingle( job.getPath() );
	});

}
