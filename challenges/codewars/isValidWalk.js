// You live in the city of Cartesia where all roads are laid out in a perfect grid.

// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.

// The city provides its citizens with a Walk Generating App on their phones

// -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).

// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,

// so create a function that will return true if the walk the app gives you will take you exactly ten minutes

// you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    //first check to see if walk is long enough
    if (walk.length != 10) {
        return false;
    } else {
        // set the x, y coordinates for our 'return' position
        let position = [0, 0];
        // read next direction & add or subtract a block to each coordinate
        for (let i = 0; i < walk.length; i++) {
            switch (walk[i]) {
                case "n":
                    position[0] += 1;
                    break;
                case "s":
                    position[0] -= 1;
                    break;
                case "e":
                    position[1] += 1;
                    break;
                case "w":
                    position[1] -= 1;
            }
        }
        // if we are back at our 'return' coordinate of 0, 0 return true
        if (position[0] === 0 && position[1] === 0) {
            return true;
        } else {
            return false;
        }
    }
}
