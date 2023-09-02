# Hash Tables

- [Code](../../algs/Algs&DS/DS/hashMap.ts)

- what is a hash table! and what a hashing algorithm is
- understand collisions and separate chaining and linear probing

## What?

- a hash table is way to store key-value pairs
- unordered, finding, adding and removing values are very fast!
- How would we write our own?
- how can we get human-readability and computer readability

## The hash part

- in order to look up values by key we need a way to convert keys int valid array indices
- "Hash" function does exactly this!
- always get the same output back
- map to an output of a fixed size
- usually a one way function

## What makes a good Hash?

- fast, constant time
- distributes things uniformly
- deterministic, same input yields same output
- always good to incorporate prime numbers

## How to handle Collisions
- Many strategies

### Separate Chaining
- store the values at each index in out array we store the values using a more sophisticated data structure
- ie. Array of Arrays

### Linear Probing
- When there is a collision we search through the array to find the next empty slot

### Set/get
- Hashing! using set/get in combination with the Class
- set will take in a key and a value, hash the key and decide how to place the data in that key, with linear probing or separate chaining
- Get takes a key and hashes the key
- go to that location and then check for the value in the nested DS (is using separate chaining)

