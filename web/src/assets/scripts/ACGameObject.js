const AC_GAME_OBJECTS = [];

export class ACGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() { //once

    }

    update() { //every frame except first frame

    }

    on_destroy() {//before destroy()
        console.log("on_destroy");
    }

    destroy() {
        this.on_destroy();

        for (let i in AC_GAME_OBJECTS) {
            const obj = ACGameObject[i];
            if (obj == this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; //last execute time
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) {//of: ele_value; in: index
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp-last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step);