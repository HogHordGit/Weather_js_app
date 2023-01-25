export const directionOfWind = (degree) => {

    if ((degree>337.5 && degree<360)|| (degree>22.5 && degree<22.5))
    {return 'northerly';}
    else if(degree>22.5 && degree<67.5) {return 'north easterly';}
    else if(degree>67.5 && degree<112.5) {return 'easterly';}
    else if(degree>122.5 && degree<157.5) {return 'south easterly';} 
    else if(degree>157.5 && degree<202.5) {return 'southerly';}
    else if(degree>202.5 && degree<247.5) {return 'south westerly';}
    else if(degree>247.5 && degree<292.5) {return 'westerly';}
    else if(degree>292.5 && degree<337.5) {return 'north westerly';}

};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};