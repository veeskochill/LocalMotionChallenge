function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}

//vehicles :name, x, y, peoples, picks, moveUp, moveDown, moveLeft, moveRight, moveTo, pick
//peoples :name, x, y, origin, destination, time, time0, img
//buildings :name, x, y
var flag = false
var dest  = 2
var convert = 'ABCDEFG'

var start_flag = true

var dests = [0,1,2,3,4]


function turn(vehicles,peoples,buildings){
   //documentation can be found in the source
   //Good luck :)
    //console.log(Object.getOwnPropertyNames(buildings[0]))
    //init to some dest
    for(var vid in vehicles)
    {
        vehicles[vid].moveTo(buildings[dests[vid]])
    }
    
    //when arrive at dest
    //pick new dest
    for(var vid in vehicles)
    {
        if(vehicles[vid].x == buildings[dests[vid]].x && vehicles[vid].y == buildings[dests[vid]].y)
            for(var pid in peoples)
            {
                if(peoples[pid].origin == buildings[dests[vid]].name)
                {
                    vehicles[vid].pick(peoples[pid])
                    dests[vid] = convert.indexOf(peoples[pid].destination)
                    break
                }
            }
    }
    
    
    /*
    if(vehicles[4].x == buildings[dest].x && vehicles[4].y == buildings[dest].y)
    {
        flag = true
        for(var p in peoples)
        {
            if(peoples[p].origin == buildings[dest].name)
            {
                vehicles[4].pick(peoples[p])
                dest = convert.indexOf(peoples[p].destination)
                console.log(dest)
                //console.log(vehicles[4].peoples)
              //  vehicles[4].moveTo(peoples[p].destination)
                break
                //console.log(peoples[p].origin, peoples[p].destination)
            }
        }
    }
 //   if(flag == true)
   // {
//        vehicles[4].moveTo(buildings[1])
  //  }
   // console.log(peoples[4].time, peoples[4].time0);
    }
    */
}