function seconds(time) {

    const [hours, minutes, seconds] = time.split(':').map(Number);
    

    const totalSecondsInADay = 24 * 60 * 60; 

    const currentSeconds = (hours * 3600) + (minutes * 60) + seconds;
    
    
    return totalSecondsInADay - currentSeconds;
}


console.log(seconds('14:34:42')); 