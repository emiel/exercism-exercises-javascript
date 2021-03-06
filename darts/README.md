# Darts

Write a function that returns the earned points in a single toss of a Darts
game.

[Darts](https://en.wikipedia.org/wiki/Darts) is a game where players throw
darts to a
[target](https://en.wikipedia.org/wiki/Darts#/media/File:Darts_in_a_dartboard.jpg).

In our particular instance of the game, the target rewards with 4 different
amounts of points, depending on where the dart lands:

* If the dart lands outside the target, player earns no points (0 points).
* If the dart lands in the outer circle of the target, player earns 1 point.
* If the dart lands in the middle circle of the target, player earns 5 points.
* If the dart lands in the inner circle of the target, player earns 10 points.

The outer circle has a radius of 10 units (This is equivalent to the total
radius for the entire target), the middle circle a radius of 5 units, and the
inner circle a radius of 1. Of course, they are all centered to the same point
(That is, the circles are
[concentric](http://mathworld.wolfram.com/ConcentricCircles.html)) defined by
the coordinates (0, 0).

Write a function that given a point in the target (defined by its `real`
cartesian coordinates `x` and `y`), returns the correct amount earned by a dart
landing in that point.

## Setup

Go through the setup instructions for Javascript to install the necessary
dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

Please `cd` into exercise directory before running all below commands.

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xtest` to
`test`.


## Submitting Solutions

Once you have a solution ready, you can submit it using:

```bash
exercism submit darts.js
```

## Submitting Incomplete Solutions

It's possible to submit an incomplete solution so you can see how others have
completed the exercise.

## Exercise Source Credits

Inspired by an exercise created by a professor Della Paolera in Argentina

