function createSortedList() {
    let obj = {
        element: [],
        size: 0,
        add (el) {
            this.element.push(el);
            this.size++;
            return this.element.sort((a, b) => a - b);
        },
        remove(i) {
            if (i >= 0 && i < this.element.length) {
                this.element.splice(i, 1);
                this.size--;
                return this.element.sort((a, b) => a - b);
            }
        },
        get (i) {
            if (i >= 0 && i <= this.element.length) {
                return this.element[i]
            }
        }
    }
    return obj;
}



let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
