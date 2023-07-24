# Hash Tables

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
