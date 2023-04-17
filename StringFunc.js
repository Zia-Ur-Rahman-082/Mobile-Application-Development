let str = "Welcome to Mobile Application Development";

// String length
console.log("Length is:" + str.length);

//UpperCase
s=str.toUpperCase();
console.log(s);

//LowerCase
s=str.toLowerCase();
console.log(s);

//slice() extracts a part of a string
console.log(str.slice(11,17));

//String substring
console.log(str.substring(11,17));
console.log(str.substring(11)); // return rest part of str. if 2nd parameter is omitted

//Replace.. replaces only first match
console.log(str.replace("Mobile Application Development" , "MAD"));

//ReplaceAll()
console.log(str.replaceAll("Welcome to Mobile Application Development" , "MAD"));

//string concat
let str1 = "Hey";
let str2 = "Zia";
let str3 = str1.concat(" " ,str2);
console.log(str3);

//accessing a specific index 
console.log(str1.charAt(1));
console.log(str1[1]); // same as above

//charCodeAt() method returns the unicode of the character at a specified index in a string
console.log(str1.charCodeAt(3));

//String trim().. removes whitespace from both sides of a string
let str4 = "      Hey Zia       ";
console.log(str4.trim());

//String trimStart()
//removes whitespace only from the start of a string
console.log(str4.trimStart());

//String trimEnd() 
//removes whitespace only from the end of a string
console.log(str4.trimEnd());

//search..returns the position of the first match
console.log(str);
console.log(str.search("Mobile"));

//StartsWith
console.log(str.startsWith("Welcome"));

//EndsWith
console.log(str.endsWith("Development"));

//Match
console.log(str.match("Application"));

//padStart() method pads a string from the start.
let text = "y";
let padded = text.padStart(5,"x");
console.log(padded);

//padEnd() method pads a string from the end
let text_ = "y";
let padded_ = text_.padEnd(5,"x");
console.log(padded_);

//split()
//by commas
console.log(str.split(","));
// by pipe |
console.log(str.split("|"));



