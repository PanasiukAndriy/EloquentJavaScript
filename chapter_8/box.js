const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() {this.locked = true; },
    _content: [],
    get content() {
        if(this.locked) throw new Error("closed");
        return this._content;
    }    
}

function withBoxUnlocked(funcArg) {
    try{
        box.unlock();
        if(funcArg) box.content;
    }
    catch(e) {
        console.log(e.message);
    }
    finally {
        box.lock();
    }
} 