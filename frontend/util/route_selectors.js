


export const sortByOrder = points => {
    if (points.length === 0) return []; 
    let sorted = false 
    while (sorted === false) {
        sorted = true; 
        for (let i = 0; i < points.length - 1; i++) {
            if (points[i].route_order > points[i+1].route_order){
                let holder = points[i]; 
                points[i] = points[i+1];
                points[i+1] = holder; 
                sorted = false;  
            }
        }
    }
    return points; 
}
