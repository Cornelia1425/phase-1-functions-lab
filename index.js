// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(street-42)
}

function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street)*264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((start-destination)*264)

}

function calculatesFarePrice(start, destination){
    let distance = Math.abs((start-destination)*264)
    let fare 
    switch (true){ //why it's true? 
        //using switch (true) allows you to evaluate conditions within the switch statement and return the desired value based on whether the condition is true or false.
        case distance <= 400:
            return 0
     
        case distance>400 && distance<=2000:
            fare = (distance -400)*2*0.01;
            return fare;

        case distance>2000 && distance <=2500:
            fare = 25;
            return fare

        default:
            return 'cannot travel that far'
    }

}