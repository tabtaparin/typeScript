// Function Random Number between min and max
const randInt = (min, max) => { return Math.floor(Math.random() * (max - min)) + min; }; 

// Function Generate Number x Lenght
export const generate = (len) => {
    let str: string = "";
    let i: number = 1;
    while (i <= len) {
        str = (i == 1) ? str + randInt(1, 10) : str + randInt(0, 10);
        i++;
    }
    return str;
};

// Function Add a leading 0 
const addLeadingZero = (k: string, num: number): string => {
    for (let count = 1; count <= num; count++) {
        k = "0" + k;
    }
    return k;
}

// Function Add a lasting 0
const addZero = (p: string, num: number) => {
    if (p == "0") return p;
    for (let count = 1; count <= num; count++) {
        p = p + "0";
    }
    return p;
}

// Funtion Add String 
export const addStr = (first: string, second: string) => {
    let result = "";  // To store the sum bits 
    let len: number;
    if (first.length > second.length) {
        len = first.length;
        second = addLeadingZero(second, (first.length - second.length));
    }
    else {
        len = second.length;
        first = addLeadingZero(first, (second.length - first.length));
    }
    let carry = 0;  // Initialize carry 

    // Add all bits one by one 
    for (let i = len - 1; i >= 0; i--) {
        let firstBit = parseInt(first[i]);
        let secondBit = parseInt(second[i]);
        let sum = (firstBit + secondBit + carry) % 10;
        result = sum.toString() + result;
        carry = Math.floor((firstBit + secondBit + carry) / 10);
    }

    result = (carry == 0) ? result : carry.toString() + result;
    return result;
}

// Funtion Sub String 
export const subStr = (first: string, second: string) => {
    let result = "";  // To store the sum bits
    let len: number;
    if (first.length > second.length) {
        len = first.length;
        second = addLeadingZero(second, (first.length - second.length));
    }
    else {
        len = second.length;
        first = addLeadingZero(first, (second.length - first.length));
    }
    let carry = 0;  // Initialize carry 
    
    // Add all bits one by one 
    for (let i = len - 1; i >= 0; i--) {
        let firstBit = parseInt(first[i]);
        let secondBit = parseInt(second[i]);
        let sum = (10 + firstBit - secondBit + carry) % 10;
        result = sum.toString() + result;
        carry = Math.floor((firstBit - secondBit + carry) / 10);
    }

    return result;
}

// Fuction Multiply Number a and b using Karatsuba algorithm
export const multi_Kara = (a: string, b: string) => {
    //Break Condition
    if (a.length == 0 || b.length == 0) return "Error!! No input.";
    if (a.length == 1 || b.length == 1) {
        let c = +a * +b;
        return c.toString();
    }

    a = (a.length % 2 != 0) ? addLeadingZero(a, 1) : a;
    b = (b.length % 2 != 0) ? addLeadingZero(b, 1) : b;

    let n = (a.length < b.length) ? a.length : b.length; // Find Short Length
    let m = n / 2;

    let a1 = a.substr(0, m); // Frist String a
    let a2 = a.substr(m, a.length); // Second String a
    let b1 = b.substr(0, m); // Frist String b
    let b2 = b.substr(m, b.length); // Second String b

    let P1: string = multi_Kara(a1, b1);
    let P2: string = multi_Kara(a2, b2);
    let P3: string = multi_Kara(addStr(a1, a2), addStr(b1, b2));

    let P4: string = addZero(P1, n);
    let P5: string = addZero(subStr(subStr(P3, P1), P2), m);

    return addStr(addStr(P4, P5), P2);
} 
