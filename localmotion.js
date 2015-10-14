//vehicles :name, x, y, peoples, picks, moveUp, moveDown, moveLeft, moveRight, moveTo, pick
//peoples :name, x, y, origin, destination, time, time0, img
//buildings :name, x, y

var convert = 'ABCDEFG'

var start_flag = true

var dests = [0,1,2,3,4]


function turn(vehicles,peoples,buildings){
    for(var vid in vehicles)
    {
        vehicles[vid].moveTo(buildings[dests[vid]])
    }
    
    //when arrive at dest
    //pick new dest
    for(var vid in vehicles)
    {
        if(vehicles[vid].x == buildings[dests[vid]].x && vehicles[vid].y == buildings[dests[vid]].y)
            //pickup all people travelling in the same direction
            var new_dest = -1
            for(var pid in peoples)
            {
                if(peoples[pid].origin == buildings[dests[vid]].name)
                {
                    if(new_dest == -1)
                    {
                      new_dest = peoples[pid].destination
                      dests[vid] = convert.indexOf(new_dest)

                    }
                    if(new_dest == peoples[pid].destination)
                    {
                      vehicles[vid].pick(peoples[pid])
                    }
  //                  break
                }
            }
    }
}