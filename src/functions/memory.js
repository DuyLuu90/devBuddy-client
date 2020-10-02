class Memory {
    constructor() {
      this.memory = new Float64Array(1024);
      this.head = 0;
    }
    
    //reserve a contiguous block of memory, which we can safely modify, returning a pointer to the 1st box...
    allocate(size) {
      if (this.head + size > this.memory.length) {
        return null;
      }
      let start = this.head;
      this.head += size;
      return start;
    }
    
    //free the block of memory reserved using allocate
    free(ptr) {
        
    }
  
    copy(toIdx, fromIdx, size) {
      if (fromIdx === toIdx) {
        return;
      }
  
      if (fromIdx > toIdx) {
        // Iterate forwards
        for (let i = 0; i < size; i++) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      } else {
        // Iterate backwards
        for (let i = size - 1; i >= 0; i--) {
          this.set(toIdx + i, this.get(fromIdx + i));
        }
      }
    }
    
    //restore the val stored at a certain memory address
    get(ptr) {
      return this.memory[ptr];
    }
    
    //sets the val stored at a certain memory address
    set(ptr, value) {
      this.memory[ptr] = value;
    }
  }
  
  module.exports = Memory;