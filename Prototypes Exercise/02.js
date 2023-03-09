(function () {
    String.prototype.ensureStart = function(str) {
        if(!this.startsWith(str)) {
            return str + this;
        } else {
            return this.toString();
        }
    };
    String.prototype.ensureEnd = function(str) {
        if(!this.endsWith(str)) {
            return this + str;
        } else {
            return this.toString();
        }
    };
    String.prototype.isEmpty = function() {
        if(this.length <= 0) {
            return true;
        } else {
            return false;
        }
    };
    String.prototype.truncate = function(n) {
        if(this.length < n) {
            return this.toString();
        } 
        if(n < 4) {
            return '.'.repeat(n);
        } else {
            let lastIndex = this.substring(0, n - 2).lastIndexOf(' ');
            if(lastIndex !== -1) {
                return this.substring(0, lastIndex) + '...';
            } else {
                return this.substring(0, n - 3) + '...';
            }
        }
    };
    String.format = function(string, ...params) {
        for(let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        };
        return string;
    };
})()


let str = 'my string';
console.log(str);
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
  'dog');
console.log(str);