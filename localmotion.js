//vehicles :name, x, y, peoples, picks, moveUp, moveDown, moveLeft, moveRight, moveTo, pick
//peoples :name, x, y, origin, destination, time, time0, img
//buildings :name, x, y

var convert = 'ABCDEFG'

var start_flag = true

var dests = [0,1,2,3,4]
/*
function compare_origin(a,b)
{
  return a.origin < b.origin ? -1:1
}
function compare_dest(a,b)
{
  return a.destination < b.destination ? -1:1
}
*/

function real_distance(pos1, pos2)
{
  return Math.pow(Math.pow(pos1.x - pos2.x,2) + Math.pow(pos1.y - pos2.y,2), 0.5)
}

function distance(pos1, pos2)
{
  return Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y)
}

function turn(vehicles,peoples,buildings)
{
    for(var vid in vehicles)
    {
        vehicles[vid].moveTo(buildings[dests[vid]])
    }
    
    //when arrive at dest
    //pick new dest
    for(var vid in vehicles)
    {
        if(vehicles[vid].x == buildings[dests[vid]].x && vehicles[vid].y == buildings[dests[vid]].y)
        {
            //pickup all people travelling in the same direction
            var new_dest = 0
            var dest_count = {}
            var local_max = 0
            var dist_list = {}

            //pickup the largest group travelling in the same direction
            for(var pid in peoples)
            {
                if(peoples[pid].origin == buildings[dests[vid]].name)
                {
                   // console.log(dest_count[peoples[pid].destination])
                    if(peoples[pid].destination in dest_count)
                    {
                    //  console.log("WINNER WINNER CHICKEN DINNER")
                      dest_count[peoples[pid].destination].push(peoples[pid])
                    }
                    else
                    {
                      dist_list[peoples[pid].destination] = distance(vehicles[vid],buildings[convert.indexOf(peoples[pid].destination)])
                     // console.log(dist_list[peoples[pid].destination])
                      local_max = peoples[pid].destination
                      dest_count[peoples[pid].destination] = [peoples[pid]]
                    }
                }
            }

            dest_value = {}
            if(local_max != 0)
              for(var did in dest_count)
              {
                 dest_value[did] = dest_count[did].length/dist_list[did]
                 console.log(dest_value[did])
              }

            if(local_max != 0)
            {
              //  console.log("NOT ZERO")
              for(var did in dest_value)
              {
                //  console.log(dest_count[did])
                if(dest_value[did] > dest_value[local_max])
                {
                 // console.log(dest_count[did].length)
                  local_max = did
                }
              }
              
              new_dest = local_max
              dests[vid] = convert.indexOf(new_dest)
              for(var ppid in dest_count[new_dest])
              {
                vehicles[vid].pick(dest_count[new_dest][ppid]) //peoples[pid])//
              }
              if(vehicles[vid].peoples.length > 1)
                console.log("WINNER WINNER CHICKEN DINNER")
            }
        }//end if v.x == d.x
    }//end for vehicles
}//end func turn